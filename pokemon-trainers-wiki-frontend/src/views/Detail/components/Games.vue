<template>
  <div>
    <h2 class="text-h5 ma-1 pa-1 font-weight-medium">Games</h2>

    <v-row>
      <v-col
        v-for="game in games"
        :key="game.version.name"
        class="d-flex child-flex"
        cols="4"
      >
        <v-hover v-slot="{ hover }">
          <v-img
            :src="getCover(game.version.name)"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <v-overlay :absolute="absolute" :value="hover">
              <span class="title">ID: </span>
              <span class="title">{{ game.game_index }}</span>
            </v-overlay>
          </v-img>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      absolute: true,
      overlay: false,
    };
  },
  props: ["games"],
  methods: {
    getCover(game_name) {
      switch (game_name) {
        case "red":
          return "https://www.pokemondungeon.com/images/Games/Gameboxes/GB_Pokemon_Red.jpg";
        case "blue":
          return "https://i.pinimg.com/originals/23/4a/ab/234aabd910e7c3a52735fc6c6acc5e90.jpg";
        case "yellow":
          return "https://upload.wikimedia.org/wikipedia/en/4/4a/Pokemon_Yellow.png";
        case "gold":
          return "https://www.pokemondungeon.com/images/Games/Gameboxes/GBC_Pokemon_Gold.jpg";
        case "silver":
          return "https://www.pokemondungeon.com/images/Games/Gameboxes/GBC_Pokemon_Silver.jpg";
        case "crystal":
          return "https://www.pokemondungeon.com/images/Games/Gameboxes/GBC_Pokemon_Crystal.jpg";
        case "ruby":
          return "https://1.bp.blogspot.com/-JmSvyN20Lc4/Xdfve0E2b5I/AAAAAAAAQA0/YmHsfV-QacURLa0RseuOD3VeHyGkjd4ZACLcBGAsYHQ/s1600/Pok%25C3%25A9mon%2BBlue%2BROM%2BGBC-captura-1.png";
        case "sapphire":
          return "https://m.media-amazon.com/images/I/61RDD36KWPL.jpg";
        case "emerald":
          return "https://1.bp.blogspot.com/-loCn3--Jkc4/XatXJAPdyWI/AAAAAAAAAaU/OEkbuRCW7Fs_D1uqi8WNKGGLvA_LYgB5QCLcBGAsYHQ/s1600/pokemon-esmeralda.jpg";
        case "firered":
          return "https://m.media-amazon.com/images/I/61XjZ8DvaFL._SX466_.jpg";
        case "leafgreen":
          return "https://m.media-amazon.com/images/I/61MV7BBP1EL.jpg";
        case "diamond":
          return "https://images.nintendolife.com/games/ds/pokemon_diamond_and_pearl/cover_large.jpg";
        case "pearl":
          return "https://i.pinimg.com/originals/c5/de/a3/c5dea36f19ec4f5ab6721b92c9a5f37b.jpg";
        case "platinum":
          return "https://upload.wikimedia.org/wikipedia/en/c/ca/Pokemon_Platinum.png";
        case "heartgold":
          return "https://art.gametdb.com/ds/coverM/US/IPKE.jpg";
        case "soulsilver":
          return "https://m.media-amazon.com/images/I/61DWFV3-CoL._AC_SY1000_.jpg";
        case "black":
          return "https://m.media-amazon.com/images/I/51IjaK7+g7L.jpg";
        case "white":
          return "https://m.media-amazon.com/images/I/51I1tS+6vnL.jpg";
        case "black-2":
          return "https://m.media-amazon.com/images/I/81r7F73-nQL._SL1500_.jpg";
        case "white-2":
          return "https://cdn11.bigcommerce.com/s-ymgqt/products/31437/images/22791/Pokemon_White_Version_2__88159.1623696501.500.750.png?c=2";
      }
    },
  },
};
</script>