import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const totalNotes = 60;

// initialize note data
function createNotes() {
  let notes = [];
  for (let i = 0; i < totalNotes; ++i) {
    notes.push({
      id: i,
      pitch: 57,
      isArmed: false,
      scheduled: false
    });
  }
  return notes;
}

let notes = createNotes();

export const store = new Vuex.Store({
  state: {
    currentNote: 0,
    isPlaying: false,
    bpm: 120,
    globalGainValue: 0,
    noteGainValue: 0,
    notes,
    waveforms: {
      osc1: "triangle",
      osc2: "square",
      osc3: "square",
      osc4: "sawtooth"
    },
    adsr: {
      amp: {
        attack: {
          time: 0.5,
          amnt: 0.8
        },
        decay: {
          time: 0.5,
          amnt: 0.5
        },
        sustain: {
          time: 0.5,
          amnt: 0.5
        },
        release: {
          time: 0.5,
          amnt: 0.01
        }
      },
      freq: {
        attack: {
          time: 0.5,
          amnt: 700
        },
        decay: {
          time: 0.5,
          amnt: 600
        },
        sustain: {
          time: 0.5,
          amnt: 500
        },
        release: {
          time: 0.5,
          amnt: 200
        }
      }
    },
    filterType: "lowpass",
    filterQ: 0,
    delayTime: 0.0,
    delayAmp: 0.5,
    delayFB: 0.0,
    reverbAmnt: 0.0
  },

  mutations: {
    start(state) {
      state.isPlaying = true;
    },
    stop(state) {
      state.isPlaying = false;
    },
    setTempo(state, bpm) {
      if (isNaN(bpm)) bpm = 1;
      state.bpm = bpm;
    },
    setWaveform(state, waveforms) {
      state.waveforms = waveforms;
    },
    armNote(state, noteData) {
      state.notes.map(function (note) {
        if (note.id === noteData.id) {
          console.log("note armed! ", note.id);
          return (note.isArmed = !note.isArmed);
        } else {
          return null;
        }
      });
    },
    setDelayTime(state, data) {
      return (state.delayTime = data.val);
    },
    setDelayAmp(state, data) {
      return (state.delayAmp = data.val);
    },
    setDelayFB(state, data) {
      return (state.delayFB = data.val);
    },
    setPitch(state, noteData) {
      state.notes.map(note => {
        if (note.id === noteData.id) {
          return (note.pitch = noteData.pitch);
        } else {
          return null;
        }
      });
    },
    setFreqToVal(state, data) {
      let id = data.id;
      let amnt = data.val;

      this.id = id;
      this.amnt = amnt;

      if (id === "filterAtk") {
        return (state.adsr.freq.attack.amnt = amnt);
      } else if (id === "filterDec") {
        return (state.adsr.freq.decay.amnt = amnt);
      } else if (id === "filterSus") {
        return (state.adsr.freq.sustain.time = amnt);
      } else if (id === "filterRel") {
        return (state.adsr.freq.release.time = amnt);
      } else return null;
    },
    setFreqAtTime(state, data) {
      let id = data.id;
      let time = data.val;

      this.id = id;
      this.time = time;

      if (id === "filterAtk") {
        return (state.adsr.freq.attack.time = time);
      } else if (id === "filterDec") {
        return (state.adsr.freq.decay.time = time);
      } else if (id === "filterSus") {
        return (state.adsr.freq.sustain.time = time);
      } else if (id === "filterRel") {
        return (state.adsr.freq.release.time = time);
      } return null;
    },
    setAmpToVal(state, data) {
      let id = data.id;
      let amnt = data.val;

      this.id = id;
      this.amnt = amnt;

      if (id === "ampAtk") {
        return (state.adsr.amp.attack.amnt = amnt);
      } else if (id === "ampDec") {
        return (state.adsr.amp.decay.amnt = amnt);
      } else if (id === "ampSus") {
        return (state.adsr.amp.sustain.amnt = amnt);
      } else if (id === "ampRel") {
        return (state.adsr.amp.release.time = amnt);
      } else return null;
    },
    setAmpAtTime(state, data) {
      let id = data.id;
      let time = data.val;

      this.id = id;
      this.time = time;

      if (id === "ampAtk") {
        return (state.adsr.amp.attack.time = time);
      } else if (id === "ampDec") {
        return (state.adsr.amp.decay.time = time);
      } else if (id === "ampSus") {
        return (state.adsr.amp.sustain.time = time);
      } else if (id === "ampRel") {
        return (state.adsr.amp.release.time = time);
      } else return null;
    }
  },

  getters: {
    getTempo: state => {
      return state.bpm;
    },
    getNotesArray: state => {
      return state.notes;
    },
    getAmpADSR: state => {
      return state.adsr.amp;
    },
    getFreqADSR: state => {
      return state.adsr.freq;
    }
  }
});

