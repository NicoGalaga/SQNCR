<template>
  <!-- Impostazione flavio -->
  <div class="page-container">

    <div class="left">
      <div class="topleft-container">
        <Visualizer :main-volume="mainVolume" :color="color"/>
        <div class="line-horiz"></div>
        <BPMSwing :bpm-value="bpm" :swing-value="swingValue" :main-volume="mainVolume" :color="color"/>
      </div>

      <div class="bottomleft-container">
        <div class="Selectors"> <!-- messo il div al posto della q-card per grafica -->
          <!-- Kit selection -->
          <selectKit :is-playing="playing" @stopLoop="stop" :kits="kits" @kitChange="changeKit"/>

          <!-- Subdivision selection -->
          <SubdivisionSelection @subdivisionChange="changeSubdivision" :subdivisions="subdivisions"/>
          <q-icon size="lg" class="logo">
            <img src="~assets/images/sqncr_logo.png"  alt="" style="width: 200px; height: 200px;"/>
          </q-icon>
        </div>

        <div class="Controls">
            <!-- BPM slider -->
          <div class="control-container">
            <q-slider class="BPMSlider" vertical v-model="bpm" :min="30" :max="240" :reverse="true" color="black"/>
            <div class="label">BPM</div>
          </div>

            <!-- Swing slider -->
          <div class="control-container">
            <q-slider class="SwingSlider" vertical v-model="swingValue" :min="0" :max="1" :step="0.05" :reverse="true" color="black"/>
            <div class="label">SWING</div>
          </div>

          <!-- Play/pause buttons -->
          <PlayPauseButton @startSeq = "play" @pauseSeq = "stop" :is-playing="playing"/>
        </div>

      </div>
    </div>

    <div class="right">
      <div class="topright-container">
          <div class="row q-justify-between" v-for="(row,rowIndex) in rows" :key="row.id">

            <!-- Row labels -->
            <div class="buttonRow">
              <div class="col flex justify-center">
                <Displays1 :displayText="row.instrument"/>
              </div>

              <!-- Sequencer buttons -->
              <div class="col flex justify-center" v-for="(button,colIndex) in row.buttons" :key="button.id" >
                <div>
                  <Buttons1 class="q-ma-md" @click="toggleButton(rowIndex,colIndex)" :isPlaying="playing && colIndex === beat"/>
                </div>
              </div>
              <div class="col flex justify-center">
                <!-- ON/OFF buttons -->
                <simple-button :row-index="rowIndex" class="q-ma-sm" @turnOn="turnOn" @turnOff="turnOff"/>
              </div>
            </div>
          </div>
        <p class="line"/>
      </div>
      <div class="bottomright-container">
        <!-- Effects section -->
        <div class="Effects" v-for="(row, sectionIndex) in rows">
          <KnobSection :row="sectionIndex" :section-label="row.instrument" :update="updateEffects"/>
        </div>
      </div>
    </div>
  </div>

  <!-- Impostazione nico -->
<!--  <div>
    <q-card class="card">
      <q-card-section>
        <div class="row q-justify-between" v-for="(row,rowIndex) in rows" :key="row.id">
          <q-card-section horizontal>
            &lt;!&ndash; Row labels &ndash;&gt;
            <div class="col flex justify-center">
              <Displays1 :displayText="row.instrument"/>
            </div>

            &lt;!&ndash; Sequencer buttons &ndash;&gt;
            <div class="col flex justify-center" v-for="(button,colIndex) in row.buttons" :key="button.id" >
              <div>
                <Buttons1 class="q-ma-md" @click="toggleButton(rowIndex,colIndex)" :isPlaying="playing && colIndex === beat"></Buttons1>
              </div>
            </div>

            &lt;!&ndash; ON/OFF buttons &ndash;&gt;
            <q-card-section>
              <simple-button :row-index="rowIndex" class="q-ma-sm" @turnOn="turnOn" @turnOff="turnOff"></simple-button>
            </q-card-section>
          </q-card-section>
        </div>
      </q-card-section>
      &lt;!&ndash; Waveform &ndash;&gt;
      <div class="visualizerContainer">
        <Visualizer :main-volume="mainVolume" :color="color"/>
      </div>
      &lt;!&ndash; Play and pause buttons &ndash;&gt;
      <q-card-section>
        <PlayPauseButton @startSeq = "play" @pauseSeq = "stop" :is-playing="playing"/>
      </q-card-section>


      &lt;!&ndash; Sliders &ndash;&gt;
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>

          &lt;!&ndash; BPM slider &ndash;&gt;
          <q-card-section>
            <q-badge>BPM</q-badge>
            <q-slider v-model="bpm" :min="30" :max="300" style="width: 250px"/>
          </q-card-section>

          <q-separator vertical />

          &lt;!&ndash; Swing slider &ndash;&gt;
          <q-card-section>
            <q-badge>Swing</q-badge>
            <q-slider v-model="swingValue" :min="0" :max="1" :step="0.05" style="width: 250px"/>
          </q-card-section>

          <q-separator vertical />

          &lt;!&ndash; Volume slider &ndash;&gt;
