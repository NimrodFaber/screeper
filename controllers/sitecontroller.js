const Site = require("../models/site");
const axios = require("axios").default;
const { parse } = require("node-html-parser");
const addSITE = (name, url, selector) => {
  return new Promise((resolve, rejrct) => {
    const site = new Site({ name, url, selector });
    site
      .save()
      .then((site) => resolve(site))
      .catch((err) => rejrct(err));
  });
};
const getallSITE = (name, url) => {
  return new Promise((resolve, rejrct) => {
    Site.find()
      .then((site) => resolve(site))
      .catch((err) => rejrct(err));
  });
};
const getbyid = (_id) => {
  return new Promise((resolve, rejrct) => {
    Site.findById(_id)
      .then((site) => {
        exiostitle(site._doc.url, site._doc.selector).then((title) => {
          resolve(title);
        });
        /*  exiostitle(site._doc.url) */
      })
      .catch((err) => rejrct(err));
  });
};

function exiostitle(site, selector) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${site}`)
      .then(function (response) {
        let html = parse(response.data);
        resolve(html.querySelector(`${selector}`).text);
      })
      .catch((err) => reject(err));
  });
}

module.exports = { addSITE, getallSITE, getbyid };
