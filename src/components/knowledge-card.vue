<template>
  <div
    ref="knowledgeCard"
    :class="['card-container full-width display-flex overflow-hidden', {'row-reverse' : imageRight}]"
    @click="navToArticle"
  >
    <div class="image-container full-height">
      <img
        class="full-height full-width"
        v-lazy="coverImage"
      />
    </div>
    <div
      :class="['text-container full-height border-box wxp12 ', [imageRight ? 'align-items-start' : 'align-items-end']]"
    >
      <a-skeleton active :loading="false">
        <p>{{title}}</p>
        <p>{{subTitle}}</p>
      </a-skeleton>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";
import vanillaTilt from 'vanilla-tilt';
import useCurrentInstance  from '@/utils/useCurrentInstance'

export default defineComponent({
  props:{
    id: String,
    title: String,
    subTitle: String,
    coverImage: String,
    imageRight: Boolean
  },
  setup(props) {
    const router = useRouter();
    function navToArticle() {
      router.push({ name: "Article", params: { id: props.id } });
    }
    const knowledgeCard: any = ref(null)

    onMounted(() => {
      vanillaTilt.init(knowledgeCard.value, {
        max: 10,
      })
    })

    return { navToArticle,knowledgeCard };
  },
});
</script>

<style scoped lang="scss">
.card-container {
  width: 700px;
  height: 300px;
  border-radius: 24px;
  // background: lightgrey;
  transition-duration: 0.2s;
  box-shadow: 0 0 3px 0;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0;
  }
}

.row-reverse {
  flex-direction: row-reverse;
}

.image-container {
  width: 50%;
  img {
    object-fit: cover;
  }
}

.text-container {
  width: 50%;
  display: flex;
  flex-direction: column;
}
</style>
