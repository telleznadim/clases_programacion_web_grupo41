<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      multi-sort
      :sort-by="['id']"
      :sort-desc="[false]"
      :headers="headers"
      :items="pokemons"
      :search="search"
      :items-per-page="perPage"
      :disable-pagination="true"
      @update:items-per-page="changePerPage"
      :footer-props="{ 'items-per-page-options': [10, 20, 50, 100] }"
    >
      <template v-slot:item.front_default="{ item }">
        <router-link :to="{ name: 'Detail', params: { id: item.id } }">
          <v-avatar>
            <img :src="item.front_default" :alt="item.name" />
          </v-avatar>
        </router-link>
      </template>
      <template v-slot:item.tipo1="{ item }">
        <v-chip :color="getColor(item.tipo1)" :dark="getDark(item.tipo1)">
          {{ item.tipo1 }}
        </v-chip>
      </template>
      <template v-slot:item.tipo2="{ item }">
        <v-chip :color="getColor(item.tipo2)" :dark="getDark(item.tipo2)">
          {{ item.tipo2 }}
        </v-chip>
      </template>
    </v-data-table>
    <div class="text-center pb-4">
      <v-pagination
        :next="getPokemons"
        :circle="true"
        v-model="page"
        :length="Math.ceil(this.maxPokemons / perPage)"
        :total-visible="7"
        color="red accent-4"
      ></v-pagination>
    </div>
    <!-- <button @click="prueba">TEST</button> -->
  </v-card>
</template>

<script>
export default {
  computed: {
    getPokemons() {
      fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=" +
          this.perPage +
          "&offset=" +
          (this.page - 1) * this.perPage
      )
        .then((response) => response.json())
        .then((data) => {
          this.pokemons = [];
          data.results.forEach((elemento) => {
            fetch(elemento.url)
              .then((response) => response.json())
              .then((data) => {
                let type1 = data.types[0].type.name;
                let type2 = null;
                if (data.types[1]) {
                  type2 = data.types[1].type.name;
                }
                this.pokemons.push({
                  front_default: data.sprites.front_default,
                  nombre: data.name,
                  expbase: data.base_experience,
                  alto: data.height,
                  id: data.id,
                  peso: data.weight,
                  tipo1: type1,
                  tipo2: type2,
                  salud: data.stats[0].base_stat,
                  ataque: data.stats[1].base_stat,
                  defensa: data.stats[2].base_stat,
                  s_ataque: data.stats[3].base_stat,
                  s_defensa: data.stats[4].base_stat,
                  velocidad: data.stats[5].base_stat,
                });
              });
          });
        });
    },
  },

  mounted() {
    console.log("Mounted");
    this.getPokemons;
  },
  data() {
    return {
      maxPokemons: 649,
      page: 1,
      perPage: 20,
      search: "",
      pokemons: [],
      headers: [
        { text: "", value: "front_default", sortable: false },
        { text: "Id", value: "id" },
        {
          text: "Name",
          align: "start",

          value: "nombre",
        },
        { text: "BaseExp", value: "expbase" },
        { text: "Height", value: "alto" },
        { text: "Weight", value: "peso" },
        { text: "Type1", value: "tipo1" },
        { text: "Type2", value: "tipo2" },
        { text: "HP", value: "salud" },
        { text: "Atack", value: "ataque" },
        { text: "Defense", value: "defensa" },
        { text: "S_Atack", value: "s_ataque" },
        { text: "S_Defense", value: "s_defensa" },
        { text: "Speed", value: "velocidad" },
      ],
    };
  },
  methods: {
    changePerPage(pag) {
      //   console.log("input", pag);
      this.perPage = pag;
      // this.getPokemons;
    },
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
          return "grey darken-2";
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
        case "dark":
          // code block
          return "black";
        default:
          // code block
          return "white";
      }
    },
    // prueba() {
    //   console.log("PRUEBA");
    //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       data.results.forEach((elemento) => {
    //         fetch(elemento.url)
    //           .then((response) => response.json())
    //           .then((data) => {
    //             let type1 = data.types[0].type.name;
    //             let type2 = null;
    //             if (data.types[1]) {
    //               type2 = data.types[1].type.name;
    //             }
    //             this.pokemons.push({
    //               front_default: data.sprites.front_default,
    //               nombre: data.name,
    //               expbase: data.base_experience,
    //               alto: data.height,
    //               id: data.id,
    //               peso: data.weight,
    //               tipo1: type1,
    //               tipo2: type2,
    //               salud: data.stats[0].base_stat,
    //               ataque: data.stats[1].base_stat,
    //               defensa: data.stats[2].base_stat,
    //               s_ataque: data.stats[3].base_stat,
    //               s_defensa: data.stats[4].base_stat,
    //               velocidad: data.stats[5].base_stat,
    //             });
    //           });
    //       });
    //     });
    // },
  },
};
</script>