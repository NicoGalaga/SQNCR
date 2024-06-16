<template>
  <div class="playpause-container">
    <div class="circle">
      <button class="button-play" @click="togglePlay" :style="{ boxShadow: playButtonBoxShadow }">▶</button>
    </div>
    <div class="circle">
      <button class="button-pause" @click="togglePause" :style="{ boxShadow: pauseButtonBoxShadow }">❚❚</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayPauseButton',
  data() {
    return {
      playButtonBoxShadow: '3px 3px 3px rgba(0, 0, 0, 0.5), inset 0 0 50px rgba(0, 0, 0, 0.8)',
      pauseButtonBoxShadow: '3px 3px 3px rgba(0, 0, 0, 0.5), inset 0 0 50px rgba(0, 0, 0, 0.8)',
    };
  },
  props: {
    isPlaying: Boolean
  },
  watch: {
    isPlaying(newValue) {
      if (newValue) {
        // Update styles when playing
        this.playButtonBoxShadow = '0 0 15px #ff0000, inset 0 0 50px black';
        this.pauseButtonBoxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5), inset 0 0 50px black';
      } else {
        // Update styles when paused
        this.playButtonBoxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5), inset 0 0 50px black';
        this.pauseButtonBoxShadow = '0 0 15px #ff0000, inset 0 0 50px black';
      }
    }
  },
  methods: {
    togglePlay() {
      if (!this.isPlaying) {
        this.$emit('startSeq');
        // console.log('startSeq');
      }
    },
    togglePause() {
      if (this.isPlaying) {
        this.$emit('pauseSeq');
        // console.log('pauseSeq');
      }
    }
  }
}
</script>

<style>
.playpause-container {
  position: relative;
  top: 70%;
  left: 10%;
  width: 25%;
  height: 15%;
}

.circle {
  position: relative;
  display: inline-block;
  width: 50%;
  height: 200%;
}

.button-play,
.button-pause {
  width: 75%;
  height: 75%;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  color: antiquewhite;
}


.button-play:active,
.button-pause:active {
  box-shadow: 0 0 10px, inset 0 0 50px #d21f1b;
}
</style>
