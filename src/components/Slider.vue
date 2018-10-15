<template>
  <div class="slider">
    <input value="this.val" 
           type="range" 
           min="0.01" 
           v-bind:max="setCategory" 
           step="0.01" @change="emitValue"/> {{ val }}  <!-- filter step should be in ints -->
  </div>
</template>

<script>
export default {
  props: { properties: Object }, // pass min, val, max, step as props

  data() {
    return {
      val: 0.5,
      max: 1.0
    };
  },

  props: {
    category: String,
    id: String
  },

  computed: {
    setCategory: function() {
      if (this.category === "amnt") return (this.max = 1.0);
      else if (this.category === "time") return (this.max = 3.0);
      else if (this.category === "freq") return (this.max = 12000);
    }
  },

  methods: {
    emitValue(e) {
      let vm = this;
      vm.val = parseFloat(e.target.value); // update val in this vue instance to show it in the UI ie -> {{}}
      if (vm.val === 0.0) vm.val = 0.01;
      let sliderData = {
        val: this.val, // ADSR val, sent to ADSR then to engine (amnt/time);
        id: vm.id, // id prop, sent to ADSR then to engine to identify which ADSR val to update
        type: vm.category
      };
      this.$emit("slider-updated", sliderData);
    }
  }
};
</script>

<style scoped>
input[type="range"]::-webkit-slider-runnable-track {
  width: 95px;
  height: 20px;
  outline: none;
  background-color: lightgray;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: lavender;
  width: 20px;
  height: 20px;
  outline: none;
  background-color: lightgray;
  cursor: pointer;
}
</style>
