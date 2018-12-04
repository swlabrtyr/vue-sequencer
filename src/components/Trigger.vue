<template>
<div class="note">
  <div class="unArmed" @click=armNote() :class="{armed: note.isArmed, scheduled: note.scheduled}"> 
  </div>
  <select id="pitch" v-model="note.pitch" @change="setPitch()">
    <option value=40>E</option>
    <option value=41>F</option>
    <option value=42>Gb</option>
    <option value=43>G</option>
    <option value=44>Ab</option>
    <option value=45>A</option>
    <option value=46>Bb</option>
    <option value=47>B</option>
    <option value=48>C</option>
    <option value=49>Db</option>
    <option value=50>D</option>
    <option value=51>Eb</option>
    
    <option value=52>E</option>
    <option value=53>F</option>
    <option value=54>Gb</option>
    <option value=55>G</option>
    <option value=56>Ab</option>
    <option selected value=57>A</option>
    <option value=58>Bb</option>
    <option value=59>B</option>
    <option value=60>C</option>
    <option value=61>Db</option>
    <option value=62>D</option>
    <option value=63>Eb</option>
  </select>
</div>
</template>

<script>
export default {
  props: { note: Object },
  
  methods: {
    armNote() {
      let vm = this;
      this.$store.commit("armNote", vm.note);
    },
    setPitch() {
      let vm = this;
      this.$store.commit("setPitch", vm.note); // css green color #a9ed89
    }
  },
  computed: {}
};
</script>

<style scoped>
.note {
    display: grid;
    height: 70px;
    width: 70px;
    justify-self: start;
    grid-gap: 8px;
}
select {
    border: none;
    position: relative;
    justify-self: start;
    width: 65px;
    height: 20px;
    border-radius: 15px;
    font-size: 12px;
    text-align: center;
    background-color: WhiteSmoke;
}
.unArmed {
    border-radius: 10px;
    width: 65px;
    height: 65px;
    background-color: #a9c9d1;
}
.armed {
    border-radius: 20px;
    width: 65px;
    height: 65px;
    background-color: #9ef7f7;
}
.scheduled {
    width: 65px;
    height: 65px;
    border-radius: 100px;
    background-color: white;
    justify-self: start;
}
</style>
