<template>
  <div class="sub-container">
    <div class="green-screen">
      {{`Kit: ${currentKit}`}}
    </div>
    <div class="selector-container">
      <div class="selector-up" @click="cycleForward"></div>
      <div class="selector-down" @click="cycleBackward"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectKit',
  data() {
    return {
      currentKitIndex: 0,
    }
  },
  props: {
    isPlaying: {
      type: Boolean
    },
    kits: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentKit(){
      return this.kits[this.currentKitIndex]
    }
  },
  methods: {
    cycleForward() {
      this.currentKitIndex = (this.currentKitIndex + 1) % this.kits.length
      this.$emit('kitChange', this.kits[this.currentKitIndex])
    },
    cycleBackward() {
      this.currentKitIndex = (this.currentKitIndex - 1 + this.kits.length) % this.kits.length
      this.$emit('kitChange', this.kits[this.currentKitIndex])
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: DS-Digital;
  src: url('../assets/fonts/ds_digital/DS-DIGIB.TTF') format('truetype')
}

.sub-container {
  top: 20%;
  width: 40%;
  height: 55%;
  right: 5%;
  position: relative;
  background-color: black;
  border-radius: 8px;
  box-shadow: 4px 4px 4px #666;
}


.green-screen {
  font-family: 'DS-Digital', sans-serif;
  font-size: 125%;
  color: black;
  text-align: left;
  position: relative;
  top: 7%;
  left: 7%;
  width: 75%;
  height: 85%;
  background-color: #008800;
  border-radius: 8px;
}

.selector-container {
  position: relative;
  bottom: 70%;
  left: 85%;
  width: 10%;
  height: 90%;
  flex-direction: column;
}

.selector-up, .selector-down {
  width: 1%;
  background-color: black;
  border-style: solid;
  cursor: pointer;
  border-radius: 5px;
  border-color: transparent transparent darkgray transparent;

}

.selector-up {
  border-width: 0 7px 14px 7px;
  margin-bottom: 10%;
}

.selector-down {
  border-width: 14px 7px 0 7px;
  top: 55%;
  left: 1%;
  border-color: darkgray transparent transparent transparent;
}
</style>


