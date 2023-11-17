const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const app = express();

connectDB();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "This is json" });
});

const ideasRouter = require("./routes/ideas");

app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log("Works");
});
