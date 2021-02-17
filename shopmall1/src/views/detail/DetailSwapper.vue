<template>
  <Swiper>
    <SwiperItem v-for="item in topImages" class="topItem">
      <img :src="item">
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "DetailSwapper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .topItem{
    height: 300px;
    overflow: hidden;
  }

</style>
