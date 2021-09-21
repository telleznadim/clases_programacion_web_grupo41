const app = Vue.createApp({
  //   template: "<h1>VUE GRUPO 41</h1>",
  data() {
    return {
      buscarNombre: "",
      pokemonsFiltrados: [],
      listaPokemons: [
        {
          nombre: "Charizard",
          numero: 6,
          tipo: "fuego",
          imagen: "assets/charizard.png",
          fav: false,
        },
        {
          nombre: "Greninja",
          numero: 658,
          tipo: "oscuridad",
          imagen: "assets/greninja.png",
          fav: false,
        },
        {
          nombre: "Lucario",
          numero: 448,
          tipo: "luchador",
          imagen: "assets/lucario.png",
          fav: false,
        },
        {
          nombre: "Dragonite",
          numero: 149,
          tipo: "dragon",
          imagen: "assets/dragonite.png",
          fav: false,
        },
        {
          nombre: "Pikachu",
          numero: 25,
          tipo: "electrico",
          imagen: "assets/pikachu.png",
          fav: false,
        },
        {
          nombre: "Metagross",
          numero: 376,
          tipo: "acero",
          imagen: "assets/metagross.png",
          fav: false,
        },
        {
          nombre: "Suicune",
          numero: 245,
          tipo: "agua",
          imagen: "assets/suicune.png",
          fav: false,
        },
        {
          nombre: "Glaceon",
          numero: 471,
          tipo: "hielo",
          imagen: "assets/glaceon.png",
          fav: false,
        },
        {
          nombre: "Gengar",
          numero: 94,
          tipo: "fantasma",
          imagen: "assets/gengar.jpg",
          fav: false,
        },
        {
          nombre: "Incineroar",
          numero: 727,
          tipo: "fuego",
          imagen: "assets/incineroar.jpg",
          fav: false,
        },
      ],
    };
  },
  methods: {
    cambiarFavorito(pokemon) {
      //   console.log("Favorito");
      //   console.log(pokemon);
      pokemon.fav = !pokemon.fav;
    },
    handleSubmit() {
      console.log("submit");
      console.log(this.buscarNombre);
      this.pokemonsFiltrados = this.listaPokemons.filter(
        (pokemon) => pokemon.fav
      );
      console.log(this.pokemonsFiltrados);
    },
  },
});

app.mount("#app");
