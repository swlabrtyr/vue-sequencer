<template>
<div>
  <div>
    Time
    <Slider :initVal="0.5"
            :minimum="0.001"
            :maximum="2.0"
            :increment="0.01"
            id="delayTime"
            v-on:slider-updated="updateDelayTime"></Slider>
  </div>
  <div>
    FB
    <Slider
      :initVal="0.5"
      :minimum="0.001"
      :maximum="0.8"
      :increment="0.01"
      id="delayFB"
      v-on:slider-updated="updateDelayFB"></Slider>
  </div>
<div>
    Amp
    <Slider
      :initVal="0.5"
      :minimum="0.001"
      :maximum="0.9"
      :increment="0.01"
      id="delayAmp"
      v-on:slider-updated="updateDelayAmp"></Slider>
  </div>
</div>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  components: {
    Slider
  },
  
  methods: {
    updateDelayTime: function(sliderData) {
      this.$store.commit("setDelayTime", sliderData);
    },
    updateDelayAmp: function(sliderData) {
      this.$store.commit("setDelayAmp", sliderData);
    },
    updateDelayFB: function(sliderData) {
      this.$store.commit("setDelayFB", sliderData);
    }
  }
};
</script>

<style>
</style>
