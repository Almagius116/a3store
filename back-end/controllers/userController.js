const userService = require("../services/userService");
const sendResponse = require("../utils/sendResponse");

const register = async (req, res, next) => {
  try {
    const newUser = await userService.createUser(req.body);
    sendResponse(res, 201, true, "Success add user", { newUser });
  } catch (err) {
    if ((err.errors[0].message = "email must be unique")) {
      return sendResponse(res, 409, false, "Email already exists");
    }
    sendResponse(res, 500, false, err.errors[0].message);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);

    if (!result) {
      return sendResponse(res, 401, false, "Email not registered", null);
    }

    const { token, user } = result;

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      maxAge: 60 * 60 * 1000,
    });

    sendResponse(res, 200, true, "Login successful", { user });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });

    sendResponse(res, 200, true, "Logout successful");
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const profile = async (req, res) => {
  try {
    sendResponse(res, 200, true, "Success", { user: req.user });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUser();
    sendResponse(res, 200, true, "Success get all user", { users });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const findUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return sendResponse(res, 404, false, "User not found", null);
    }

    sendResponse(res, 200, true, "Success get user", { user });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);

    if (!updatedUser) {
      return sendResponse(res, 404, false, "User not found", null);
    }

    sendResponse(res, 200, true, "Success update user", updatedUser);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);

    if (!deletedUser) {
      return sendResponse(res, 404, false, "User not found", null);
    }

    sendResponse(res, 200, true, "Success delete user");
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  getAllUsers,
  findUserById,
  register,
  updateUser,
  deleteUser,
  login,
  profile,
  logout,
};
