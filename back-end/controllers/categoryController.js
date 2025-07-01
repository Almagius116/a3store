const categoryService = require("../services/categoryService");
const sendResponse = require("../utils/sendResponse");

const getAllCategory = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategory();
    sendResponse(res, 200, true, "Success get all category", { categories });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    sendResponse(res, 201, true, "Success add category", { newCategory });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);

    if (!category) {
      return sendResponse(res, 404, false, "Category not found", null);
    }

    sendResponse(res, 200, true, "Success get category", { category });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await categoryService.updateCategory(
      req.params.id,
      req.body
    );

    if (!updatedCategory) {
      return sendResponse(res, 404, false, "Category not found", null);
    }

    sendResponse(res, 200, true, "Success update category", updatedCategory);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await categoryService.deleteCategory(req.params.id);

    if (!deletedCategory) {
      return sendResponse(res, 404, false, "Category not found", null);
    }

    sendResponse(res, 200, true, "Success delete category");
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
