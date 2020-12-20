<template>
    <div>
        <input type="text" v-model="state.inputText">
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
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      inputText: '',
      dataList: []
    })
    const add = () => {
      console.log(state.inputText)
      state.dataList.push(state.inputText)
      state.inputText = ''
    }
    const clear = (index) => {
      state.dataList.splice(index, 1)
    }
    return {
      state,
      add,
      clear
    }
  }
}
</script>
