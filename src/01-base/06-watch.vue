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
    <input type="text" v-model="myText" />
</template>
<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup () {
    const state = reactive({
      inputText: '',
      dataList: []
    })
    const myText = ref('')
    watch(myText, () => {
      console.log('myText---', myText.value)
    })
    // watch监听值的改变，如input输入框reactive的监听方式,第一个参数是之前的值，第二个参数是改变后的值的操作
    watch(() => state.inputText, () => {
      console.log('state.inputText-----', state.inputText)
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
      clear,
      myText
    }
  }
}
</script>
