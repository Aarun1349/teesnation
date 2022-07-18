const express = require("express");
const router = express.Router();
const { signup, sayHi } = require("../controller/userController");

router.post("signup", signup);
router.get("sayhi", sayHi);

module.exports = router;
