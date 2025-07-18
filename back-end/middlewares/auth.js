const jwt = require("jsonwebtoken");
const sendResponse = require("../utils/sendResponse");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return sendResponse(res, 401, false, "Token is missing");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (err) {
    sendResponse(res, 403, false, "Access denied");
  }
};

module.exports = {
  auth,
};