&lt;!&ndash;          <q-card-section>&ndash;&gt;
&lt;!&ndash;            <q-badge>Volume</q-badge>&ndash;&gt;
&lt;!&ndash;            <q-slider v-model="mainVolume.volume.value" :min="-40" :max="0" :step="4" style="width: 250px"/>&ndash;&gt;
&lt;!&ndash;          </q-card-section>&ndash;&gt;

        </q-card-section>
      </q-card>

      &lt;!&ndash; Effects section &ndash;&gt;
      <q-card-section horizontal>
        <div v-for="(row, sectionIndex) in rows">
          <KnobSection :row="sectionIndex" :section-label="row.instrument" :update="updateEffects"/>
        </div>
      </q-card-section>


      <q-card-section horizontal>
        &lt;!&ndash; Kit selection &ndash;&gt;
        <q-card-section>
          <selectKit :is-playing="playing" @stopLoop="stop" :kits="kits" @kitChange="changeKit" @pauseSeq = "stop"/>
        </q-card-section>

        &lt;!&ndash; Subdivision selection &ndash;&gt;
        <q-card-section>
          <SubdivisionSelection @subdivisionChange="changeSubdivision" :subdivisions="subdivisions"/>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>-->
</template>

<script>
import * as Tone from "tone";
import Sequencer from "components/Sequencer";
import {defineComponent, onMounted, reactive, ref, toRaw, watch, watchEffect} from "vue";
import Buttons1 from "components/Buttons.vue";
import PlayPauseButton from "components/PlayPauseButton.vue";
import Displays1 from "components/Displays.vue";
import Displays from "components/Displays.vue";
import SimpleButton from "components/SimpleButton.vue";
import BPMSwing from "components/BPMSwing.vue";
import selectKit from "components/KitSelection.vue";
import Subdivision from "components/KitSelection.vue";
import SubdivisionSelection from "components/SubdivisionSelection.vue";
import Knob from "components/Knob.vue";
import KnobSection from "components/KnobsFX.vue";
import Visualizer from "components/Visualizer.vue";


export default defineComponent({
  name : 'SequencerComp',

  components: {

    Visualizer,
    Displays,
    Subdivision,
    KnobSection,
    SubdivisionSelection,
    selectKit, BPMSwing, SimpleButton, Displays1, PlayPauseButton, Buttons1, Knob
  },

  setup(){
    const beat = ref(-1)
    const rows = reactive([]);
    const cols = ref(8)

    const playing = ref(false);

    const bpm = ref(120);
    const swingValue = ref(0);
    const mainVolume = new Tone.Volume(0);
    const sequencer = new Map();
    let currentPlayers;
    let color = 'red';


    // const kits = ['808', 'hiphop', '8bit'];
    const kits = ['bob', 'hophip', 'byte', 't3kno', 'akustik'];

    // const instruments = ['kick','hihat','snare', 'openhat', 'perc'];
    const instruments = ['kick','hihat','snare', 'openhat'];
    const subdivisions = ['4', '8', '16'];

    const selectedNoteLength = ref(subdivisions[0]);
    const selectedKit = ref(kits[0]);
    const [pitchShifts, delays, reverbs, phasers, gains] = Sequencer.configFX(instruments.length);


    // Creates set of players containing sounds for each kit
    kits.forEach((kit) =>{
      const players = new Tone.Players();
      instruments.forEach((instr, index) => {
        players.add(instr, "src/assets/samples/" + kit + "/" + instr + ".wav")
        players.player(instr).chain(pitchShifts[index], phasers[index], delays[index], reverbs[index], gains[index], mainVolume, Tone.Destination)
      })
      sequencer.set(kit, players); // maps kit to set of Tone.Player
    });

    // Loops through selected buttons;
    const loop = new Tone.Loop((time) =>{
      currentPlayers = sequencer.get(selectedKit.value);
      // currentPlayers = players associated to selected kit
      beat.value = (beat.value + 1) % 8;
      toRaw(rows).forEach((row) => {
        const instrument = currentPlayers.player(toRaw(row).instrument)
        const active = toRaw(row).buttons[beat.value].isActive
        if(active){
          instrument.start(time);
        }
      })
    },selectedNoteLength.value+'n');

    // Initializes sequencer
    onMounted(()=>{
      Sequencer.initSequencer()
      Sequencer.getRows().forEach((row)=>{
        rows.push(row);
      })
    });

    // Updates BPM value if changed
    watch(bpm, (newBpm) => {
      // console.log('BPM changed to', newBpm);
      Tone.Transport.bpm.value = newBpm;
    });

    // Updates swing value if changed
    watch(swingValue, (newSwing) => {
      // Tone.Transport.swing = newSwing;
      Tone.Transport.set({ swing: newSwing });
      console.log('Swing changed to', Tone.Transport.swing);
    });

    // Updates volume value if changed --> NOT WORKING
    // watch(mainVolume, (newMainVolume) => {
    //   newMainVolume.volume.value = newMainVolume.value;
    // });

    // Updates loop interval in real-time
    watchEffect(() => {
      loop.interval = selectedNoteLength.value + 'n';
      console.log("Loop selectedNoteLength", selectedNoteLength.value);
    });

    // Toggles sequencer button in position (row, col)
    const toggleButton = (row,col) =>{
      rows[row].buttons[col].isActive = !rows[row].buttons[col].isActive;
    }

    // Plays pattern by calling loop function
    const play = () => {
      playing.value = true;
      Tone.Transport.start()
      loop.start("8n") // delayed by 8n to avoid time misalignment
    }

    // Stops loop
    const stop = () => {
      loop.stop();
      Tone.Transport.stop();
      Tone.Transport.cancel();
      playing.value = false;
      beat.value = -1;
    }

    return{
      beat,
      rows,
      cols,
      bpm,
      play,
      stop,
      playing,
      toggleButton,
      selectedNoteLength,
      swingValue,
      mainVolume,
      pitchShifts,
      delays,
      reverbs,
      phasers,
      gains,
      kits,
      subdivisions,
      selectedKit,
      currentPlayers,
      color,
      instruments,
      // myPlayers
    }
  },
  methods: {
    changeSubdivision(newSubdivision){
      this.selectedNoteLength = newSubdivision;
    },

    changeKit(newKit) {
      console.log("selectedKit", this.selectedKit);
      // Sequencer.configPlayers(this.myPlayers, this.instruments, this.selectedKit, newKit, this.pitchShifts, this.phasers, this.delays, this.reverbs, this.gains, this.mainVolume, 0);
      this.selectedKit = newKit;
    },

    updateEffects(index, pitchValue, phaserValue, reverbValue, delayValue){
      this.pitchShifts[index].pitch = pitchValue;
      this.delays[index].wet.value = delayValue;
      this.phasers[index].wet.value = phaserValue;
      this.reverbs[index].wet.value = reverbValue;
      console.log("Changed row", index);
      console.log("Changed pitch to", pitchValue);
      console.log("Changed delay to", delayValue);
      console.log("Changed phaser to", phaserValue);
      console.log("Changed reverb to", reverbValue);
    },
    turnOn(row){
      console.log("Turn on row", row)
      this.gains[row].gain.value = 1;
    },
    turnOff(row){
      console.log("Turn off row", row)
      this.gains[row].gain.value = 0;
    },
  }
})

