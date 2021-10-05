<template>
  <div justify="center" align="center">
    <h2 class="text-h5 ma-1 pa-1 font-weight-medium">Abilities</h2>

    <v-list shaped>
      <v-list-item v-for="ability in abilities" :key="ability.ability.name">
        <v-list-item-icon class="ma-3">
          <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            class="text-capitalize"
            v-text="ability.ability.name"
          >
          </v-list-item-title>
        </v-list-item-content>
        <v-icon class="ml-1" x-small right v-if="ability.is_hidden"
          >mdi-star
        </v-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ["abilities"],
};
</script>