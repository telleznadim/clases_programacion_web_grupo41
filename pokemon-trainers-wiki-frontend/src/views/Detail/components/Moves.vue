<template>
  <div>
    <h2 class="text-h5 ma-1 pa-1 font-weight-medium">Moves</h2>

    <v-expansion-panels>
      <v-expansion-panel v-for="move in moves" :key="move.move.name">
        <v-expansion-panel-header class="text-capitalize pa-0">
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar
                :color="getColorMet()"
                size="40"
                class="white--text text-uppercase"
                >{{ move.move.name[0] + move.move.name[1] }}</v-avatar
              >
            </v-list-item-avatar>
            <v-icon right dark>mdi-cloud-upload</v-icon>
            <v-list-item-content class="pa-0">
              <v-list-item-title>{{ move.move.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-data-table
            :headers="[
              { text: 'Lvl_Learned_at', value: 'level_learned_at' },
              { text: 'Version', value: 'version_group.name' },
              { text: 'Method', value: 'move_learn_method.name' },
            ]"
            :items="move.version_group_details"
            class="elevation-1"
            :sort-by="['Method', 'Lvl_Learned_at']"
            :sort-desc="[true, true]"
            multi-sort
          ></v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>



<script>
export default {
  data() {
    return {
      colors: [
        "yellow darken-1",
        "red accent-4",
        "yellow darken-2",
        "grey lighten-1",
      ],
    };
  },
  props: ["moves"],
  methods: {
    getRandomIndex(length) {
      return Math.floor(Math.random() * length);
    },
    getColorMet() {
      return this.colors[this.getRandomIndex(this.colors.length)];
    },
  },
};
</script>