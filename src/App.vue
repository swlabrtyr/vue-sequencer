<template>
<div id="app">
  <div class="sequencer">
    <Trigger :class="trigger" v-for="note in notes" :note="note" :key="note.id"/>
  </div>
  <Transport class="transport"/>
  <Tempo class="tempo"/>
  <Waveform class="waveform"/>
  <div class="adsr">
    <AmpADSR/>
    <FilterADSR/>
  </div>
  <div class="fx">
    <Delay/>
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
  computed: {
    notes() {
      return this.$store.getters.getNotesArray;
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans');
body {
    background-color: #323435;
}

#app {
    font-family: 'Work Sans', sans-serif;
    width: 100%;
    background-color: #323435;
    color: white;
    display: grid;
    grid-gap: 1px;
    grid-template-rows: 20px 60px 400px 1fr 20px;
    grid-template-columns: 70px repeat(auto-fill, minmax(250px, 1fr)) 70px;
}

.sequencer {
    display: grid;
    grid-template-columns: repeat(15, 80px);
    grid-template-rows: 100px 100px 100px auto;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    grid-gap: 5px;
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
    justify-self: end;
}

.adsr {
    display: grid;
    grid-template-rows: 150px 150px;
    grid-gap: 1px;
    grid-row: 4 / 5;
    grid-column: 2 / 3;
    justify-self: start;
}

.fx {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-gap: 10px;
    grid-row: 7 / 8;
    grid-column: 2 / 3;
    justify-self: start;
}

</style>



