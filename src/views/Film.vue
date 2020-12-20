<template>
    <div class="page">
        <ul v-for="data in state.filmList" :key="data.filmId">
            <li @click="handleDetail(data.filmId)">
                <div class="filmImg"><img :src="data.poster"/></div>
                <span class="filmName">{{data.name}}</span>
                <span class="filmType">{{data.filmType.name}}</span><br>
                <span class="custom">观众评分: {{data.grade}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { getCurrentInstance, onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import http from '@/util/http'
export default {
  setup () {
    const state = reactive({
      filmList: []
    })
    const { ctx } = getCurrentInstance()
    console.log('CTX:' + ctx)
    const router = useRouter()
    onMounted(() => {
      http({
        url: '/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=4537956',
        headers: {
          'X-Host': ' mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        state.filmList = res.data.data.films
        console.log(state.filmList)
      })
    })
    const handleDetail = (id) => {
      console.log('id:' + id)
      //   ctx.$router.push(`/detail/${id}`) 不太提倡使用
      router.push(`/detail/${id}`)
    }
    return {
      state,
      handleDetail
    }
  }
}
</script>
<style lang="less">
 .page{
     display: flex;
     flex-direction: column;
 }
 ul{
     list-style: none;
     text-decoration: none;
 }
 li{
     img{
         width: 100px;
         float: left;
     }
 }
</style>
