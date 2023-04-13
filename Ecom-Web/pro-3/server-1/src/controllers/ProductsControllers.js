const Product = require("../models/productsSchema");

// Create Product

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get All Product

exports.getAllProducts = async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({
    success: true,
    product,
  });
};
