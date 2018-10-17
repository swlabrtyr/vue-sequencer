<template>
  <div class="trigger">
<div class="unArmed" @click=armNote() :class="{armed: note.isArmed, scheduled: note.scheduled}"> 
</div>
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
    border-radius: 20px;
    display: grid;
    width: 70px;
    height: 70px;
    background-color: cornflowerblue;
    color: papayawhip;
}
.armed {
    ®order-radius: 20px;
    display: grid;
    width: 65px;
    height: 65px;
    background-color: lavenderblush;
    color: powderblue;
}
.scheduled {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: grid;
    background-color: skyblue;
    color: grey;
}
select {
    width: 50px;
    height: 20px;
    border-radius: 15px;
    margin-top: 7px;
    text-align: center;
    font-size: 10px;
}
.trigger {
    height: 90px;
    width: 90px;
    align-items: center;
    justify-content: center;
}
</style>
