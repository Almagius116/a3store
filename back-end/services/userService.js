const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { uploadImage } = require("./uploadImageService");

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
};
