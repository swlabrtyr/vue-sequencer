<template>
<div class="playpause">
    <button id="start" @click=play()> start </button>
    <button id="stop" @click=stop()>stop</button>
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
    width: 150px;
    height: 100px;
}
button {
    border: none;
    height: 20px;
    width: 40px;
    border-radius: 12px;
    background-color: LightSlateGrey;
    justify-self: start;
}
</style>
