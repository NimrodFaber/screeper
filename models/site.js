const mongoose = require("mongoose");
const siteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "שדה שם הוא שדה נדרש",
  },
  url: {
    type: String,
    required: "שדה כתובת הוא שדה נדרש",
  },
  selector: {
    type: String,
    required: "שדה כתובת הוא שדה נדרש",
  },
});
/* StoreSchema.plugin(require("mongoose-autopopulate"));
StoreSchema.methods.testFunc = function testFunc(params) {}; */
module.exports = mongoose.model("Site", siteSchema);
