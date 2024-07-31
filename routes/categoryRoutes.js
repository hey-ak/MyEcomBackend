const express = require("express");
const { addCategory, getCategories, updateCategory, deleteCategory } = require("../controllers/categoryController");
const router = express.Router();

router.post("/category", addCategory);
router.get("/category",getCategories);
router.put("/category/:id",updateCategory)
router.delete("/category/:id",deleteCategory)


module.exports = router