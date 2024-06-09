<template>
  <q-card class="my-card">
    <div class="title-container">
      <label>{{ sectionLabel }}</label>
    </div>

    <div>
<!--      <ResetEffectButton @click="resetAll"/>-->
<!--      <simple-button @click="resetAll"/>-->
      <button class="simple-button" @click="resetAll"/>
      <div class="rst">RST</div>
    </div>

    <q-card-section class="knob-container">
      <div>
        <q-card-section horizontal>
          <label class="labels-left">PITCH</label>
          <label class="labels-right">PHASER</label>
        </q-card-section>

        <q-card-section horizontal>

          <!-- Pitch knob -->
          <Knob
            id="pitch"
            size="300%"
            show-value
            font-size="30%"
            :position="pitchValue"
            :thickness="0.22"
            :min="0"
            :max="10"
            :step="1"
            color="transparent"
            track-color="grey-3"
            class="knob-pitch"
            @updateValue="updateValue"
            @dblclick="updateValue(0,'pitch')"
          />


          <q-separator vertical/>

          <!-- Phaser knob -->
          <Knob
              id="phaser"
              size="300%"
              show-value
              font-size="30%"
              :position="phaserValue"
              :thickness="0.22"
              :min="0"
              :max="1"
              :step="0.01"
              color="transparent"
              track-color="grey-3"
              class="knob-phaser"
              @updateValue="updateValue"
              @dblclick="updateValue(0,'phaser')"
          />


        </q-card-section>

        <q-card-section horizontal>
          <label class="labels-left">DELAY</label>
          <label class="labels-right">REVERB</label>
        </q-card-section>

        <q-card-section horizontal>

          <!-- Delay knob -->
          <Knob
            id="delay"
            size="300%"
            show-value
            font-size="30%"
            :position="delayValue"
            :thickness="0.22"
            :min="0"
            :max="1"
            :step="0.01"
            color="transparent"
            track-color="grey-3"
            class="knob-delay"
            @updateValue="updateValue"
            @dblclick="updateValue(0,'delay')"
          />

          <q-separator vertical/>

          <!-- Reverb knob -->
          <Knob
            id="reverb"
            size="300%"
            show-value
            font-size="30%"
            :position="reverbValue"
            :thickness="0.22"
            :min="0"
            :max="1"
            :step="0.01"
            color="transparent"
            track-color="grey-3"
            class="knob-reverb"
            @updateValue="updateValue"
            @dblclick="updateValue(0,'reverb')"
          />

        </q-card-section>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {ref} from "vue";
import Knob from "components/Knob.vue";
import * as Tone from "tone";
import Sequencer from "components/Sequencer";
import SimpleButton from "components/SimpleButton.vue";

export default {
  name: 'KnobSection',
  components: {SimpleButton, Knob},
  props:{
    row: Number,
    sectionLabel: String, // instrument which section is linked to
    pitchWet: {
      type: Number,
    },
    phaserWet: {
      type: Number
    },
    delayWet: {
      type: Number
    },
    reverbWet: {
      type: Number
    },
    update : {
      type : Function,
      required : true
    }
  },
  setup(){
    const pitchValue = ref(0);
    const phaserValue = ref(0);
    const delayValue = ref(0);
    const reverbValue = ref(0);

    return {
      pitchValue,
      phaserValue,
      delayValue,
      reverbValue
    }
  },
  methods : {
    updateValue(newValue, effectName){
      switch (effectName) {
        case 'pitch':
          this.pitchValue = newValue;
          break;
        case 'phaser':
          this.phaserValue = newValue;
          break;
        case 'delay':
          this.delayValue = newValue;
          break;
        case 'reverb':
          this.reverbValue = newValue;
          break;
      }
      this.update(this.row, this.pitchValue, this.phaserValue, this.reverbValue, this.delayValue);
    },
    resetAll(){
      this.pitchValue = 0;
      this.phaserValue = 0;
      this.delayValue = 0;
      this.reverbValue = 0;
      this.update(this.row, this.pitchValue, this.phaserValue, this.reverbValue, this.delayValue);
    }
  }
}


</script>

<style>

@import url('https://fonts.cdnfonts.com/css/stella-nova');

.my-card {
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
}

.knob-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.labels-left {
  font-size: 50%;
  color: black;
  margin-left: 11%;
  font-weight: bold;
}

.labels-right {
  font-size: 50%;
  color: black;
  margin-left: 45%;
  font-weight: bold;
}

.title-container {
  font-family: 'Stella Nova', sans-serif;
  font-size: 80%;
  width: 20%;
  display: flex;
  position: relative;
  writing-mode: vertical-lr;
  text-orientation: upright;
  align-items: center;
  justify-content: center;
}

.knob-phaser, .knob-reverb {
  margin-left: 10%;
}

.knob-pitch, .knob-delay {
  margin-right: 10%;
}

.simple-button {
  position: relative;
  height: 15%;
  border-radius: 8px;
  border: 2px solid #090909;
  background-image: linear-gradient(145deg, #171717, #6d6b6e);
  box-shadow: inset 1px 1px 0 #7d7c7e, inset -1px -1px 0 #1c1c1c;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  top: 77%;
}

.simple-button:active {
  box-shadow: inset 3px 3px 5px #7d7c7e, inset -3px -3px 5px #1c1c1c;
}

.rst {
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 0.6em;
  font-weight: bold;
  top: 75%;
}
</style>
