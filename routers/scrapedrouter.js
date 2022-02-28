const express = require("express"),
  app = express(),
  router = express.Router();
const { addscreped } = require("../controllers/screpedcontroller");

router.post("/", (req, res) => {
  addscreped(req.body.id, req.body.screped)
    .then((screped) => res.json(screped))
    .catch((err) => console.log(err));
});

module.exports = router;
