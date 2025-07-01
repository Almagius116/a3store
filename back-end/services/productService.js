const { Product, Category } = require("../models");
const { uploadImage } = require("./uploadImageService");

const getAllProduct = async () => {
  return await Product.findAll({
    include: {
      model: Category,
      as: "category",
      attributes: ["id", "name", "description"],
    },
  });
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const getProductById = async (id) => {
  return await Product.findByPk(id);
};

const updateProduct = async (id, data) => {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.update(data);
  return product;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.destroy();
  return true;
};

const uploadProductImage = async (fileBuffer) => {
  return await uploadImage(fileBuffer, {
    folder: "/products",
    fileName: `product-${Date.now()}`,
  });
};

module.exports = {
  getAllProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  uploadProductImage,
};
