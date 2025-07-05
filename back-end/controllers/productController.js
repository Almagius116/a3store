const productService = require("../services/productService");
const sendResponse = require("../utils/sendResponse");

const getAllProduct = async (req, res) => {
  try {
    const products = await productService.getAllProduct(req.query);
    console.log("Prodak:", products);
    sendResponse(res, 200, true, "Success get all product", {
      products: products.rows,
      totalData: products.count,
      totalPages: Math.ceil(products.count / req.query.limit),
      currentPage: req.query.page,
    });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    sendResponse(res, 201, true, "Success add product", { newProduct });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product)
      return sendResponse(res, 404, false, "Product not found", null);

    sendResponse(res, 200, true, "Success get product", { product });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );

    if (!updatedProduct) {
      return sendResponse(res, 404, false, "Product not found", null);
    }

    sendResponse(res, 200, true, "Success update product", updatedProduct);
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleted = await productService.deleteProduct(req.params.id);
    if (!deleted)
      return sendResponse(res, 404, false, "Product not found", null);

    sendResponse(res, 200, true, "Success delete product");
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

module.exports = {
  getAllProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
