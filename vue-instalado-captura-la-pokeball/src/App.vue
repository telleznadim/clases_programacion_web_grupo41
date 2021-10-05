<template>
  <div id="app">
    <h1>Atrapa la Pokeball</h1>
    <button :disabled="jugando" @click="iniciarJuego">Empezar</button>

    <Resultados
      v-if="mostrarResultados"
      :puntaje="puntaje"
      :bloqueSeleccionado="bloqueSeleccionado"
    />
    <div class="bloque-relativo" :class="{ cargando: jugando }">
      <Bloque
        v-if="mostrarBloque"
        @finalizado="juegoFinalizado"
        :bloqueSeleccionado="bloqueSeleccionado"
      />
    </div>
    <Tabla :historico="historico" />
  </div>
</template>

<script>
import Bloque from "./components/Bloque.vue";
import Resultados from "./components/Resultados.vue";
import Tabla from "./components/Tabla.vue";

export default {
  name: "App",
  data() {
    return {
      temporizador: null,
      mostrarBloque: false,
      mostrarResultados: false,
      jugando: false,
      retraso: 0,
      puntaje: 0,
      bloques: ["bloque1", "bloque2", "bloque3", "bloque4"],
      bloqueSeleccionado: null,
      historico: [],
      resultado: null,
      idJuego: 0,
    };
  },
  components: {
    Bloque,
    Resultados,
    Tabla,
  },
  methods: {
    iniciarJuego() {
      this.idJuego++;
      this.jugando = true;
      this.mostrarResultados = false;
      this.retraso = this.aleatorioEntre(2, 5) * 1000;
      this.bloqueSeleccionado =
        this.bloques[this.aleatorioEntre(0, this.bloques.length - 1)];

      // console.log(this.retraso);
      setTimeout(() => (this.mostrarBloque = true), this.retraso);
    },
    aleatorioEntre(min, max) {
      const resultado = Math.floor(Math.random() * (max - min + 1) + min);
      return resultado;
    },
    juegoFinalizado(puntaje) {
      this.puntaje = puntaje;
      // console.log("FINAL FINAL ");
      this.jugando = false;
      this.mostrarResultados = true;
      this.mostrarBloque = false;

      this.resultado = {
        id: this.idJuego,
        pokeball: this.obtenerPokeball(this.bloqueSeleccionado),
        puntaje: puntaje,
      };
      this.historico.push(this.resultado);
      // console.log(this.historico);
    },
    obtenerPokeball(bloqueSeleccionado) {
      switch (bloqueSeleccionado) {
        case "bloque1":
          return "Pokeball";
        case "bloque2":
          return "Greatball";
        case "bloque3":
          return "Ultraball";
        case "bloque4":
          return "Masterball";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: #0f5faf;
}
button {
  background: #0f5faf;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
.bloque-relativo {
  position: relative;
  width: 100%;
  height: 600px;
  border: 3px dashed #000000;
}
.cargando {
  cursor: progress;
}
</style>
