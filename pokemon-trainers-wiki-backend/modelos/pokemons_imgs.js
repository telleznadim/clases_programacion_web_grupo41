const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonImgSchema = new Schema({
  id: Number,
  name: String,
  sprites: {
    front_default: String,
  },
});

const Pokemon_Img = mongoose.model("Pokemon_Img", pokemonImgSchema);
module.exports = Pokemon_Img;
