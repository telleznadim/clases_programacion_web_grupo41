<template>
  <v-carousel
    cycle
    height="auto"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="image in images" :key="image.url" :src="image.url">
      <v-row align="center" justify="center">
        <h1
          class="
            d-inline
            red
            accent-4
            text-h2
            white--text
            rounded-xl
            mt-14
            mb-n12
            px-9
            pt-3
            pb-9
            font-weight-black
          "
        >
          Pokémon
          <span class="font-weight-regular">Trainers</span>
        </h1>
      </v-row>
      <v-row align="center" justify="center">
        <h2
          class="
            textShadow
            white--text
            text-h1
            font-weight-black
            d-inline
            rounded-xl
            px-9
          "
        >
          W i k i
        </h2>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: require("../../../assets/Caro1.jpg") },
        { url: require("../../../assets/Caro2.jpg") },
        { url: require("../../../assets/Caro3.jpg") },
        { url: require("../../../assets/Caro4.jpg") },
        { url: require("../../../assets/Caro5.jpg") },
        { url: require("../../../assets/Caro6.png") },
      ],
    };
  },
};
</script>

<style>
.textShadow {
  text-shadow: 4px 3px rgba(102, 55, 55, 0.5);
}
</style>