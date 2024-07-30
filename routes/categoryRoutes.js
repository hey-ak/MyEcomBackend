const express = require("express");
const { addCategory, getCategories } = require("../controllers/categoryController");
const router = express.Router();

router.post("/category", addCategory);
router.get("/category",getCategories);


module.exports = router