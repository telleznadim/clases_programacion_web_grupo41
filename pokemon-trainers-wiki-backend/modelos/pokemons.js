const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  abilities: [
    {
      ability: { name: String, url: String },
      is_hidden: Boolean,
      slot: Number,
    },
  ],
  base_experience: Number,
  forms: [{ name: String, url: String }],
  game_indices: [
    { game_index: Number, version: { name: String, url: String } },
  ],
  height: Number,
  held_items: [String],
  id: Number,
  is_default: Boolean,
  location_area_encounters: String,
  moves: [
    {
      move: { name: String, url: String },
      version_group_details: [
        {
          level_learned_at: Number,
          move_learn_method: { name: String, url: String },
        },
      ],
    },
  ],
  name: String,
  order: Number,
  past_types: [String],
  species: { name: String, url: String },
  sprites: {
    back_default: String,
    back_female: String,
    back_shiny: String,
    back_shiny_female: String,
    front_default: String,
    front_female: String,
    front_shiny: String,
    front_shiny_female: String,
  },
  stats: [
    { base_stat: Number, effort: Number, stat: { name: String, url: String } },
  ],
  types: [{ slot: Number, type: { type: { name: String, url: String } } }],
  weight: Number,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = Pokemon;
