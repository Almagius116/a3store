const sendResponse = (res, statusCode, success, message, data = null) => {
  return res.status(statusCode).json({
    status: success ? "Success" : "Failed",
    message,
    isSuccess: success,
    data,
  });
};

module.exports = sendResponse;
