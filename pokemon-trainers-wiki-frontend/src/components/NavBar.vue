<template>
  <div>
    <!-- BARRA IZQUIERDA -->
    <v-navigation-drawer
      dark
      v-model="drawer"
      absolute
      temporary
      app
      class="red accent-4"
    >
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="{ name: item.name }"
        >
          <!-- :to="{ name: item.name }" -->
          <!-- :to="{ name: item.route }" -->
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- BARRA SUPÉRIOR -->
    <v-app-bar
      app
      color="red accent-4"
      dark
      prominent
      shrink-on-scroll
      fade-img-on-scroll
      scroll-threshold="300"
      extension-height="100"
      src="../assets/barra_poke2.png"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", name: "Home" },
        {
          title: "Pokemons List",
          icon: "mdi-clipboard-list",
          name: "PokemonsList",
        },
        {
          title: "Trainers",
          icon: "mdi-account-group",
          name: "Trainers",
        },
      ],
    };
  },
};
</script>