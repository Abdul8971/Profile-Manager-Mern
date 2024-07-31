const express = require("express");
const router = express.Router();
const {
  addProfile,
  getProfiles,
  updateProfile,
  deleteProfile,
} = require("../controllers/ProfileController");

router.post("/", addProfile);
router.get("/", getProfiles);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

module.exports = router;
