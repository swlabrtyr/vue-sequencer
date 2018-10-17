<template>
  <div class="slider">
    <input value="this.val"
           type="range"
           :min="minimum"
           :max="maximum"
           :step="increment"
           :value="initVal"
           :id="id"
           @change="emitValue"/> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: "",
      type: this.id
    };
  },
  
   props: {
     id: String,
     initVal: Number,
     minimum: Number,
     maximum: Number,
     increment: Number
   },
  
  methods: {
    emitValue(e) {
      let vm = this;
      vm.val = parseFloat(e.target.value); // update val in this vue instance to show it in the UI ie -> {{}}
                  
      let sliderData = {
        val: vm.val, // ADSR val, sent to ADSR then to engine (amnt/time);
        id: vm.type, // id prop, sent to ADSR then to engine to identify which ADSR val to update
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
