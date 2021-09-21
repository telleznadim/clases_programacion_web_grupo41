console.log("hello vue");

const app = Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    capturaEvento(e, data) {
      console.log(e);
      //   console.log(e.type);
      if (data) {
        console.log(data);
      }
    },
    capturarMovimiento(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      // offsetX: 33
      // offsetY: 8
      //   console.log(e.offsetX, e.offsetY);
      //   console.log(e.offsetY);
    },
  },
});

app.mount("#app");
