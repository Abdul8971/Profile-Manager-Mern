const Profile = require("../models/Profile");

exports.addProfile = async (req, res) => {
  try {
    const { userName, imageURL, description, location } = req.body;
    const profile = new Profile({
      userName,
      imageURL,
      description,
      location,
    });

    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to add profile: " + err.message });
  }
};

exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: "Failed to get profiles: " + err.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { id } = req.params;
  const { userName, imageURL, description, location } = req.body;
  try {
    const profile = await Profile.findById(id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    profile.userName = userName;
    profile.imageURL = imageURL;
    profile.description = description;
    profile.location = location;
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Failed to update profile: " + err.message });
  }
};

exports.deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await Profile.findByIdAndDelete(id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json({ message: "Profile removed successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete profile: " + err.message });
  }
};
