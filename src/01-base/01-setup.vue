<template>
    <div>
        setup
        {{state.myname}} -- {{state.myage}}
        <div>
            <button @click="handleChange">Change State</button>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup () {
    console.log('setup')
    const state = reactive({
      myname: 'kerwin',
      myage: 100
    })
    const handleChange = () => {
      state.myname = '小明'
      state.myage = 200
    }
    return {
      state,
      handleChange
    }
  }
}
</script>
