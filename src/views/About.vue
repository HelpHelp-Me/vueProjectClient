<template>
  <div>
    <h2>about</h2>
    <div>
      <p>{{count}}</p>
      <button @click="myFn">+1</button>
    </div>
    <hr>
    <ul>
      <li v-for="(item, index) in stus.list" :key="index" @click="delStu(index)">
        {{item.name}} - {{item.id}}
      </li>
    </ul>
    <hr>
    <div>
      <p>{{laowang.name}}</p>
    </div>
    <hr>
    <div>
      <p>{{reObj}}</p>
      <button @click="changeReObj">button</button>
    </div>
    <hr>
    <div>
      <p>{{reRefObj2}}</p>
      <button @click="changeReRefObj2">button</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,ref,toRaw,toRefs } from 'vue';
import pubHeader from '../components/public-nav.vue'

export default defineComponent({
  components: {
    pubHeader
  },
  setup() {
    let count = ref(0)
    function myFn() {
      count.value += 1
    }
    let laowang = reactive({
      name: '老王',
      age: 23,
    })
    let {stus, delStu} = useRemStu()

    let obj = {name: 'ls', age: 12}
    let reObj = reactive(obj)
    let obj2 = toRaw(obj)
    function changeReObj() {
      //直接修改obj不会触发界面更新
      reObj.name = 'zs'
      console.log(obj);
      
    }

    let refObj = {name: 'lisi', age: 69}
    let reRefObj = ref(refObj.name)
    let reRefObj2 = toRefs(refObj)
    function changeReRefObj2() {
      //直接修改obj不会触发界面更新
      reRefObj2.name.value = 'zs'
      console.log(reRefObj2);
      
    }
    return {
      count, myFn,
      stus, delStu,
      laowang,
      reObj, changeReObj,
      reRefObj2, changeReRefObj2
    }
  }
});
function useRemStu() {
  let stus = reactive({
    list: [
      {id: 1, name: 'yi'},
      {id: 2, name: 'er'},
      {id: 3, name: 'san'},
    ]
  })
  function delStu(index: number) {
    stus.list = stus.list.filter((item,idx) => idx !== index)
  }
  return {stus, delStu}
}
</script>

<style>

</style>
