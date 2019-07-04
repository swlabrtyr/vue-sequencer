<template>
<div class="playpause">
    <button id="start" @click=play()> start </button>
    <button id="stop" @click=stop()>stop</button>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    play() {
      this.$store.commit("start"); 
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
    height: 50px;
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
