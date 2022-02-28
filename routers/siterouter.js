const {
    addSITE,
    getallSITE,
    getbyid,
  } = require("../controllers/sitecontroller"),
  express = require("express"),
  app = express(),
  router = express.Router();

router.post("/", (req, res) => {
  addSITE(req.body.name, req.body.url, req.body.selector)
    .then((site) => res.json(site))
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  getallSITE()
    .then((site) => res.json({ site }))
    .catch((err) => console.log(err));
});
router.get("/scrape/:id", (req, res) => {
  getbyid(req.params.id)
    .then((site) => res.json({ site }))
    .catch((error) => res.json(error));
});

module.exports = router;
