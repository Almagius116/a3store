const { Category } = require("../models");

const getAllCategory = async () => {
  return await Category.findAll({});
};

const createCategory = async (data) => {
  return await Category.create(data);
};

const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

const updateCategory = async (id, data) => {
  const category = await Category.findByPk(id);
  if (!category) return null;
  await category.update(data);
  return category;
};

const deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) return null;
  await category.destroy();
  return true;
};

module.exports = {
  getAllCategory,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
