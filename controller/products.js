const { queryProducts, queryProductsByCategory, queryCategories, queryProductByName, queryProductsByCategoryAndName } = require("../db/query")

//Get all the products
const getAllProducts = async (req, res) => {
    try {
        const products = await queryProducts();
        const total = products.length;
        if( total > 0){
            res.status(200).send(products);
        }
        else{
            res.status(404).send({message: "Products not found"});
        }
    } catch ( err ) {
        res.status(500).send({message: "Server error"});
    }
}

//Get the products by the name
const getProducts = async (req, res) => {
    try {
        const {product} = req.params;
        const products = await queryProductByName( product );
        const total = products.length;
        if( total > 0){
            res.status(200).send(products);
        }
        else{
            res.status(404).send({message: "Products not found"});
        }
    } catch ( err ) {
        res.status(500).send({message: "Server error"});
    }
}

//Get the categories
const getCategories = async (req, res) => {
    try{
        const categories = await queryCategories();
        const total = categories.length;
        if(total > 0){
            res.status(200).send(categories);
        }
        else{
            res.status(404).send({message: "Categories not found"});
        }
    } catch ( err ) {
        res.status(500).send({message: "Server error"});
    }
}

//Get products by category
const getCategory = async (req, res) => {
    try{
        const {category} = req.params;
        const products = await queryProductsByCategory(category);
        const total = products.length;

        if( total > 0){
            res.status(200).send(products);
        }
        else{
            res.status(404).send({message: "Products not found"});
        }
    } catch ( err ) {
        res.status(500).send({message: "Server error"});
    }
}

module.exports = {
    getAllProducts,
    getProducts,
    getCategories,
    getCategory,
}