<template>
    <div>
        {{myName}} -- 年龄:{{myAge}}<br>
        <button @click="handleChange">Change</button>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      myName: 'Jhon',
      myAge: 23
    })
    const handleChange = () => {
      state.myName = 'xiaohua'
    }
    return {
      ...toRefs(state),
      handleChange
    }
  }
}
</script>
