const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const trinerSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  fav_pkm: [
    {
      _id: String,
      name: String,
      sprites: {
        front_default: String,
      },
    },
  ],
  text: String,
});

const Trainer = mongoose.model("Trainer", trinerSchema);
module.exports = Trainer;
