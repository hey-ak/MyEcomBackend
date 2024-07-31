const express = require("express");
const { addCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/category", addCategory);
router.get("/category",getCategories);
router.put("/category",updateCategory)
router.delete("/category",deleteCategory)


module.exports = router