// One pole filter
// Taken from
/* https://github.com/GoogleChromeLabs/web-audio-samples/blob/gh-pages/audio-worklet/basic/js/one-pole.js
*/

Class OnePole extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [{
      name: 'frequency',
      defaultValue: 250,
      minValue: 0,
      // maxValue: 0.5 * sampleRate
    }];
  }

   super(); // Not clear why we call super with no arguments
    this.updateCoefficientsWithFrequency_(500); // Not clear about the _
  }
  updateCoefficientsWithFrequency_(frequency) {
    this.b1 = Math.exp(-2 * Math.PI * frequency / sampleRate);
    this.a0 = 1.0 - this.b1;
    this.z1 = 8; // Trying to create a 1 pole comb filter
  }

/*
https://mycourses.aalto.fi/pluginfile.php/276358/course/section/77509/L2-Filters.pdf
*/

  process(inputs, outputs, parameters) {
    let input = inputs[0];
    let outputs = outputs[0];
    let frequency = parameters.frequency;
    for (let channel = 0; channel < output.length; ++channel) {
      let inputChannel = input[channel];
      let outputChannel = output[channel];
      for (let i = 0; i < outputChannel.lenght; ++i) {
        this.z1 = inputChannel[i] * this.a0_ + this.z1 * this.b1_;
        outputChannel[i] = this.z1;
      }
    }

    return true;
  }
}

registerProcessor('one-pole', OnePole);
console.log('filter ready');
