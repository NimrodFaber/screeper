const mongoose = require("mongoose");
const screpedSchema = new mongoose.Schema({
  siteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "site",
    required: "שדה שם הוא שדה נדרש",
  },
  title: {
    type: String,
    required: "שדה כתובת הוא שדה נדרש",
  },
});
/* StoreSchema.plugin(require("mongoose-autopopulate"));
StoreSchema.methods.testFunc = function testFunc(params) {}; */
module.exports = mongoose.model("Screped", screpedSchema);
