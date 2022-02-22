<template>
  <template v-if="!isMobile">
    <public-nav background="white" />

    <!-- <router-view /> -->
    <!-- <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name"/>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <div
      class="back-to-top display-flex justify-content-center align-items-center"
      :style="{opacity: showBackToTop ? '1' : '0'}"
      @click="backToTopAction"
    >
      <icon-font class="fs-16" type='icon-zhiding'></icon-font>
    </div>
    <!-- <audioPlayer /> -->
    <div class="container icp-container flex-center">
      <a target="blank" href="https://beian.miit.gov.cn">豫ICP备2021025293号</a>
    </div>
    <div style="width:300px;margin:0 auto; padding:20px 0;">
      <img alt="" src="./assets/beian-icon.png" />
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41152502000162"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
        ><img src="" style="float:left;" />
        <p
          style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
        >
          豫公网安备 41152502000162号
        </p></a
      >
    </div>
  </template>
  <div v-else class="mobile-wrap flex-center">
    请前往电脑端打开
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref} from "vue";
import audioPlayer from "./components/audio-player.vue";
import publicNav from "./components/public-nav.vue";
import { VerticalAlignTopOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex'


export default defineComponent({
  components: {
    audioPlayer,
    publicNav,
    VerticalAlignTopOutlined,
  },
  setup() {
    const store = useStore()
    store.dispatch('article/getAllArticle', {start: 0, count: 3})
    onBeforeMount(() => {
      console.log("app before mount");
    });
    const isMobile = ref(_isMobile());
    const {showBackToTop, backToTopAction} = handleBackToTop()

    onMounted(() => {
      // window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", function(e){
        handleScroll(e, showBackToTop)
      }, false);

    });

    return {
      isMobile,
      showBackToTop, backToTopAction,
    };
  },
});

function _isMobile() {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return !!flag;
}

function handleScroll(e, showBackToTop) {
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (scrollTop > 200) {
    showBackToTop.value = true
  } else {
    showBackToTop.value = false
  }
}

function handleBackToTop() {
  let showBackToTop = ref(false)
  function backToTopAction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return {showBackToTop, backToTopAction}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  width: $containerWidth * 1px;
  margin: auto;
  box-sizing: border-box;
  padding: 20px;
}

.f-w {
  width: 100%;
}

.f-h {
  height: 100%;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icp-container {
  height: 150px;
  margin: auto;
}

.test-width {
  width: $containerWidth * 1px;
  background: $testColor;
  height: 200px;
}

.mobile-wrap {
  height: 100vh;
  width: 100vw;
  font-size: 600;
}

.back-to-top {
  height: 50px;
  width: 50px;
  background: yellow;
  position: fixed;
  bottom: 200px;
  right: 200px;
  cursor: pointer;
  transition-duration: .3s;
}
</style>