<template>
  <div>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <div class="ma-1 font-weight-medium" v-bind="attrs" v-on="on">
          <v-icon large>mdi-weight-kilogram </v-icon>
          <span class="ml-2">{{ weight }}</span>
        </div>
      </template>
      <span>Weight</span>
    </v-tooltip>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <div class="ma-1 font-weight-medium" v-bind="attrs" v-on="on">
          <v-icon large>mdi-human-male-height-variant </v-icon>
          <span class="ml-2">{{ height }}</span>
        </div>
      </template>
      <span>Height</span>
    </v-tooltip>

    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <div class="ma-1 font-weight-medium" v-bind="attrs" v-on="on">
          <v-icon large>mdi-lock-clock </v-icon
          ><span class="ml-2">{{ base_experience }}</span>
        </div>
      </template>
      <span>Base Exp</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: ["weight", "height", "base_experience"],
};
</script>