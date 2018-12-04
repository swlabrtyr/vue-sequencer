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
input[type="range"] {
-webkit-appearance: none; 
background: transparent; 
width: 240px;
}

input[type="range"]:focus {
  outline: black; 
}

input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    width: 400px;
    height: 5px;
    outline: none;
    background-color: lightgray;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: lavender;
    margin-top: -2px;
    border-radius: 3px;
    width: 10px;
    height: 7px;
    outline: none;
    background-color: lightgray;
    cursor: pointer;
    box-shadow: 1px 1px 0px #000000, 0px 2px 2px #0d0d0d; /* Add cool effects to your sliders! */
}
input[type="range"]:focus::-webkit-slider-runnable-track {
    background: gray;
    
}
input[type="range"]:focus::-webkit-slider-thumb {
    background: slategray

}
</style>
