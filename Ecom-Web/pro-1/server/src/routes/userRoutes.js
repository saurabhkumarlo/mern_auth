const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", isAuthenticatedUser, loginUser);
router.get("/logout", isAuthenticatedUser, logout);
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.put("/me/update", isAuthenticatedUser, updateProfile);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUser
);
router.put("/admin/users/role", updateUserRole);
router.delete(
  "/admin/users/remove/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser
);
module.exports = router;
