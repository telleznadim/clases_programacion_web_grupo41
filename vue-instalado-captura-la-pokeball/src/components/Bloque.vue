<template>
  <div class="bloque" :class="bloqueSeleccionado" @click="detenerTimer"></div>
</template>

<script>
export default {
  props: ["bloqueSeleccionado"],
  data() {
    return {
      timer: null,
      tiempoReaccion: 0,
    };
  },
  mounted() {
    this.iniciarTimer();
  },
  methods: {
    detenerTimer() {
      // console.log("DetenerTimer");
      clearInterval(this.timer);
      this.$emit("finalizado", this.tiempoReaccion);
    },
    iniciarTimer() {
      this.timer = setInterval(() => {
        this.tiempoReaccion += 10;
      }, 10);
    },
  },
};
</script>

<style>
.bloque {
  border-radius: 20px;
  color: white;
  text-align: center;
  margin: 10px auto;
  cursor: pointer;
  background-size: 100% 100%;
  width: 300px;
  height: 300px;
}
p {
  margin: auto;
}
.bloque1 {
  position: absolute;
  left: 70%;
  /* background: #af770f; */
  width: 200px;
  height: 200px;
  background-image: url("../assets/Pokeball.png");
}
.bloque2 {
  position: absolute;
  top: 50%;
  top: 50%;
  /* background: #af0f6c; */
  width: 150px;
  height: 150px;
  background-image: url("../assets/Greatball.png");
}
.bloque3 {
  position: absolute;
  top: 30%;
  left: 50%;
  /* background: #0faf42; */
  width: 100px;
  height: 100px;
  background-image: url("../assets/Ultraball.png");
}
.bloque4 {
  position: absolute;
  top: 10%;
  left: 20%;
  /* background: #0f5faf; */
  width: 50px;
  height: 50px;
  background-image: url("../assets/Masterball.png");
}
</style>