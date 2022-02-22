<template>
 <div class="container">
   <div class="tag-container">
     <div
      v-for="(item, index) in tagsList"
      :key="index"
      :class="['tag-item', getRandomBg()]"
      @click="tagItemClick(item.tagName)"
    >{{item.tagName}}</div>
   </div>
 </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
 setup() {
   const tagsList = ref()
   axios.get('/api/tags/getAllTags').then(res => {
     tagsList.value = res.data || []
   })
   onMounted(() => {
     console.log('label onMounted----');
   })
    const randomIndexArr = ['1', '2', '3']
    function getRandomBg() {
      return 'random-bg' + randomIndexArr[Math.floor(Math.random()*randomIndexArr.length)];
    }

    function tagItemClick(tagName: String) {
      console.log('tagItemClick-------', tagName);
    }
   return {
     tagsList,
     getRandomBg,
     tagItemClick
   }
 },
});
</script>

<style scoped lang="scss">
.tag-container {
  display: flex;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  // box-shadow: 0 0 3px;
  transition-duration: .5s;
  margin-top: 200px;
  background-color: #EFEEEE;
  .tag-item {
    width: 100px;
    height: 100px;
    font-size: 30px;
    font-weight: bold;
    box-shadow: 18px 18px 30px rgba(0,0,0,0.1), -18px -18px 30px rgba(255,255,255,1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: #efeeee;
    transition: box-shadow .2s ease-out;
    position: relative;
    cursor: pointer;
    margin: 14px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    //禁止选中
    -webkit-touch-callout:none; /*系统默认菜单被禁用*/
    -webkit-user-select:none; /*webkit浏览器*/
    -khtml-user-select:none; /*早期浏览器*/
    -moz-user-select:none;/*火狐*/
    -ms-user-select:none; /*IE10*/
    user-select:none;

    &:hover {
      box-shadow: 0 0 0 rgba(0,0,0,0.1), 0 0 0 rgba(255,255,255,1), inset 18px 18px 30px rgba(0,0,0,0.1), inset -18px -18px 30px rgba(255,255,255,1);
      // transition: box-shadow .2s ease-out;
    }
  }
}

.random-bg1 {
  background: linear-gradient(to right bottom, red, orange, grey, green, grey, orange, red, orange, grey, green, grey, orange, red);
}

.random-bg2 {
  background: linear-gradient(to right bottom, red, orange, grey, green, grey, tomato, blue, tomato, grey, green, grey, orange, red);
}

.random-bg3 {
  color: lightpink;
  background: linear-gradient(to right bottom, red, orange, grey, green, grey, lightpink, green, lightpink, grey, green, grey, orange, red);
}
</style>
