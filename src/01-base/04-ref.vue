<template>
<!-- ref本身不是响应式对象，ref的value值是响应式对象 ref可以操作字符串和数字,reactive只能操作对象-->
    <div>
        Hello, My Name is {{myName}}, My Age is {{myAge}}
        <div>
            <button @click="handleChange">Change State</button>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    console.log('setup')
    const myName = ref('宵夜')
    const myAge = ref(20)
    const handleChange = () => {
      myName.value = '小花'
      myAge.value = 23
    }
    return {
      myName,
      myAge,
      handleChange
    }
  }
}
</script>
