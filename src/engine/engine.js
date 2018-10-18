import { store } from "../store/store";

const audioContext = new AudioContext();
const output = audioContext.destination;
const state = store.state;
const notes = state.notes;
const scheduleAheadTime = 0.1;

let futureTickTime = audioContext.currentTime;
let current16thNote = 1;
let timerID, secondsPerBeat;
let stopTime = 0.0;

function ADSR(param, adsr, initVal) {
  let time = audioContext.currentTime;
  param.setValueAtTime(initVal, time);

  let atk = adsr.attack.time;
  let atkTime = time + atk;

  param.exponentialRampToValueAtTime(adsr.attack.amnt, atkTime);

  let dec = adsr.decay.time;
  let decTime = time + atk + dec;

  param.exponentialRampToValueAtTime(adsr.decay.amnt, decTime);

  let sus = adsr.sustain.time;
  let susTime = time + atk + dec + sus;

  param.exponentialRampToValueAtTime(adsr.sustain.amnt, susTime);

  let rel = adsr.release.time;
  let relTime = time + atk + dec + sus + rel;

  param.exponentialRampToValueAtTime(adsr.release.amnt, relTime);

  stopTime = atk + dec + sus + rel + 0.01;
}

function createGain(adsrVals, initVal, callback) {
  let gain = audioContext.createGain();
  if (!arguments) return gain;
  callback && callback(gain.gain, adsrVals, initVal);
  return gain;
}

function createFilter(type, adsrVals, initVal, callback) {
  let filter = audioContext.createBiquadFilter();
  filter.type = type;
  if (!arguments) return filter;
  callback && callback(filter.frequency, adsrVals, initVal);
  return filter;
}

function createOsc(type) {
  let osc = audioContext.createOscillator();
  osc.type = type;

  return osc;
}

function delayFX(delayAmount, fbAmount) {
  let delay = audioContext.createDelay();
  let gain = audioContext.createGain();
  gain.gain.value = 0.8;
  delay.delayTime.value = delayAmount;

  let feedback = audioContext.createGain();
  feedback.gain.value = fbAmount;

  // Add Lowpass Filter
  let filter = audioContext.createBiquadFilter();
  filter.frequency.value = 1000;
  filter.Q.value = 0.5;

  filter.connect(delay);
  delay.connect(feedback);
  feedback.connect(gain);
  gain.connect(filter);

  return delay;
}

function verbFX(amp, amnt) {
  let reverb = audioContext.createConvolver();
}

function note2freq(note) {
  return Math.pow(2, (note - 69) / 12) * 440;
}

function scheduleNote(beatDivisionNumber, start, stop) {
  for (let i = 0; i < notes.length; i++) {
    beatDivisionNumber === notes[i].id
      ? (notes[i].scheduled = true)
      : (notes[i].scheduled = false);

    if (notes[i].isArmed === true && notes[i].scheduled === true) {
      let pitch = note2freq(notes[i].pitch);
      processAudioGraph(pitch, start, stop);
    }
  }
}

function futureTick() {
  let tempo = getTempo();
  secondsPerBeat = 60.0 / tempo;
  futureTickTime += 0.25 * secondsPerBeat; // future note
}

function scheduler() {
  // sequencer loop
  while (futureTickTime < audioContext.currentTime + scheduleAheadTime) {
    current16thNote++;
    if (current16thNote === 48) {
      current16thNote = 0;
    }
    scheduleNote(current16thNote, futureTickTime, futureTickTime + stopTime);
    futureTick();
  }
  timerID = window.setTimeout(scheduler, 25.0);
}

function playBack() {
  futureTickTime = audioContext.currentTime;
  scheduler();
}

store.subscribe(mutation => {
  if (mutation.type === "start") playBack();
  if (mutation.type === "stop") clearTimeout(timerID);
});

function getTempo() {
  return store.getters.getTempo;
}

function processAudioGraph(pitch, start) {
  let oscOne = createOsc(state.waveforms.osc1);
  let oscTwo = createOsc(state.waveforms.osc2);
  let oscThree = createOsc(state.waveforms.osc3); // need to add waveform select!
  let oscOneGain = createGain();
  let oscTwoGain = createGain();
  let oscThreeGain = createGain();
  let delay = delayFX(state.delayTime, state.delayFB);

  oscOneGain.value = 0.3;
  oscTwoGain.value = 0.3;
  oscThreeGain.value = 0.3;

  oscOne.frequency.value = pitch;
  oscTwo.frequency.value = pitch;
  oscThree.frequency.value = pitch;

  oscOne.detune.value = 17;
  oscTwo.detune.value = 9;
  oscThree.detune.value = 5;

  let filterEnv = createFilter("lowpass", state.adsr.freq, 0.001, ADSR); // should use getter
  let ampEnv = createGain(state.adsr.amp, 0.001, ADSR); // should use getter

  // dry channel
  oscOne
    .connect(oscOneGain)
    .connect(ampEnv)
    .connect(filterEnv)
    .connect(output);
  oscTwo
    .connect(oscTwoGain)
    .connect(ampEnv)
    .connect(filterEnv)
    .connect(output);
  oscThree
    .connect(oscThreeGain)
    .connect(ampEnv)
    .connect(filterEnv)
    .connect(output);

  filterEnv.connect(delay).connect(output); // wet channel (delay)

  oscOne.start(start);
  oscTwo.start(start);

  oscOne.stop(start + stopTime);
  oscTwo.stop(start + stopTime);
}
