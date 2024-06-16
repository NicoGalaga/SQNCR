<template>
  <div class="screens-container">
    <div class="screen-text">BPM: {{ bpmValue }}</div>
    <div class="screen-text">SWING: {{ Math.trunc(swingValue * 100) }}%</div>
  </div>
</template>

<script>
import Visualizer from "../components/Visualizer.vue";
export default {
  name: 'BPMSwing',
  props: {
    bpmValue: {
      type: Number
    },
    swingValue: {
      type: Number
    },
    mainVolume: {
      type: Object,
      required: true
    },
    color: {
      type: String
    }
  },
  components:{
    Visualizer
  }
}
</script>

<style scoped>
@font-face {
  font-family: DS-Digital;
  src: url('/fonts/ds_digital/DS-DIGI.TTF') format('truetype')
}
.screens-container {
  position: relative;
  top: 7%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 23%;
}

.screen-text {
  font-family: 'DS-Digital', sans-serif;
  font-size: 110%;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: white;
  text-align: center;
}

</style>
