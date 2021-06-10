const express = require("express");
​
const userController = require("../controllers/user.controller");
​
const router = express.Router();
​
router.get("/", userController.findAll);
​
router.post("/", userController.create);
​
router.get("/:id", userController.findOne);
​
router.put("/:id", userController.updateAysegul);
​
router.delete("/:id", userController.deleteEnes);
​
module.exports = router;