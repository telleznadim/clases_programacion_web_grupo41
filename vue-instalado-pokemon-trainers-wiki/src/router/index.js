import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import PokemonsList from "../views/PokemonsList/PokemonsList.vue";
import Detail from "../views/Detail/Detail.vue";
import Trainers from "../views/Trainers/Trainers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemons-list",
    name: "PokemonsList",
    component: PokemonsList,
  },
  {
    path: "/trainers",
    name: "Trainers",
    component: Trainers,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
