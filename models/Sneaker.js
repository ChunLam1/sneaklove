const { model, Schema } = require("mongoose");

const SneakerSchema = new Schema({
    name: String,
    ref: String,
    size: Number,
    description: String,
    price: Number,
    image: String,
    category: {type:String, enum:["men", "women", "kids"]},
    id_tags: [{type: Schema.Types.ObjectId, ref: 'Tags'}]
});

const SneakerModel = model("sneaker", SneakerSchema);

module.exports = SneakerModel;

    