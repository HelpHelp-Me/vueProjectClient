<template>
  <div class="header">
    <!-- svg -->
    <div class="svg-container">
      <svg viewBox="0 0 100 30">
        <symbol id="line-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".4em">
            HI,FRIEND
          </text>
        </symbol>
        <use xlink:href="#line-text" class="line-text"></use>
        <use xlink:href="#line-text" class="line-text"></use>
        <use xlink:href="#line-text" class="line-text"></use>
        <use xlink:href="#line-text" class="line-text"></use>
      </svg>
    </div>

    <!-- upload image -->
    <!-- <div class="upload-container">
      <a-upload
        v-model:file-list="fileList"
        name="file"
        :multiple="true"
        action="/api/upload"
        :headers="headers"
        @change="handleChange"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          Click to Upload
        </a-button>
      </a-upload>
    </div> -->

    <button id="button" @click="testAxios">测试axios</button>
  </div>
  <svg
    @click="removeSvg"
    class="svg-attributes-demo"
    width="128"
    height="128"
    viewBox="0 0 128 128"
  >
    <filter id="displacementFilter" x="0" y="0" width="100%" height="100%">
      <!-- baseFrequency="0.03"
        numOctaves="2" -->
      <feTurbulence
        style="transform: scale(1);"
        baseFrequency="0.05"
        numOctaves="2"
        type="turbulence"
        result="turbulence"
      ></feTurbulence>
      <!-- scale="15" -->

      <feDisplacementMap
        in2="turbulence"
        in="SourceGraphic"
        scale="15"
        xChannelSelector="R"
        yChannelSelector="G"
      ></feDisplacementMap>
    </filter>
    <!-- points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100" -->
    <!-- 64 68.64 30 88 63.446 67.68 64 30 64.554 67.68 96 88 -->
    <!-- points="64 68.64 60 80 63.446 67.68 64 59 64.554 67.68 74 80" -->

    <polygon
      style="filter:url('#displacementFilter');transform: scale(1);"
      points="64 64 64 64 64 64 64 64 64 64 64 64"
      fill="lightBlue"
    ></polygon>
  </svg>

  <!-- <a-skeleton active :paragraph="SkeletonParagraphProps" />
  {{SkeletonParagraphProps.rows}} -->

  <div class="container flex flex-col items-center">
    <template v-for="(item, index) in articleList" :key="item">
      <knowledge-card
        class="wxmb14"
        :id="item._id"
        :title="item.articleTitle"
        :subTitle="item.articleIntroduction"
        :coverImage="item.articleCoverImage"
        :imageRight="index % 2 == 0"
      />
    </template>
    <a-divider v-if="isAllLoaded">没有更多了</a-divider>
    <a-spin v-if="isLoadingData"/>
  </div>
</template>

<script lang="ts">
import publicNav from "../../components/public-nav.vue";
import { message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, ref, computed, onMounted } from "vue";
import axios from "axios";
import knowledgeCard from "../../components/knowledge-card.vue";
import anime from "animejs/lib/anime.es.js";
import { useStore } from 'vuex'
// import anime from 'animejs'

// interface FileItem {
//   uid: string;
//   name?: string;
//   status?: string;
//   response?: string;
//   url?: string;
// }

// interface FileInfo {
//   file: FileItem;
//   fileList: FileItem[];
// }

