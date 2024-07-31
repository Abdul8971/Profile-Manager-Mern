const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userName: { type: String, required: true, trim: true },
  imageURL: { type: String, trim: true },
  description: { type: String, trim: true },
  location: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("Profile", ProfileSchema);
