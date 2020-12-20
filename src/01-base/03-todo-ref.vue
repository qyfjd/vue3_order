<template>
<!-- ref代替v-model双向数据绑定 -->
    <div>
        <input type="text" ref = "inputText">
        <button @click="add">Add</button>
    </div>
    <div>
        <ul v-for="(data,index) in state.dataList" :key="data">
            <li>{{data}}
        <button @click="clear(index)">Clear</button></li>
        </ul>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
export default {
  setup () {
    const state = reactive({
      dataList: []
    })
    const inputText = ref('')
    const add = () => {
      console.log(inputText)
      state.dataList.push(inputText.value.value)
      inputText.value.value = ''
    }
    const clear = (index) => {
      state.dataList.splice(index, 1)
    }
    return {
      inputText,
      state,
      add,
      clear
    }
  }
}
</script>
