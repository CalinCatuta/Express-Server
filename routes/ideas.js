const express = require("express");
const Idea = require("../modules/Idea");
const router = express.Router();

// get ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ succes: true, data: ideas });
  } catch (error) {
    res.status(500).json({ succes: false, error: "Something went wrong" });
  }
});
// get single idea
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ succes: true, data: idea });
  } catch (error) {
    res.status(500).json({ succes: false, error: "Something went wrong" });
  }
});
// Add an idea
router.post("/", async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const saveIdea = await idea.save();
    res.json({ succes: true, data: saveIdea });
  } catch (error) {
    res.status(500).json({ succes: false, error: "Something went wrong" });
  }
});

//update idea
router.put("/:id", async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );
    res.json({ succes: true, data: updatedIdea });
  } catch (error) {
    res.status(500).json({ succes: false, error: "Something went wrong" });
  }
});
// delet idea
router.delete("/:id", async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ succes: true, data: {} });
  } catch (error) {
    res.status(500).json({ succes: false, error: "Something went wrong" });
  }
});

module.exports = router;
