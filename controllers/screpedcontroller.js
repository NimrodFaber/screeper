const Screped = require("../models/scraped_entities");

const addscreped = (siteId, title) => {
  return new Promise((resolve, rejrct) => {
    const screped = new Screped({ siteId, title });
    screped
      .save()
      .then((screped) => resolve(screped))
      .catch((err) => rejrct(err));
  });
};

module.exports = { addscreped };
