const imagekit = require("../utils/imagekit");

const uploadImage = async (fileBuffer, options = {}) => {
  const { folder = "/", fileName = `image-${Date.now()}` } = options;
  const result = await imagekit.upload({
    file: fileBuffer,
    fileName,
    folder,
  });

  return result.url;
};

module.exports = {
  uploadImage,
};
