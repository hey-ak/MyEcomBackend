const Category = require("../models/category");

const addCategory = async (request, response) => {
  try {
    const { name } = request.body;
    const newCategory = new Category({ name });
    await newCategory.save();
    return response.json({
      msg: "Category Added Successfully",
      error: false,
    });
  } catch (error) {
    return response.json({
      msg: "Unable to Add Category",
      error: true,
    });
  }
};

const getCategories = async (request, response) => {
    try {
      const categories = await Category.find({});
  
      if (categories.length === 0) {
        return response.json({
          msg: "No Category Found",
          error: false,
          categories: [],
        });
      }
      return response.json({
        categories,
        msg: "Fetched categories",
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

module.exports = { addCategory , getCategories };
