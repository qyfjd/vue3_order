<template>
    <div>
        <button @click="handleMinus">-</button>
        {{count}}
        <button @click="handleAdd">+</button>
    </div>
    <child></child>
</template>

<script>
import child from './components/Child'
import { useCount } from './hooks/useCount'
export default {
  components: {
    child
  },
  setup () {
    const { count, handleMinus, handleAdd } = useCount()
    return {
      count,
      handleAdd,
      handleMinus
    }
  }
}
</script>
