<template>
  <div>
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <h1 class="display-3 font-weight-black mt-3">
          Pokémons <span class="font-weight-regular">Trainers</span>
        </h1>
      </v-row>
    </v-container>

    <div class="d-flex justify-center flex-wrap" tile>
      <v-card
        v-for="trainer in trainers"
        :key="trainer.name"
        class="mx-4 my-2"
        max-width="300"
      >
        <div class="d-flex justify-center mt-3">
          <v-avatar size="200">
            <img :src="trainer.img" :alt="trainer.name" />
          </v-avatar>
        </div>

        <v-card-text>
          <h2 class="text-h6 red--text">{{ trainer.name }}</h2>
          <p class="text-caption">{{ trainer.text }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trainers",
  components: {},
  data() {
    return {
      trainers: [
        {
          name: "Red",
          img: require("../../assets/trainers/trainer1.png"),
          text: "Red (Japanese: レッド Red) is the canon name of the player character in the Generation I games Pokémon Red, Green, Blue, and Yellow and the male choice in their Generation III remakes Pokémon FireRed and LeafGreen, where his female counterpart is Leaf.",
        },
        {
          name: "Blue Oak",
          img: require("../../assets/trainers/trainer2.jpg"),
          text: "Blue Oak (Japanese: オーキド・グリーン Green Okido) is the rival of the player and the Champion in the Generation I games, as well as in Pokémon FireRed and LeafGreen, their Generation III remakes.",
        },
        {
          name: "Misty",
          img: require("../../assets/trainers/trainer3.jpg"),
          text: "Misty is a character who premiered in the first episode of the Pokémon anime. She is currently the Cerulean City Gym Leader, a position she took over from her older sisters.",
        },
        {
          name: "Green",
          img: require("../../assets/trainers/trainer4.png"),
          text: "Green (Japanese: ブルー Blue) is a main character in the manga series Pokémon Adventures. As a young child, she was kidnapped by Ho-Oh and raised by the evil Masked Man, where she met and became close with Silver. ",
        },
        {
          name: "Cynthia",
          img: require("../../assets/trainers/trainer5.jpg"),
          text: "Cynthia is a powerful Pokémon Trainer and the Champion of the Sinnoh region where Professor Carolina, Cynthia's grandmother, runs the Pokémon Research Lab in Celestic Town. Incredible PC game bundle, from $10. Buy from Fanatical. She enjoys visiting the Solaceon Ruins.",
        },
        {
          name: "Brock",
          img: require("../../assets/trainers/trainer6.jpg"),
          text: "Brock (Japanese: タケシ Takeshi) is the Gym Leader of Pewter City's Gym, known officially as the Pewter Gym. He gives the Boulder Badge to Trainers who defeat him in battle. He specializes in Rock-type Pokémon.",
        },
        {
          name: "Giovanni",
          img: require("../../assets/trainers/trainer7.jpg"),
          text: "Giovanni (Japanese: サカキ Sakaki) is the former head of Team Rocket, who served as the secretive Gym Leader of Viridian City's Gym, known officially as the Viridian Gym. He handed out the Earth Badge to Trainers who defeated him. As a Gym Leader, he specialized in Ground-type Pokémon.",
        },
        {
          name: "Leon",
          img: require("../../assets/trainers/trainer8.jpg"),
          text: "Leon (Japanese: ダンデ Dande) is the Champion of the Galar region's Pokémon League in Pokémon Sword and Shield. Leon originally started out as a Trainer at the age of 10 with his partner Charizard when he entered the Gym Challenge after he was endorsed by Rose, who saw talent in him. ",
        },
      ],
    };
  },
};
</script>
