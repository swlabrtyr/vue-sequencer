<template> 
  <div>
    <h2> Amplitude Envelope </h2>
  <div class=ADSR>
    <div>
  <h4> Attack </h4>
    Amount     
    <Slider v-on:slider-updated="sendValueToEngine" category="amnt" id="ampAtk"></Slider>
    Time    
    <Slider v-on:slider-updated="sendValueToEngine" category="time" id="ampAtk"></Slider>
  </div>
  <div>
  <h4> Decay </h4>
    Amount 
    <Slider v-on:slider-updated="sendValueToEngine" category="amnt" id="ampDec"></Slider>
    Time   
    <Slider v-on:slider-updated="sendValueToEngine" category="time" id="ampDec"></Slider>
  </div>
  <div>
  <h4> Sustain </h4>
    Amount   
    <Slider v-on:slider-updated="sendValueToEngine" category="amnt" id="ampSus"></Slider>
    Time 
    <Slider v-on:slider-updated="sendValueToEngine" category="time" id="ampSus"></Slider>
  </div>
  <div>
  <h4> Release </h4>
    Amount 
    <Slider v-on:slider-updated="sendValueToEngine" category="amnt" id="ampRel"></Slider>
    Time 
    <Slider v-on:slider-updated="sendValueToEngine" category="time" id="ampRel"></Slider>
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
      this.$store.commit("updateAmpADSR", sliderData);
    }
  }
};
</script>

<style scoped>
.ADSR {
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-gap: 10px;
}
</style>
