<template>
  <button class="simple-button" @click="changeState">
    <div class="simple-led" :class="{ 'simple-led-on': isOn}"></div>
  </button>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'SimpleButton',
  data() {
    return {
      isOn: ref(true),
    };
  },
  props: {
    rowIndex: {
      type: Number
    }
  },
  methods: {
    changeState() {
      this.isOn = !this.isOn;
      if(this.isOn) {
        this.$emit('turnOn', this.rowIndex);
      }else{
        this.$emit('turnOff', this.rowIndex);
      }
      console.log("Toggled row", this.rowIndex);
    }
  }
}
</script>

<style scoped>
.simple-button {
  display: flex;
  position: relative;
  justify-content: center;
  height: 55%;
  width: 30%;
  border-radius: 8px;
  border: 2px solid #090909;
  background-image: linear-gradient(145deg, #171717, #6d6b6e);
  box-shadow: inset 1px 1px 0 #7d7c7e, inset -1px -1px 0 #1c1c1c;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  top: 10%;
}

.simple-button:active {
  box-shadow: inset 3px 3px 5px #7d7c7e, inset -3px -3px 5px #1c1c1c;
}

.simple-led {
  position: absolute;
  display: flex;
  left: 140%;
  top: 30%;
  width: 35%;
  height: 40%;
  border-radius: 50%;
  background-color: darkred;

}

.simple-led-on {
  background-color: red;
  box-shadow: 0 0 5px 2px red;

}

</style>
