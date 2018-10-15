<template>
<div class="transport">
  <div>
    <button id="start" @click=play()> start </button>
  </div>
  <div>
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
.transport {
  width: 100px;
  height: 50px;
}
</style>
