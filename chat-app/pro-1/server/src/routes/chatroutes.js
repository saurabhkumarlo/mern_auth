const { getAllChat } = require("../controllers/chatapp");

const router = require("express").Router();

router.get("/all/chat", getAllChat);
router.get("/all/chat/:id", getAllChat);

module.exports = router;
