<template>
    <div v-if="state.filmInfo">
        <div :style="{backgroundImage:'url('+state.filmInfo.poster+')'}"
         style="height:200px;background-size:cover;bakcground-position:center"></div>
    </div>
</template>
<script>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import http from '@/util/http'
export default {
  setup () {
    const route = useRoute()
    const filmId = route.params.id
    const state = reactive({
      filmInfo: null
    })
    onMounted(() => {
      http({
        url: `/gateway?filmId=${filmId}&k=8606829`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(res => {
        console.log(res)
        state.filmInfo = res.data.data.film
      })
    })
    return {
      state
    }
  }
}
</script>
