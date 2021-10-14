<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        fab
        dark
        :color="color"
        v-bind="attrs"
        v-on="on"
        @click="LoadAllPokemons"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Add Favorite Pokemon</span>
      </v-card-title>
      <v-card-text>
        <v-autocomplete
          v-model="model"
          :hint="
            !isEditing ? 'Click the icon to edit' : 'Click the icon to save'
          "
          :items="pokemons"
          :readonly="!isEditing"
          :label="`Pokemon — ${isEditing ? 'Editable' : 'Readonly'}`"
          persistent-hint
          prepend-icon="mdi-pokeball"
        >
          <template v-slot:append-outer>
            <v-slide-x-reverse-transition mode="out-in">
              <v-icon
                :key="`icon-${isEditing}`"
                :color="isEditing ? 'success' : 'info'"
                @click="EditHandle"
                v-text="
                  isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'
                "
              >
              </v-icon>
            </v-slide-x-reverse-transition>
          </template>
        </v-autocomplete>

        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = !dialog">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="AddFavPokemon"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </v-row> -->
</template>

<script>
export default {
  name: "add-pokemon-form",
  props: ["color", "trainer_id"],

  data: () => ({
    dialog: false,
    isEditing: false,
    model: "",
    pokemons: [],
    pokemonSelected: null,
  }),
  methods: {
    EditHandle() {
      this.isEditing = !this.isEditing;
      if (!this.isEditing & (this.model != "")) {
        const model = this.model;

        // console.log("Prueba Edit");
        const id_pkm = model.substring(0, model.indexOf("."));

        fetch("http://localhost:3000/get-pokemon-img/" + id_pkm)
          .then((response) => response.json())
          .then((data) => {
            this.pokemonSelected = data;
            // console.log(data);
          });
      }
    },
    Test() {
      console.log(this.model);
      console.log(this.trainer_id);
    },
    AddFavPokemon() {
      if (this.pokemonSelected) {
        console.log(this.pokemonSelected.id);

        // POST request using fetch with error handling
        const requestOptions = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.trainer_id,
            pokemon: {
              _id: String(this.pokemonSelected.id),
              name: this.pokemonSelected.name,
              sprites: {
                front_default: this.pokemonSelected.sprites.front_default,
              },
            },
          }),
        };
        fetch("http://localhost:3000/add-fav-pokemon", requestOptions)
          .then(async (response) => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
            console.log(data);
            this.dialog = false;
            this.$emit("pokemonAdded");
            // this.postId = data.id;
          })
          .catch((error) => {
            // this.errorMessage = error;
            console.log(error);
            console.error("There was an error!", error);
          });
      }
    },
    LoadAllPokemons() {
      fetch("http://localhost:3000/get-all-pokemon-imgs")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // console.log(data);
          this.pokemons = [];
          data.forEach((pokemon) => {
            this.pokemons.push(pokemon.id + ". " + pokemon.name);
          });
        });
    },
  },
};
</script>