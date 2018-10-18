<template>
<div id="app">
  <div class="sequencer">
    <Trigger :class="trigger" v-for="note in notes" :note="note" :key="note.id"/>
  </div>
  <Transport class="transport"/>
  <Tempo class="tempo"/>
  <Waveform class="waveform"/>
  <h4 class="name">SeQNCeR</h4>
  <div class="adsr">
    <AmpADSR/>
    <FilterADSR/>
  </div>
  <div class="fx">
    <Delay/>
    <Reverb/>
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
import Reverb from "./components/Reverb.vue"

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
    Delay,
    Reverb
  },
  
  data: function() {
    return {
      notes
    };
  },
  
  computed: {
    notes() {
      return this.$store.getters.getNotesArray;
    }
  },
};
</script>

<style>
#app {
    display: grid;
    grid-gap: 15px;
    grid-template-rows: 10px 50px 500px 100px 100px 100px;
    grid-template-columns: 50px repeat(5, 250px) 50px;
}
.sequencer {
    display: grid;
    grid-template-columns: repeat(14, 80px);
    grid-template-rows: 100px 100px 100px auto;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    grid-gap: 15px;
}
.trigger {
    justify-self: start;
}
.transport {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: start;
}
.tempo {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    justify-self: start;
}
.waveform {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    justify-self: start;
}
.name {
    grid-column: 5 / 6;
}
.adsr {
    display: grid;
    grid-template-rows: 300px 300px;
    grid-gap: 10px;
    grid-row: 4 / 5;
    grid-column: 2 / 3;
    justify-self: start;
}
.fx {
    display: grid;
    grid-template-column: 300px 300px;
    grid-gap: 10px;
    grid-row: 4 / 5;
    grid-column: 5 / 6;
    justify-self: start;
}

</style>



