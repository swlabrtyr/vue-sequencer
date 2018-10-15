<template>
    <div class="unArmed" :class="{armed: note.isArmed, scheduled: note.scheduled}"> 
      <button ref=trigger @click=armNote()>{{ note.isArmed ? "Armed" : ""}}</button>
      <div>
        <select id="pitch" v-model="note.pitch" @change="setPitch()">
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
      this.$store.commit("setPitch", vm.note);
    }
  },
  computed: {}
};
</script>

<style scoped>
.unArmed {
  border-radius: 10px 30px 10px 30px;
  display: grid;
  width: 80px;
  height: 80px;
  background-color: gainsboro;
  color: papayawhip;
}
.armed {
  border-radius: 20px 30px 30px 40px;
  display: grid;
  width: 80px;
  height: 80px;
  background-color: royalblue;
  color: powderblue;
}
.scheduled {
  border-radius: 50%;
  display: grid;
  background-color: gray;
  color: grey;
}
button {
  width: 50px;
  height: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 10px;
}
</style>
