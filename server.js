const express = require("express");
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "This is json" });
});

const ideasRouter = require("./routes/ideas");

app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log("Works");
});
