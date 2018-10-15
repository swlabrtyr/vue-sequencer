import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// need to refactor, break state up into smaller chunks
// put mutations/getters into separate files

// initialize note data
function createNotes() {
  let notes = [];
  for (let i = 0; i < 32; ++i) {
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
  // Application data
  state: {
    currentNote: 0,
    sequencing: false,
    bpm: 120,
    globalGainValue: 0,
    noteGainValue: 0,
    notes,
    waveforms: {
      osc1: "square",
      osc2: "square",
      osc3: "square"
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
    delayFB: 0.0,
    reverbAmnt: 0.0
  },

  mutations: {
    start(state) {
      state.sequencing = true;
    },
    stop(state) {
      state.sequencing = false;
    },
    setTempo(state, bpm) {
      if (isNaN(bpm)) bpm = 1;
      state.bpm = bpm;
    },
    schedule() { },
    updateGlobalGain() { },
    updateNoteGain() { },
    setWaveform(state, waveforms) {
      console.log(state.waveforms);
      state.waveforms = waveforms;
    },
    armNote(state, noteData) {
      state.notes.map(function (note) {
        if (note.id === noteData.id) {
          return (note.isArmed = !note.isArmed);
        }
      });
    },
    updateDelay(state, sliderData) {
      console.log("delay data: ", sliderData);
      if (sliderData.type === "time") {
        state.delayTime = sliderData.val;
      } else state.delayFB = sliderData.val;
    },
    setPitch(state, noteData) {
      state.notes.map(note => {
        if (note.id === noteData.id) {
          return (note.pitch = noteData.pitch);
        }
      });
    },
    filterCutoff() { },
    updateAmpADSR(state, sliderData) {
      updateSlider(state, sliderData);
    },
    updateFreqADSR(state, sliderData) {
      updateSlider(state, sliderData);
    }
  },

  getters: {
    getTempo: state => {
      return state.bpm;
    },
    getNotesArray: state => {
      return state.notes;
    }
  }
});

function updateSlider(state, sliderData) { // should be broken up into smaller functions ??
  let type = sliderData.type;
  let id = sliderData.id;

  if (type === "amnt" || type === "freq") {
    if (id === "ampAtk") {
      return (state.adsr.amp.attack.amnt = sliderData.val);
    } else if (id === "ampDec") {
      return (state.adsr.amp.decay.amnt = sliderData.val);
    } else if (id === "ampSus") {
      return (state.adsr.amp.sustain.amnt = sliderData.val);
    } else if (id === "ampRel") {
      return (state.adsr.amp.release.time = sliderData.val);
    }
    if (id === "filterAtk") {
      return (state.adsr.freq.attack.amnt = sliderData.val);
    } else if (id === "filterDec") {
      return (state.adsr.freq.decay.amnt = sliderData.val);
    } else if (id === "filterSus") {
      return (state.adsr.freq.sustain.time = sliderData.val);
    } else if (id === "filterRel") {
      return (state.adsr.freq.release.time = sliderData.val);
    }
  } else if (type === "time") {
    if (id === "ampAtk") {
      return (state.adsr.amp.attack.time = sliderData.val);
    } else if (id === "ampDec") {
      return (state.adsr.amp.decay.time = sliderData.val);
    } else if (id === "ampSus") {
      return (state.adsr.amp.sustain.time = sliderData.val);
    } else if (id === "ampRel") {
      return (state.adsr.amp.release.time = sliderData.val);
    }
    if (id === "filterAtk") {
      return (state.adsr.freq.attack.time = sliderData.val);
    } else if (id === "filterDec") {
      return (state.adsr.freq.decay.time = sliderData.val);
    } else if (id === "filterSus") {
      return (state.adsr.freq.sustain.time = sliderData.val);
    } else if (id === "filterRel") {
      return (state.adsr.freq.release.time = sliderData.val);
    }
  }
  console.log(state.adsr);
}
