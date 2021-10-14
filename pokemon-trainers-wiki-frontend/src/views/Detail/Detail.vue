<template>
  <div>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title>
          <h2 class="text-capitalize">No. {{ id }} {{ pokemon.name }}</h2>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <div>
          <v-chip
            class="mx-1 text-h6"
            v-for="type in pokemon.types"
            :key="type.type.name"
            :color="getColor(type.type.name)"
            :dark="getDark(type.type.name)"
          >
            {{ type.type.name }}
          </v-chip>
        </div>
      </v-toolbar>

      <v-card-text class="grey lighten-4">
        <v-sheet max-width="800" height="auto" class="mx-auto rounded-xl" fluid>
          <v-row justify="center" align="center" class="mx-3">
            <v-col cols="3" class="d-flex justify-center">
              <v-hover v-slot="{ hover }">
                <v-avatar size="140" align-self-center>
                  <img
                    :src="hover ? pokemon.front_shiny : pokemon.sprite_front"
                    alt="sprite_front"
                  />
                </v-avatar>
              </v-hover>
            </v-col>
            <v-col cols="3" class="d-flex justify-center">
              <v-avatar size="100">
                <img :src="pokemon.sprite_back" alt="sprite_back" />
              </v-avatar>
            </v-col>
            <v-col cols="4" class="d-flex justify-center">
              <Abilities :abilities="pokemon.abilities" />
            </v-col>
            <v-col cols="2" class="justify-end d-flex">
              <Stats2
                :base_experience="pokemon.base_experience"
                :height="pokemon.height"
                :weight="pokemon.weight"
              />
            </v-col>
          </v-row>
          <v-row justify="center" align="center" class="mx-3">
            <v-col justify="center" align="center" cols="12">
              <Stats :stats="pokemon.stats" />
            </v-col>
          </v-row>

          <v-row justify="center" align="start" class="mx-2">
            <v-col cols="6">
              <Moves :moves="pokemon.moves" />
            </v-col>

            <v-col cols="6">
              <Games :games="pokemon.games" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-text>
      <!-- <v-btn @click="Prueba">Test</v-btn> -->
    </v-card>
  </div>
</template>

<script>
import Abilities from "./components/Abilities.vue";
import Stats2 from "./components/Stats2.vue";
import Stats from "./components/Stats.vue";
import Games from "./components/Games.vue";
import Moves from "./components/Moves.vue";

export default {
  components: {
    Abilities,
    Stats2,
    Stats,
    Games,
    Moves,
  },
  props: ["id"],
  methods: {
    getDark(tipo) {
      switch (tipo) {
        case "electric":
          // code block
          return false;
        case "normal":
          // code block
          return false;

        default:
          // code block
          return true;
      }
    },
    getColor(tipo) {
      switch (tipo) {
        case "poison":
          // code block
          return "purple darken-3";
        case "electric":
          // code block
          return "yellow darken-1";
        case "fairy":
          // code block
          return "pink lighten-1";
        case "grass":
          // code block
          return "teal";
        case "water":
          // code block
          return "blue darken-3";
        case "fire":
          // code block
          return "red accent-4";
        case "bug":
          // code block
          return "light-green accent-4";
        case "normal":
          // code block
          return "grey lighten-4";
        case "ground":
          // code block
          return "brown darken-1";
        case "fighting":
          // code block
          return "lime darken-4";
        case "psychic":
          // code block
          return "lime darken-2";
        case "rock":
          // code block
          return "grey darken-3";
        case "ice":
          // code block
          return "cyan";
        case "ghost":
          // code block
          return "purple darken-4";
        case "flying":
          // code block
          return "indigo lighten-2";
        case "dragon":
          // code block
          return "deep-orange darken-2";
        case "steel":
          // code block
          return "blue-grey darken-1";

        default:
          // code block
          return "white";
      }
    },
    Prueba() {
      console.log("Prueba");
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.id)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  mounted() {
    console.log("Detail mounted");
    fetch("http://localhost:3000/get-pokemon/" + this.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.pokemon = {
          name: data.name,
          id: data.id,
          types: data.types,
          sprites: data.sprites,
          sprite_front: data.sprites.front_default,
          sprite_back: data.sprites.back_default,
          front_shiny: data.sprites.front_shiny,
          abilities: data.abilities,
          stats: data.stats,
          moves: data.moves,
          base_experience: data.base_experience,
          height: data.height,
          weight: data.weight,
          games: data.game_indices,
        };
        console.log(this.pokemon);
      });
  },
  data() {
    return {
      pokemon: {},
    };
  },
};
</script>