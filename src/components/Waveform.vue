<template>
<div>
 <h2>Waveform</h2>
  <div class="waveforms" id="osc">
    <select id="1" v-model="waveforms.osc1" @change="oscSelect">
      <option value="sine">Sine</option>
      <option value="sawtooth">Sawtooth</option>
      <option value="square">Square</option>
      <option value="triangle">Triangle</option>
    </select>
  </div>
  <div class="osc" id="osc2">
    <select id="2" v-model="waveforms.osc2" @change="oscSelect">
      <option value="sine">Sine</option>
      <option value="sawtooth">Sawtooth</option>
      <option value="square">Square</option>
      <option value="triangle">Triangle</option>
    </select>
  </div>
  <div class="osc" id="osc3">
    <select id="3" v-model="waveforms.osc3" @change="oscSelect">
      <option value="sine">Sine</option>
      <option value="sawtooth">Sawtooth</option>
      <option value="square">Square</option>
      <option value="triangle">Triangle</option>
    </select>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      waveforms: {
        osc1: "sawtooth",
        osc2: "square",
        osc3: "triangle"
      }
    };
  },

  methods: {
    oscSelect() {
      this.$store.commit("setWaveform", this.waveforms);
    }
  }
};
</script>

<style scoped>
/* .waveforms {
  
} */
</style>
