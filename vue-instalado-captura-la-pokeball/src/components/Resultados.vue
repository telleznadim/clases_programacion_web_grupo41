<template>
  <div>
    <p>Atrapaste una {{ pokeball }} tu puntaje es {{ puntaje }} ms</p>
  </div>
</template>


<script>
export default {
  mounted() {
    switch (this.bloqueSeleccionado) {
      case "bloque1":
        this.pokeball = "Pokeball";
        break;
      case "bloque2":
        this.pokeball = "Greatball";
        break;
      case "bloque3":
        this.pokeball = "Ultraball";
        break;
      case "bloque4":
        this.pokeball = "Masterball";
        break;
    }
  },

  data() {
    return {
      pokeball: null,
    };
  },
  props: ["puntaje", "bloqueSeleccionado"],
  methods: {},
};
</script>

<style>
p {
  font-size: 1.2em;
  color: #af0f57;
  font-weight: bold;
}
</style>