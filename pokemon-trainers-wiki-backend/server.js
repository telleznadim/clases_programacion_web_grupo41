const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Trainer = require("./modelos/trainers");
const Pokemon = require("./modelos/pokemons");
const Pokemon_Img = require("./modelos/pokemons_imgs");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/pokemonClase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a mongo...");
    console.log("Escuchando en puerto 3000");
    app.listen(process.env.PORT | 3000);
  })
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/get-all-trainers", (req, res) => {
  Trainer.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.post("/add-fav-pokemon", (req, res) => {
  const trainer_id = req.body.id;
  const pokemon = req.body.pokemon;
  console.log(trainer_id);
  console.log(pokemon);

  Trainer.updateOne({ _id: trainer_id }, { $addToSet: { fav_pkm: pokemon } })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.post("/rm-fav-pokemon", (req, res) => {
  const trainer_id = req.body.id;
  const pokemon_id = req.body._id;
  console.log(trainer_id);
  console.log(pokemon_id);

  Trainer.updateOne(
    { _id: trainer_id },
    { $pull: { fav_pkm: { _id: pokemon_id } } }
  )
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.get("/get-pokemon/:id", (req, res) => {
  console.log(req.params);
  const id_pkm = req.params.id;

  Pokemon.findOne({ id: id_pkm })
    .then((result) => {
      // return result;
      //   console.log(result);
      res.send(result);
    })
    .catch((err) => {
      // return err;
      console.log(err);
    });
});

app.get("/get-all-pokemon-imgs", (req, res) => {
  Pokemon_Img.find()
    .then((result) => {
      // console.log(result);
      res.send(result);
    })
    .catch((err) => {
      // console.log(err);
      res.send(err);
    });
});

app.get("/get-pokemon-imgs", (req, res) => {
  //   console.log(req.query);

  const offset = req.query.offset;
  const limit = req.query.limit;
  console.log(limit);
  console.log(offset);

  Pokemon_Img.find()
    .skip(parseInt(offset))
    .limit(parseInt(limit))
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/get-pokemon-img/:id", (req, res) => {
  console.log(req.params);
  const id_pkm = req.params.id;
  Pokemon_Img.findOne({ id: id_pkm })
    .then((result) => {
      // console.log(result);
      res.send(result);
    })
    .catch((err) => {
      // console.log(err);
      res.send(err);
    });
});
