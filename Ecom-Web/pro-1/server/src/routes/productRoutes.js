const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllProductDetails,
  createProductReview,
  getAllProductReviews,
  deletetReview,
} = require("../controllers/productControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/create/new", isAuthenticatedUser, createProduct);
router.get("/getAllProduct", getAllProducts);
router.put("/updateProduct/:id", authorizeRoles("admin"), updateProduct);
router.delete(
  "/deleteProduct/:id",

  deleteProduct
);
router.get("/getProductDetails/:id", getAllProductDetails);
router.put("/review", isAuthenticatedUser, createProductReview);
router.get("/reviews", getAllProductReviews);
router.delete("/reviews", isAuthenticatedUser, deletetReview);
module.exports = router;
