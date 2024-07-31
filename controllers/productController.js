const Product = require("../models/product");

const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});

    if (products.length === 0) {
      return response.json({
        msg: "No Products Found",
        error: false,
        products: [],
      });
    }
    return response.json({
      products,
      msg: "Fetched Products",
      error: false,
    });
  } catch (error) {
    console.log(error);
    return response.json({
      msg: "Something went wrong",
      error: true,
    });
  }
};

const addProducts = async (request, response) => {
  try {
    const { name, quantity, price, categoryId } = request.body;
    const newproduct = new Product({ name, quantity, price, categoryId });
    await newproduct.save();
    return response.json({
      msg: "Product Added Successfully",
      error: false,
    });
  } catch (error) {
    return response.json({
      msg: "Unable to Add Product",
      error: true,
    });
  }
};

const getProductsByCategory = async (request, response) => {
  const { categoryId } = request.body;
  try {
    const products = await Product.find({ categoryId });
    if (products.length === 0) {
      return response.json({
        msg: "No Products Found",
        error: false,
        products: [],
      });
    }
    return response.json({
      products,
      msg: "Fetched Products",
      error: false,
    });
  } catch (error) {
    console.log(error);
    return response.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};

const deleteProduct = async (request, response) => {
  const { productId } = request.params;
  try {
    await Product.findByIdAndDelete(productId);
    return response.json({
      msg: "Product Deleted",
      error: false,
    });
  } catch (error) {
    return response.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};

const updateProduct = async (request, response) => {
  const { productId } = request.params;
  const updatedData = request.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );

    if (!updatedProduct) {
      return response.json({
        msg: "Product Not Found",
        error: true,
      });
    }

    return response.json({
      msg: "Product Updated",
      error: false,
      product: updatedProduct,
    });
  } catch (error) {
    return response.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};


module.exports = {
  getProducts,
  addProducts,
  getProductsByCategory,
  deleteProduct,
  updateProduct
};
