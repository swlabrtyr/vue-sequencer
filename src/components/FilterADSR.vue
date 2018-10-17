<template> 
  <div>
    <h2> Filter Envelope </h2>
    <div class=ADSR>
      <div>
        <h4> Attack </h4>
        Amount     
        <Slider :initVal="5000" :minimum="0.001" :maximum="12000" :increment="1.0" id="filterAtk" v-on:slider-updated="updateFreqAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="filterAtk" v-on:slider-updated="updateFreqTime"></Slider>
      </div>
      <div>
        <h4> Decay </h4>
        Amount     
        <Slider :initVal="1000" :minimum="0.001" :maximum="12000" :increment="1.0" id="filterDec" v-on:slider-updated="updateFreqAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="filterDec" v-on:slider-updated="updateFreqTime"></Slider>
      </div>
      <div>
        <h4> Sustain </h4>
        Amount     
        <Slider :initVal="500" :minimum="0.001" :maximum="12000" :increment="1.0" id="filterSus" v-on:slider-updated="updateFreqAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="filterSus" v-on:slider-updated="updateFreqTime"></Slider>
      </div>
      <div>
        <h4> Release </h4>
        Amount     
        <Slider :initVal="100" :minimum="0.001" :maximum="12000" :increment="1.0" id="filterRel" v-on:slider-updated="updateFreqAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="filteRel" v-on:slider-updated="updateFreqTime"></Slider>
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
  
  methods: {
    updateFreqAmnt: function(sliderData) {
      this.$store.commit("setFreqToVal", sliderData);
    },
    updateFreqTime: function(sliderData) {
      this.$store.commit("setFreqAtTime", sliderData)
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
