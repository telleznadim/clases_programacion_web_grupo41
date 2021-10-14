<template>
  <div class="entrenadores">
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <h1 class="display-3 font-weight-black mt-3">
          Pokémons <span class="font-weight-regular">Trainers</span>
        </h1>
      </v-row>
    </v-container>

    <div class="d-flex justify-center flex-wrap" tile>
      <v-hover v-for="(trainer, index) in trainers" :key="trainer.name">
        <template v-slot:default="{ hover }">
          <v-card class="mx-4 my-2" max-width="300" min-height="500">
            <div class="d-flex justify-center mt-2">
              <v-avatar size="200">
                <img
                  :src="require('@/assets/trainers/' + trainer.img)"
                  :alt="trainer.img"
                />
              </v-avatar>
            </div>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h5 primary--text">
                  {{ trainer.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- <v-card-text> -->

            <!-- <v-row align="center" height="400">
              <v-col class="text-caption text-justify" cols="12"> -->
            <v-card class="d-flex align-start mb-6" flat height="150" tile>
              <v-card-text class="text-caption text-justify">
                {{ trainer.text }}
              </v-card-text>
            </v-card>

            <v-list-item class="d-flex justify-center mb-4" height="100%">
              <AddPokemonForm
                v-if="!trainer.fav_pkm[0]"
                :color="'red accent-4'"
                :trainer_id="trainer._id"
                @pokemonAdded="pokemonAdded"
              />

              <div v-if="trainer.fav_pkm[0]" class="mx-4">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <v-btn icon x-large @click="deletePokemon(0, index)">
                        <v-avatar v-if="trainer.fav_pkm[0]" fab dark size="85">
                          <img
                            :src="trainer.fav_pkm[0].sprites.front_default"
                            :alt="trainer.fav_pkm[0].name"
                          />
                        </v-avatar>
                      </v-btn>
                    </div>
                  </template>
                  <span class="text-caption">Click to delete</span>
                </v-tooltip>
              </div>

              <AddPokemonForm
                v-if="!trainer.fav_pkm[1]"
                :color="'yellow darken-1'"
                :trainer_id="trainer._id"
                @pokemonAdded="pokemonAdded"
              />

              <div v-if="trainer.fav_pkm[1]" class="mx-4">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <v-btn icon x-large @click="deletePokemon(1, index)">
                        <v-avatar class="mx-2" fab size="85">
                          <img
                            :src="trainer.fav_pkm[1].sprites.front_default"
                            :alt="trainer.fav_pkm[1].name"
                          />
                        </v-avatar>
                      </v-btn>
                    </div>
                  </template>
                  <span class="text-caption">Click to delete</span>
                </v-tooltip>
              </div>

              <AddPokemonForm
                v-if="!trainer.fav_pkm[2]"
                :color="'grey lighten-1'"
                :trainer_id="trainer._id"
                @pokemonAdded="pokemonAdded"
              />
              <div v-if="trainer.fav_pkm[2]" class="mx-4">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <v-btn icon x-large @click="deletePokemon(2, index)">
                        <v-avatar fab dark size="85">
                          <img
                            :src="trainer.fav_pkm[2].sprites.front_default"
                            :alt="trainer.fav_pkm[2].name"
                          />
                        </v-avatar>
                      </v-btn>
                    </div>
                  </template>
                  <span class="text-caption">Click to delete</span>
                </v-tooltip>
              </div>
            </v-list-item>
          </v-card>
        </template>
      </v-hover>
    </div>
  </div>
</template>

<script>
import AddPokemonForm from "./AddPokemonForm.vue";

export default {
  mounted() {
    this.loadTrainers();
  },
  components: { AddPokemonForm },
  data: () => ({
    overlay: false,
    trainers: [],
  }),
  methods: {
    deletePokemon(n_btn, trainer_n) {
      const trainer_id = this.trainers[trainer_n]._id;
      const pokemon_id = this.trainers[trainer_n].fav_pkm[n_btn]._id;

      // POST request using fetch with error handling
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: trainer_id,
          _id: pokemon_id,
        }),
      };
      fetch("http://localhost:3000/rm-fav-pokemon", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          console.log(data);
          this.loadTrainers();
          // this.postId = data.id;
        })
        .catch((error) => {
          // this.errorMessage = error;
          console.log(error);
          console.error("There was an error!", error);
        });
    },
    loadTrainers() {
      fetch("http://localhost:3000/get-all-trainers")
        .then((response) => response.json())
        .then((data) => {
          this.trainers = data;
          console.log(data);
        });
    },
    pokemonAdded() {
      console.log("Pokemon Added");
      this.loadTrainers();
    },
  },
};
</script>
