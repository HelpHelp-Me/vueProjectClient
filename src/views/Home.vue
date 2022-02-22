<template>
  <div class="home">
    <p>{{name}}</p>
    <button @click="changeName">bu</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    let user = reactive({
      name: 'hello',
      age: 14,
    })

    function changeName() {
      user.name = 'not good'
    }
    return {
      ...toRefs(user),
      changeName,
    }
  }
});
</script>
