const { uploadImage } = require("../services/uploadImageService");

const uploadGenericImage = async (req, res) => {
  const { folder } = req.body;
  const file = req.file;

  if (!file || !folder) {
    return res.status(400).json({ message: "File or folder missing" });
  }

  const imageUrl = await uploadImage(file.buffer, {
    folder: `/${folder}`,
    fileName: `${folder}-${Date.now()}`,
  });

  return res.status(200).json({ url: imageUrl });
};

module.exports = { uploadGenericImage };
