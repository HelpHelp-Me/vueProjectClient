<template>
  <div class="line-numbers copytoclipboard" data-toolbar-order="hello-world">
    <div class="article-image-wrap">
      <img :src="article.articleCoverImage">
      <div class="cover-image-mask">
        <div class="container">
          <header class="article-header">
            <div class="article-title">{{article.articleTitle}}</div>
            <div class="article-sub-title">{{article.articleIntroduction}}</div>
          </header>
        </div>
      </div>
    </div>
    <div
      v-html="article.articleContent"
      class="container article-content">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex';
import Prismjs from 'prismjs'

export default defineComponent({
  setup() {
    const route = useRoute()
    const store = useStore()
    // const article = computed(() => {
    //   store.getters.article.getArticleById(route.params.id)
    // })
    // console.log('store.getters', store.getters['article/getArticleById']);
    onMounted(() => {
      Prismjs.highlightAll();
    })
    const article = store.getters['article/getArticleById'](route.params.id)
    return {
      article,
    }
  },
});
</script>

<style scoped lang="scss">
.article-image-wrap {
  width: 100vw;
  height: 600px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .cover-image-mask {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    .container {
      position: relative;
      .article-header {
        position: absolute;
        bottom: 20px;
        .article-title {
        color: #fff;
        font-weight: bold;
        font-size: 36px;
        }
        .article-sub-title {
          color: #fff;
          margin-top: 20px;
        }
      }
    }
  }
}

.article-content {
  padding: 60px 0;
}
</style>
