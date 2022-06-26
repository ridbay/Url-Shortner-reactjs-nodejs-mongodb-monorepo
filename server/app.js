const express = require("express");
const cors = require("cors");

const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(cors());

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Welcome to URL shortner" });
// });
app.use("/", require("./routes/index"));
app.use("/api", require("./routes/urls"));

// Server Setup
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
