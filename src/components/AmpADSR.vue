<template> 
  <div>
    <h2> Amplitude Envelope </h2>
    <div class=ADSR>
      <div>
        <h4> Attack </h4>
        Amount
        <Slider :initVal="0.5" :minimum="0.001" :maximum="1.0" :increment="0.01" id="ampAtk" v-on:slider-updated="updateAmpAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="ampAtk" v-on:slider-updated="updateAmpTime"></Slider>
      </div>
      <div>
        <h4> Decay </h4>
        Amount
        <Slider :initVal="0.5" :minimum="0.001" :maximum="1.0" :increment="0.01" id="ampDec" v-on:slider-updated="updateAmpAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="ampDec" v-on:slider-updated="updateAmpTime"></Slider>
      </div>
      <div>
        <h4> Sustain </h4>
        Amount
        <Slider :initVal="0.5" :minimum="0.001" :maximum="1.0" :increment="0.01" id="ampSus" v-on:slider-updated="updateAmpAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="ampSus" v-on:slider-updated="updateAmpTime"></Slider>
      </div>
      <div>
        <h4> Release </h4>
        Amount
        <Slider :initVal="0.5" :minimum="0.001" :maximum="1.0" :increment="0.01" id="ampRel" v-on:slider-updated="updateAmpAmnt"></Slider>
        Time    
        <Slider :initVal="0.5" :minimum="0.001" :maximum="3.0" :increment="0.01" id="ampRel" v-on:slider-updated="updateAmpTime"></Slider>
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
    updateAmpAmnt: function(sliderData) {
      this.$store.commit("setAmpToAmnt", sliderData);
    },
    updateAmpTime: function(sliderData) {
      this.$store.commit("setAmpAtTime", sliderData)
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
