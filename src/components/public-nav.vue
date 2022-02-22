<template>
  <div
    ref="header"
    class="public-header z-index-level-1"
    :style="{'background':background}"
  >
    <div class="container display-flex bg-red full-height">
      <div class="logo-wrap flex-center">这里是logologo</div>
        <!-- :class="'flex-center nav-item nav-item-wrap' + item" -->
      <div
        v-for="(item, index) in navBarItems"
        :key="item"
        :class="[{'nav-selected': index == currentIndex}, 'flex-center nav-item nav-item-wrap' + item]"
        @click="onNavBarClick(index)"
      >{{item.title}} -- {{currentIndex}}</div>
      <!-- <router-link v-for="item in 5" :key="item" :class="'flex-center nav-item nav-item-wrap' + item" to="/about">{{item}}</router-link> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, getCurrentInstance, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';

const navBarItems = [
  {icon: '', title: '首页'},
  {icon: '', title: '标签分类'},
  {icon: '', title: 'about'},
  {icon: '', title: '组件'},
  {icon: '', title: '关于'},
]
export default defineComponent({
  props:{
    width: Number,
    background: String,
    logo: String,
  },
  setup() {
    const router = useRouter();
    // let { ctx,proxy } = getCurrentInstance();
    // onMounted(() => {
    //   console.log('public - nav mounted', ctx,proxy)
    //   console.log(ctx.$refs.header);
    //   ctx.$refs.header.style.width = '200px'
    // })
    const currentIndex = ref<Number>(0)

    function onNavBarClick(index: Number, e: Object) {
      if (index == currentIndex.value) {
        return
      }
      console.log('onNavBarClick index ----', index);
      switch (index) {
        case 0:
          router.push('/')
          break;
        case 1:
          router.push('/label')
          break;
        case 2:
          router.push('/about')
          break;
      }
      currentIndex.value = index
    }

    return {onNavBarClick, currentIndex, navBarItems}
  },
});
</script>

<style scoped lang="scss">
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.public-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90px;
  opacity: 0;
  transition-duration: 1s;
}

.nav-item {
  height: 100%;
  width: 100px;
  border: 2px solid yellow;
  transform: translateX(100px);
  transition-duration: 0.55s;
  cursor: pointer;
  &:hover {
    background: greenyellow;
  }
}

.nav-selected {
  border: 2px solid tomato;
}

@for $i from 1 through 6 {
  .nav-item-wrap#{$i} {
    transition-delay: $i * 0.05s;
  }
  // .nav-item:nth-child(#{$i}) {
  //   transition-delay: $i * 0.05s;
  // }
}

.public-header:hover {
  opacity: 1;
  .nav-item {
    transform: translateX(0);
  }
}

.logo-wrap {

}
</style>
