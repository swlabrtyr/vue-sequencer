<template>
<div>
  <h2>Delay</h2>
  <div id="delayAmnt">
    Time
    <Slider category="time" v-on:slider-updated="sendValueToEngine"></Slider>
  </div>
  <div id="delayFb">
    FB
    <Slider category="amnt" v-on:slider-updated="sendValueToEngine"></Slider>
  </div>
</div>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  components: {
    Slider
  },

  data() {
    return {
      sliderID: "",
      sliderVal: 0.0
    };
  },

  methods: {
    sendValueToEngine: function(sliderData) {
      this.$store.commit("updateDelay", sliderData);
    }
  }
};
</script>

<style>
</style>
