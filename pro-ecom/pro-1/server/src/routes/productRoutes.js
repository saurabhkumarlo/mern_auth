const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductDetails,
} = require("../controllers/productControllers");

const router = require("express").Router();

router.post("/createProduct/new", createProduct);
router.get("/products", getAllProducts);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/getAllProductsDeatils/:id", getAllProductDetails);

module.exports = router;
