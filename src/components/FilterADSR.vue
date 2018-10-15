<template> 
  <div>
    <h2> Filter Envelope </h2>
    <div class=ADSR>
      <div>
        <h4> Attack </h4>
        Amount     
        <Slider v-on:slider-updated="sendValueToEngine" category="freq" id="filterAtk"></Slider>
        Time    
        <Slider v-on:slider-updated="sendValueToEngine" category="time" id="filterAtk"></Slider>
      </div>
      <div>
        <h4> Decay </h4>
        Amount 
        <Slider v-on:slider-updated="sendValueToEngine" category="freq" id="filterDec"></Slider>
        Time   
        <Slider v-on:slider-updated="sendValueToEngine" category="time" id="filterDec"></Slider>
      </div>
      <div>
        <h4> Sustain </h4>
        Amount   
        <Slider v-on:slider-updated="sendValueToEngine" category="freq" id="filterSus"></Slider>
        Time 
        <Slider v-on:slider-updated="sendValueToEngine" category="time" id="filterSus"></Slider>
      </div>
      <div>
        <h4> Release </h4>
        Amount 
        <Slider v-on:slider-updated="sendValueToEngine" category="freq" id="filterRel"></Slider>
        Time 
        <Slider v-on:slider-updated="sendValueToEngine" category="time" id="filterRel"></Slider>
      </div>
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
      this.$store.commit("updateFreqADSR", sliderData);
    }
  }
};
</script>

<style scoped>
.ADSR {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
  grid-gap: 10px;
  }
</style>
