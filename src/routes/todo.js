const express = require("express");
const app = express();
const router = express.Router();
const { getTodos } = require("../controllers/todoController");

router.get("/", getTodos);
//this is a router 
router.post("/");

module.exports = router;