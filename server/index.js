const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const profileRoutes = require("./routes/ProfileRoutes");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/profile", profileRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
