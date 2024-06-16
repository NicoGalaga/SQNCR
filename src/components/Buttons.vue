<template>
  <div class="button-container">
    <button @click="toggleLed" :class="{ 'drum_pad': true, 'playing': isPlaying }">
      <div :class="{ 'led-on': led_status, 'led-off': !led_status }"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons-1',
  props: {
    isPlaying: Boolean
  },

  data() {
    return {
      led_status: false
    };
  },
  methods: {
    toggleLed() {
      this.led_status = !this.led_status;
    }
  }
};
</script>

<style>
.button-container {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  bottom: 20%;
  right: 20%;
}

.drum_pad {
  position: relative;
  width: 85%;
  height: 100%;
  bottom: 15%;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: black;
  transition: box-shadow 0.3s ease, background-color 0.3s ease; /* Aggiunto il trasferimento per un effetto più fluido */
  box-shadow: 2px 2px 2px #666;

}

.drum_pad.playing {
  box-shadow: 0 0 10px rgb(255, 0, 128); /* Ombra persistente quando attivo */
}

.drum_pad:active {
  box-shadow: inset 3px 3px 5px #000, inset -3px -3px 5px #737373; /* Cambiato lo stile durante il clic */
}

.led-on, .led-off {
  position: relative;
  top: 10%;
  left: 35%;
  width: 30%;
  height: 20%;
  border-radius: 50%;
}

.led-on {
  background-color: red;
  box-shadow: 0 0 5px 2px red;
}

.led-off {
  background-color: darkred;
}
</style>




