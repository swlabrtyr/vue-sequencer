import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import engine from "./engine/engine.js"

Vue.config.productionTip = false;

new Vue({
  store,
  engine,
  render: h => h(App)
}).$mount("#app");


