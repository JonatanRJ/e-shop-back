const pool = require("./connection");

//Query to keep alive the DB connection
const keepAlive = () =>{
    pool.query(`SELECT 1`);
}

//Query to get all the products
const queryProducts = () => {
    return new Promise( (resolve, reject)  => {
        pool.query(`SELECT product.id, product.name, url_image, price, discount, category.name AS category 
                    FROM product 
                    INNER JOIN category 
                    ON product.category = category.id`, 
        (err, results) => {
            if( err ){
                reject([]);
            }
            resolve(results);
        });
    });
};

//Query to get all the products by name
const queryProductByName = ( name = "") => {
    return new Promise( (resolve, reject)  => {
        pool.query(`SELECT product.id, product.name, url_image, price, discount, category.name AS category 
                    FROM product 
                    INNER JOIN category 
                    ON product.category = category.id
                    AND product.name LIKE ?`,
        `%${ name }%`, 
        (err, results) => {
            if( err ){
                reject([]);
            }
            resolve(results);
        });
    });
}

//Query to obtain all the categories
const queryCategories = () => {
    return new Promise( (resolve, reject)  => {
        pool.query(`SELECT  category.name
                    FROM category`, 
        (err, results) => {
            if( err ){
                reject([]);
            }
            resolve(results);
        });
    });
}

//Query to get all the products by category
const queryProductsByCategory = ( category = "" ) => {
    return new Promise( (resolve, reject)  => {
        pool.query(`SELECT product.id, product.name, url_image, price, discount, category.name AS category 
                    FROM product 
                    INNER JOIN category 
                    ON product.category = category.id
                    AND category.name LIKE ?`,
        `%${ category }%`,
        (err, results) => {
            if( err ){
                reject([]);
            }
            resolve(results);
        });
    });
}

module.exports = {
    keepAlive,
    queryProducts,
    queryProductByName,
    queryCategories,
    queryProductsByCategory,
}