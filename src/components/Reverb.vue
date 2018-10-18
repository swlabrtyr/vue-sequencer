<template>
<div>
  <div id="Verb">
    Amnt
     <Slider :initVal="0.5" :minimum="0.001" :maximum="0.8" :increment="0.01" id="delayFB" v-on:slider-updated="updateVerb"></Slider>
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
      this.$store.commit("setVerbAmnt", sliderData);
    },
  }
};
</script>

<style>
</style>
