<template>
  <div class="tempo" id="tempo">BPM (40 - 240)
    <input :value="bpm" @input="setTempo" type="text"> {{ bpm }} 
  </div>
</template>

<script>
export default {
  data() {
    return {
      bpm: this.$store.state.bpm
    }
  },
  methods: {
    setTempo(e) {
      let bpm = parseInt(e.target.value);

      // sanitize user input
      if (isNaN(bpm)) bpm = 30; 
      if (bpm < 30) bpm = 30;
      if (bpm > 240) bpm = 240;

      this.$store.commit("setTempo", bpm);
      this.bpm = bpm;           // update bpm to reflect in UI ie -> {{}}
    }
  }
};
</script>

<style scoped>
input {
width: 30px;
text-align: center;
}
</style>