export default defineComponent({
  components: {
    UploadOutlined,
    publicNav,
    knowledgeCard,
  },
  setup() {
    // const handleChange = (info: FileInfo) => {
    //   if (info.file.status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }

    //   if (info.file.status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully`);
    //   } else if (info.file.status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // };
    const store = useStore()
    const articleList = computed(() => store.state.article.articleList)
    const isLoading = computed(() => store.state.article.isLoadingData)
    const isAllLoaded = computed(() => store.state.article.isAllLoaded)

    function removeSvg() {
      const tl = anime.timeline({
        easing: "easeOutExpo",
        // duration: 350
      });
      tl.add({
        targets: ".svg-attributes-demo polygon",
        points: "64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100",
        duration: 750,
      }).add({
        targets: [
          ".svg-attributes-demo polygon",
          "feTurbulence",
          "feDisplacementMap",
        ],
        points: "64 128 0 128 0 0 128 0 128 32 128 128",
        baseFrequency: 0,
        scale: 1,
        duration: 550,
      });
    }
    let { testAxios } = Axios();
    // const fileList = ref([]);
    console.log("...skeleton(),", {});
    const SkeletonParagraphProps = skeleton();

    //加载更多
    function loadMoreArticles() {
      store.dispatch('article/getAllArticle')
    }

    function handleScroll(e: any) {
      //文档内容实际高度（包括超出视窗的溢出部分）
      var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      //滚动条滚动距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //窗口可视范围高度
      var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
      
      if(clientHeight + scrollTop >= scrollHeight){
        loadMoreArticles()
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, true);
    })

    return {
      // fileList,
      // headers: {
      //   authorization: 'authorization-text',
      // },
      // handleChange,
      testAxios,
      removeSvg,
      SkeletonParagraphProps,
      articleList, isLoading, isAllLoaded, loadMoreArticles
    };
  },
});

function Axios() {
  const testAxios = () => {
    console.log("test axios");
    // anime({
    //   targets: "#button",
    //   translateX: 250,
    // });
    // return;

    // axios
    //   .get("/api/user/getAllUser", {
    //     params: {
    //       testParams: "hello world",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("axios res-----", res);
    //   });

     axios
      .post('/api/richText/addRichText', {
        content: "rich   ------"
      })
      .then((res) => {
        console.log('axios res-----', res)
      })
  };
  return { testAxios };
}

function skeleton() {
  const SkeletonParagraphProps = reactive({
    rows: 6,
  });

  return SkeletonParagraphProps;
}

// function handleScroll(e: any) {
//     //文档内容实际高度（包括超出视窗的溢出部分）
//     var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
//     //滚动条滚动距离
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//     //窗口可视范围高度
//     var clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
    
//     if(clientHeight + scrollTop >= scrollHeight){
//       console.log("===加载更多内容……===");
//     }
// }

</script>

<style lang="scss">
.header {
  height: 100vh;
  width: 100vw;
  // background: lightblue;
  background-image: url("https://cdn.jsdelivr.net/gh/lukeewin/images@master/index3.jpg");
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
}
.nav-bar {
  ul {
    display: flex;
  }
}

.svg-container {
  width: 900px;
  height: 300px;
  margin: 30vh auto 0;
  background: rgba(0, 0, 0, 0.5);
  font-size: 100px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 16px;
}

.line-text {
  fill: none;
  stroke-width: 1;
  stroke-dasharray: 0 24;
  stroke-dashoffset: 0;
}

.line-text:nth-child(4n + 1) {
  stroke: rgb(39, 135, 238);
  animation: text1 4s ease-in-out forwards;
}
.line-text:nth-child(4n + 2) {
  stroke: rgb(47, 169, 92);
  animation: text2 4s ease-in-out forwards;
}
.line-text:nth-child(4n + 3) {
  stroke: rgb(249, 189, 56);
  animation: text3 4s ease-in-out forwards;
}
.line-text:nth-child(4n + 4) {
  stroke: rgb(235, 61, 50);
  animation: text4 4s ease-in-out forwards;
}

@keyframes text1 {
  100% {
    stroke-dashoffset: 100;
    stroke-dasharray: 6 18;
  }
}

@keyframes text2 {
  100% {
    stroke-dashoffset: 106;
    stroke-dasharray: 6 18;
  }
}

@keyframes text3 {
  100% {
    stroke-dashoffset: 112;
    stroke-dasharray: 6 18;
  }
}

@keyframes text4 {
  100% {
    stroke-dashoffset: 118;
    stroke-dasharray: 6 18;
  }
}

.svg-attributes-demo {
  background: black;
  height: 100vh;
  width: 100vw;
  // position: fixed;
  // top: 0;
  // left: 0;
}
</style>
