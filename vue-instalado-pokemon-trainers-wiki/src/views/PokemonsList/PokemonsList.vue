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
  </div>
</template>

<script>
import Table from "./components/Table.vue";
export default {
  name: "PokemonsList",
  components: { Table },
};
</script>

