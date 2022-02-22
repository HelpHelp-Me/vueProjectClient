<template>
 <div class="audio-wrapper" @click="audioPlay">
   <!-- <audio ref="audio" controls autoplay src="/src/assets/mp3/WeBelieve.mp3">
   </audio> -->
  <audio autoplay controls class="audio">
    <source src="../assets/mp3/TownOfWindmill.mp3" type="audio/mpeg" />
  </audio>
   
 </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted } from 'vue';
export default defineComponent({
 setup() {
   onMounted(() => {
     
   })
   function audioPlay() {
    //  console.log('player------');
    // let { ctx,proxy } = getCurrentInstance();
    // ctx.$refs.audio.play()
   }
   return {audioPlay}
 },
});

</script>

<style scoped lang="scss">
.audio-wrapper {
  height: 60px;
  width: 200px;
  position: fixed;
  top: 20vh;
  left: 100px;
  border: 1px solid #000;
  padding: 50px;
}
</style>
