const mongoose = require("mongoose");
const Trainer = require("./modelos/trainers");

mongoose
  .connect("mongodb://localhost:27017/pokemonClase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a Mongo");
    buscarTodosEntrenadores();
    // buscarsEntrenadorPorId("615ac9f292c166b9d39bede4");
  })
  .catch((error) => {
    console.log(error);
  });

function buscarTodosEntrenadores() {
  Trainer.find()
    .limit(2)
    .then((resultado) => {
      console.log(resultado);
    });
}

function buscarsEntrenadorPorId(id) {
  Trainer.find({ _id: id })
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });
}
