const express = require("express");

const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, upliftinh nees",
    tag: "Technology",
    username: "TonyStark",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Inspirational Insights, a newsletter that brings motivational stories and insights",
    tag: "Inspiration",
    username: "OptimistExplorer",
    date: "2022-01-03",
  },
  {
    id: 3,
    text: "Nature's Delight, a newsletter celebrating the beauty of the natural world",
    tag: "Nature",
    username: "GreenDreamer",
    date: "2022-01-04",
  },
  {
    id: 4,
    text: "Heartwarming Chronicles, a newsletter sharing touching and heartwarming tales",
    tag: "Emotion",
    username: "EmpathyAdvocate",
    date: "2022-01-05",
  },
];

// get ideas
router.get("/", (req, res) => {
  res.json({ succes: true, data: ideas });
});
// get single idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res.status(404).json({ succes: false, error: "Not found" });
  }
  res.json({ succes: true, data: idea });
});

module.exports = router;
