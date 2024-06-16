<template>
  <div class="display-container">
    <div class="display-content">
      <label>{{displayText}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Displays-1',
  props: {
    displayText: String
  }
};
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/stella-nova');

.display-container {
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 110%;
  background: linear-gradient(to bottom right, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%), rgb(236, 233, 233);
  box-shadow: 4px 4px 4px #666;
}

.display-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Stella Nova', sans-serif;
  font-size: 85%;
  font-weight: 400;
  position: relative;
}

.display-content label{

  color: #dcdcdc;

}
</style>




