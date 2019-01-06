const mutations = {
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
  setWaveform(state, waveforms) {
    console.log(state.waveforms);
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
    return state.delayTime = data.val;
  },
  setDelayAmp(state, data) {
    return state.delayAmp = data.val;
  },
  setDelayFB(state, data) {
    return state.delayFB = data.val;
  },
  setPitch(state, noteData) {
    state.notes.map(note => {
      if (note.id === noteData.id) {
        return (note.pitch = noteData.pitch);
      } else {
        console.log("no notes scheduled");
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
    } else return console.error("no data from: ", id);
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
    } return console.error("no data from: ", id);
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
    } else return console.error("no data from: ", id);
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
    } else return console.error("no data from: ", id);
  }
};

