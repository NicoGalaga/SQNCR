<template>
  <div class="sub-container">
    <div class="green-screen">
      {{`Subdivision: 1/${currentSubdivision}`}}
    </div>
    <div class="selector-container">
      <div class="selector-up" @click="cycleForward"></div>
      <div class="selector-down" @click="cycleBackward"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubdivisionSelection',
  data() {
    return {
      currentSubIndex: 0
    }
  },
  props: {
    subdivisions: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentSubdivision(){
      return this.subdivisions[this.currentSubIndex]
    }
  },
  methods: {
    cycleForward() {
      this.currentSubIndex = (this.currentSubIndex + 1) % this.subdivisions.length
      this.$emit('subdivisionChange', this.subdivisions[this.currentSubIndex])
    },
    cycleBackward() {
      this.currentSubIndex = (this.currentSubIndex - 1 + this.subdivisions.length) % this.subdivisions.length
      this.$emit('subdivisionChange', this.subdivisions[this.currentSubIndex])
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: DS-Digital;
  src: url('/fonts/ds_digital/DS-DIGIB.TTF') format('truetype')
}

.sub-container {
  top: 20%;
  width: 40%;
  height: 55%;
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
  width: 80%;
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
  margin-bottom: 1%;

}
.selector-down {
  border-width: 14px 7px 0 7px;
  top: 55%;
  left: 1%;
  border-color: darkgray transparent transparent transparent;
}
</style>