</script>

<style>

@import url('https://fonts.cdnfonts.com/css/stella-nova');

body {
  background-color: #17181C;
}

.page-container {
  width: 98%;
  background: #fdeedf;
  border-radius: 50px;
  padding: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8), inset 0 0 50px rgba(80, 80, 80, 50);
  height: 92vh;
}

.left {
  height: 100%;
  width: 35%;
  float: left;
  flex-direction: column;
}
.topleft-container {
  height: 45%;
  width: 100%;
  border-radius: 30px 30px 30px 30px;
  background-color: #000000;
  overflow: hidden;
  box-shadow: 4px 4px 4px #666;
  //background-image: linear-gradient(to top left, rgba(255, 255, 255, 0.2), rgb(5, 5, 5));
  background-image:
    radial-gradient(50% 5% at 50% 1%, rgba(255, 255, 255, 0.29) 0.5%,#fff0),
    radial-gradient(110% 65% at 60% 150%, rgba(255, 255, 255, 0.85) 1%,#fff0),
    radial-gradient(100% 100% at 50% 50%,#0000 25%,#000 50%),
    radial-gradient(100% 100% at 50% 50%,#0000 20%,#000 80%);
}

.bottomleft-container {
  height: 55%;
  width: 100%;
  flex-direction: row;
}

.right {
  height: 100%;
  width: 65%;
  float: right;
  flex-direction: column;
}
.topright-container {
  height: 70%;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  margin-left: 1%;
}
.bottomright-container {
  height: 30%;
  width: 100%;
  flex-direction: row;
  display: flex;
  overflow: hidden;
}

.Controls {
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.control-container {
  text-align: center;
  flex-direction: column;
  height: 100%;
  width: 17%;
}

.BPMSlider, .SwingSlider {
  height: 85%;
  top: 5%;
  left: 5%;
  position: relative;
}

.Selectors {
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.Effects {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
}

.buttonRow {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.line {
  position: relative;
  display: flex;
  width: 80%;
  height: 2px;
  background: radial-gradient(circle at center left, rgba(200, 200, 200, 0.56), rgba(100, 100, 100, 0.55), rgba(200, 200, 200, 0.53));
  margin-top: 3%;
  left: 10%;
  border-radius: 1px;
}

.label {
  font-family: 'Stella Nova', sans-serif;
  position: relative;
  font-size: 0.7em;
  font-weight: bold;
  color: #000000;
  left: 3%;
  top: 8%;
}

.line-horiz {
  position: relative;
  display: flex;
  width: 70%;
  height: 1px;
  margin-top: 3%;
  left: 15%;
  background: radial-gradient(circle at center left, rgba(255, 255, 255, 0.8), rgba(197, 196, 196, 0.72), rgba(255, 255, 255, 0.8));
  border-radius: 1px;
}

.logo{
  position: relative;
  top: 150%;
  right: 25%;
}
</style>
