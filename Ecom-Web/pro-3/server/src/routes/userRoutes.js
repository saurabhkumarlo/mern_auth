const { getAllProducts } = require("../controllers/userControllers");

const router = require("express").Router();

router.get("/", getAllProducts);

module.exports = router;
