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

  const deleteCategory = async (request, response) => {
    try {
      const { id } = request.params;
      const deletedCategory = await Category.findByIdAndDelete(id);
      
      if (!deletedCategory) {
        return response.json({
          msg: "Category Not Found",
          error: true,
        });
      }
  
      return response.json({
        msg: "Category Deleted Successfully",
        error: false,
      });
    } catch (error) {
      return response.json({
        msg: "Unable to Delete Category",
        error: true,
      });
    }
  };
  
  const updateCategory = async (request, response) => {
    try {
      const { id } = request.params;
      const { name } = request.body;
      const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
      
      if (!updatedCategory) {
        return response.json({
          msg: "Category Not Found",
          error: true,
        });
      }
  
      return response.json({
        msg: "Category Updated Successfully",
        error: false,
        category: updatedCategory,
      });
    } catch (error) {
      return response.json({
        msg: "Unable to Update Category",
        error: true,
      });
    }
  };
  

module.exports = { addCategory , getCategories , updateCategory , deleteCategory };
