const { createProduct, getAllProducts } = require("../controllers/ProductsControllers");

const router = require("express").Router();

router.post("/createProduct", createProduct);
router.get("/getAllProduct",getAllProducts)

module.exports = router;
