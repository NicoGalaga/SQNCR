<template>
  <q-page>
    <div class="q-pa-md">
      <div v-if="!started">
        <div class="center-container">
          <a href="#">
            <div class="fourth-button" @click="start">
              <p>
                Start
              </p>
            </div>
          </a>
        </div>
      </div>
      <div v-else>
        <sequencer-comp></sequencer-comp>
      </div>
    </div>

  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'
import SequencerComp from "components/Sequencer.vue";
import * as Tone from "tone";
export default defineComponent({
  name: 'IndexPage',
  components: {
    SequencerComp
  },
  setup() {
    const started = ref(false)

    const start = () =>{
      Tone.start().then(() => {
        started.value = true
        // console.log('started')
      })
    }
    return {
      started,
      start
    }
  }
})
</script>

<style scoped>

@import url('https://fonts.cdnfonts.com/css/stella-nova');

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure the container takes the full height of the viewport */
}

body {
  background-color: #17181C;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  width: 220px;
  height: 50px;
  display: inline-block;
  text-decoration: none;
}

p {
  text-align: center;
  line-height: 200%;
  font-family: 'Stella Nova', sans-serif;
  font-weight: 600;
  font-size: 150%;
}


@media (max-width: 1000px) {

  .center-container {
    margin-top:60px;
    transform: translateX(15px);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    width: 70%;
    height: 700px;
  }
}

.fourth-button {
  width: 200px;
  height: 50px;
  border: 3px rgba(255, 0, 0, 0.487) solid;
  position: relative;
  color: rgba(255, 0, 0, 0.487);
}

.fourth-button:before {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -10px;
  left: -10px;
  border-left: 3px rgba(255, 0, 0, 0.487) solid;
  border-top: 3px rgba(255, 0, 0, 0.487) solid;
  transition: all 0.3s ease-in;
}

.fourth-button:after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  position: absolute;
  bottom: -10px;
  right: -10px;
  border-right: 3px rgba(255, 0, 0, 0.487) solid;
  border-bottom: 3px rgba(255, 0, 0, 0.487) solid;
  transition: all 0.2s ease-in;
}

.fourth-button:hover::before {
  width: 50px;
  height: 50px;
  border-left: 3px rgb(255, 0, 0) solid;
  border-top: 3px rgb(255, 0, 0) solid;
}

.fourth-button:hover::after {
  width: 50px;
  height: 50px;
  border-right: 3px rgb(255, 0, 0) solid;
  border-bottom: 3px rgb(255, 0, 0) solid;
}

.fourth-button:hover {
  color: rgb(255, 0, 0);
  box-shadow: 0px 5px 25px 1px rgb(255, 0, 0);
  border-color: rgb(255, 0, 0);
}
</style>



