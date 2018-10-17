<template>
  <div id="app">
    <div class="transport">
    </div>
    <div class="sequencer">
      <Trigger v-for="note in notes" :note="note" :key="note.id"/> 
    </div>
      <Transport/>
      <Tempo/>
      <Waveform/>
    <div class="adsr">
      <div>
        <FilterADSR/>
      </div>
      <div>
        <AmpADSR/>
      </div>
    </div>
    <div class="fx">
      <div>
        <Delay/>
      </div>
    </div>
  </div>  
</template>

<script>
import Transport from "./components/Transport.vue";
import Tempo from "./components/Tempo.vue";
import Trigger from "./components/Trigger.vue";
import Slider from "./components/Slider.vue";
import AmpADSR from "./components/AmpADSR.vue";
import FilterADSR from "./components/FilterADSR.vue";
import Waveform from "./components/Waveform.vue";
import Delay from "./components/Delay.vue";

export default {
  name: "App",

  components: {
    Transport,
    Tempo,
    Trigger,
    Slider,
    AmpADSR,
    FilterADSR,
    Waveform,
    Delay
  },

  data: function() {
    return {
      notes: this.$store.state.notes
    };
  },

  methods: {
    // getNotesArray() {
    //   return store.getters.getNotesArray;
    // }
  }
};
</script>

<style>
#app {
  display: grid;
  grid-template-columns: 150px, 100px, auto, 100px;
  grid-template-rows: 100px, 200px, 500px;
  grid-gap: 10px;
}
.sequencer {
  display: grid;
  grid-template-columns: repeat(11, 100px) auto;
  grid-template-rows: 100px 100px 100px auto;
  grid-gap: 10px;
}
.adsr {
  display: grid;
  grid-template-rows: 300px 300px;
  grid-gap: 10px;
}
</style>



