const Product = require("../models/product");

const createProduct = async (productData) => {
    const newProduct = new Product(productData);
    return await newProduct.save();
};

const getProductsByIds = async (ids) => {
    return await Product.find({ _id: { $in: ids } });
};

module.exports = { createProduct, getProductsByIds };
