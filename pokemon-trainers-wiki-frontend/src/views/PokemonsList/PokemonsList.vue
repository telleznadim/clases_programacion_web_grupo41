<template>
  <div>
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <h1 class="display-3 font-weight-black mt-3">
          Pokémons <span class="font-weight-regular">List</span>
        </h1>
      </v-row>
    </v-container>
    <v-container><Table /></v-container>
    <!-- {{ pokemon }}
    <v-btn @click="Prueba">PRUEBA</v-btn> -->
  </div>
</template>

<script>
import Table from "./components/Table.vue";
export default {
  methods: {
    Prueba() {
      console.log("Prueba");
      fetch("https://pokeapi.co/api/v2/pokemon/5")
        .then((response) => response.json())
        .then((data) => {
          this.pokemon = data;
          console.log(data);
        });
    },
  },
  data() {
    return {
      pokemon: "",
    };
  },
  name: "PokemonsList",
  components: { Table },
};
</script>

