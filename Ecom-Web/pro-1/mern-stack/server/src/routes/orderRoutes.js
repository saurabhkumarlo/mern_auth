const {
  newOrder,
  getSingleOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/order/new", isAuthenticatedUser, newOrder);
// router.post(
//   "/order/:id",
//   isAuthenticatedUser,
//   authorizeRoles("admin"),
//   getSingleOrder
// );
// router.get("/order/me", isAuthenticatedUser, myOrder);

router.get(
  "/admin/orders",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllOrders
);

router.put(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrder
);

router.delete(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrder
);

module.exports = router;
