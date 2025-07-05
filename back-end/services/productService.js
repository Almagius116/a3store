const { Product, Category } = require("../models");
const { uploadImage } = require("./uploadImageService");
const { Op, where } = require("sequelize");

const getAllProduct = async (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 12;
  const offset = (page - 1) * limit;

  const filterProduct = {};
  if (query.categoryId != 0) {
    filterProduct.categoryId = Number(query.categoryId);
  }
  if (query.minPrice != 0 && query.maxPrice != 0) {
    filterProduct.price = {
      [Op.between]: [Number(query.minPrice), Number(query.maxPrice)],
    };
  } else if (query.minPrice != 0) {
    filterProduct.price = {
      [Op.gte]: Number(query.minPrice),
    };
  } else if (query.maxPrice != 0) {
    filterProduct.price = {
      [Op.lte]: Number(query.maxPrice),
    };
  }

  return await Product.findAndCountAll({
    where: filterProduct,
    limit,
    offset,
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
