const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { uploadImage } = require("./uploadImageService");
const { sendOTP } = require("../utils/mailer");

const getAllUser = async () => {
  return await User.findAll({});
};

const createUser = async (data) => {
  const { fullName, email, password } = data;
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ fullName, email, password: hashedPassword });
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  const { fullName, email, password, phoneNumber, address } = data;
  const updatedData = {
    fullName,
    email,
    phoneNumber,
    address,
  };

  if (password && password.trim() !== "") {
    const hashedPassword = await bcrypt.hash(password, 10);
    updatedData.password = hashedPassword;
  }

  await user.update(updatedData);
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.destroy();
  return true;
};

const login = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return null;
  }
  const token = jwt.sign(
    { id: user.id, role: user.role, profilePic: user.profilePicture },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return { token, user };
};

const googleLogin = async (data) => {
  const email = data.emails[0].value;
  const fullName = data.displayName;
  const googleId = data.id;
  const profilePicture = data.photos[0].value;

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    const newUser = await User.create({
      email,
      fullName,
      password: "GOOGLE_USER",
      provider: "google",
      googleId,
      profilePicture,
    });
    return { user: newUser, needOTP: false };
  }

  if (user.provider === "local" && !user.googleId) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 10 * 60 * 1000);

    await user.update({ otpCode: otp, otpExpiry: expiry });

    await sendOTP(email, user.fullName, otp);

    return {
      user,
      needOTP: true,
      googleProfile: { googleId, fullName, profilePicture },
    };
  }

  return { user, needOTP: false };
};

const verifyOTPAndMerge = async (email, otp, googleProfile) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("Email tidak ditemukan");
  if (user.otpCode !== otp) throw new Error("OTP salah");
  if (new Date(user.otpExpiry) < new Date())
    throw new Error("OTP sudah kedaluwarsa");

  await user.update({
    googleId: googleProfile.googleId,
    provider: "google",
    otpCode: null,
    otpExpiry: null,
    fullName: googleProfile.fullName,
    profilePicture: googleProfile.profilePicture,
  });

  return user;
};

const uploadUserImage = async (fileBuffer) => {
  return await uploadImage(fileBuffer, {
    folder: "/users",
    fileName: `user-${Date.now()}`,
  });
};

module.exports = {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  uploadUserImage,
  googleLogin,
  verifyOTPAndMerge,
};
