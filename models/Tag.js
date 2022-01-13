const { model, Schema } = require("mongoose");

const TagSchema = new Schema({
label:String,
});

const TagModel = model("Tag", TagSchema);

module.exports = TagModel;