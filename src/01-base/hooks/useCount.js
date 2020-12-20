// 封装公共的JS方法
import { ref } from 'vue'
function useCount () {
  const count = ref(0)
  const handleMinus = () => {
    count.value--
  }
  const handleAdd = () => {
    count.value++
  }
  return {
    count,
    handleAdd,
    handleMinus
  }
}
export { useCount }
