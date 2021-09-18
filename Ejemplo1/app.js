console.log("APP . JS Grupo 41");

const app = Vue.createApp({
  //   template: "<h1>VUE GRUPO 41</h1>",
  data() {
    return {
      nombre: "Charizard",
      numero: 6,
      tipo: "fuego",
      mostrarPokemons: true,
    };
  },
  methods: {
    incNumero() {
      this.numero = this.numero + 1;
    },
    decNumero() {
      this.numero = this.numero - 1;
    },
    ocultarPokemons() {
      console.log("OcultarPokemons");
      this.mostrarPokemons = !this.mostrarPokemons;
    },
  },
});

app.mount("#grupo41");
