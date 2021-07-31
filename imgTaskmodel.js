const mongoose = require('mongoose');
var imgSchema = mongoose.Schema({
      id: number,
      filename: String
});

var imgModule = mongoose.model("img", imgSchema);

module.exports = imgModule;