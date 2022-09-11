const { Router } = require('express');
const { getAllProducts, getCategory, getCategories, getProducts } = require('../controller/products');
const router = Router();

//Routes
router.get('/', getAllProducts );
router.get('/:product', getProducts );
router.get('/category/all/', getCategories);
router.get('/category/:category', getCategory );

module.exports = router;