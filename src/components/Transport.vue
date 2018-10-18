<template>
<div class="playpause">
  <div class="btn">
    <button id="start" @click=play()> start </button>
  </div>
  <div class="btn">
    <button id="stop" @click=stop()>stop</button>
  </div>
</div>
</template>

<script>
// import { scheduler } from "../engine/engine";
export default {
  data() {
    return {};
  },
  methods: {
    play() {
      this.$store.commit("start"); // this needs to perform two actions
      // 1. update the state 2. ??? tell the state to update the engine
    },
    stop() {
      this.$store.commit("stop");
    }
  }
};
</script>

<style scoped>
.playpause {
    display:grid;
    grid-template-columns: 1fr 1fr;
  width: 200px;
  height: 100px;
}
.button {
    /* justify-self: start; */
}
</style>
