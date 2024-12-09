const express = require("express");
const {
  addAvailability,
  getAvailability,
} = require("../controllers/availabilityController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/add", authMiddleware, addAvailability);
router.get("/", authMiddleware, getAvailability);

module.exports = router;
