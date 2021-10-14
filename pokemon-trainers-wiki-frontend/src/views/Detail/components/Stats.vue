<template>
  <div>
    <h3 class="text-h5 ma-1 pa-1 font-weight-medium">Stats</h3>
    <v-row
      v-if="stats"
      justify="center"
      align="center"
      align-content="center"
      class="mx-3"
    >
      <v-col cols="4" v-for="i in 3" :key="i">
        <h5 class="text-subtitle-1 text-capitalize font-weight-bold">
          {{ stats[i - 1].stat.name }}
        </h5>

        <v-progress-circular
          :value="
            (stats[i - 1].base_stat / getDivider(stats[i - 1].stat.name)) * 100
          "
          :rotate="-90"
          :size="150"
          :width="25"
          :color="getColor(i - 1)"
          class="text-h4"
        >
          {{ stats[i - 1].base_stat }}
        </v-progress-circular>
      </v-col>
    </v-row>

    <v-row v-if="stats" justify="center" align="center" class="mx-3">
      <v-col cols="4" v-for="i in 3" :key="i">
        <h5 class="text-subtitle-1 text-capitalize font-weight-bold">
          {{ stats[i + 2].stat.name }}
        </h5>
        <v-progress-circular
          :value="
            (stats[i + 2].base_stat / getDivider(stats[i + 2].stat.name)) * 100
          "
          :rotate="-90"
          :size="150"
          :width="25"
          :color="getColor(i + 2)"
          class="text-h4"
        >
          {{ stats[i + 2].base_stat }}
        </v-progress-circular>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    getDivider(stat_name) {
      switch (stat_name) {
        case "speed":
          // code block
          return 200;
        case "hp":
          // code block
          return 255;
        case "attack":
          // code block
          return 181;
        case "defense":
          // code block
          return 230;
        case "special-attack":
          // code block
          return 173;
        case "special-defense":
          // code block
          return 230;
        default:
          // code block
          return true;
      }
    },
    getColor(i) {
      switch (i) {
        case 0:
          return "blue";
        case 1:
          return "orange";
        case 2:
          return "red";
        case 3:
          return "purple";
        case 4:
          return "pink";
        case 5:
          return "green";
      }
    },
  },
  props: ["stats"],
};
</script>