const jwt = require("jsonwebtoken");
const sendResponse = require("../utils/sendResponse");

const auth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return sendResponse(res, 401, false, "Token is missing");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    sendResponse(res, 403, false, "Access denied");
  }
};

module.exports = {
  auth,
};
