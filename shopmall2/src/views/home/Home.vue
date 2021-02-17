<template>
  <div id="home">
    <TabbarNav class="home-nav"><div slot="center">购物街</div></TabbarNav>
    <HomeSwiper :banners="banners"></HomeSwiper>
  </div>
</template>

<script>
  import TabbarNav from "components/common/tabbarNav/TabbarNav"
  import HomeSwiper from "./HomeSwiper"
  import {getHomeMultiData} from "network/home"


  export default {
    name: "Home",
    components: {
      TabbarNav,
      HomeSwiper
    },
    data() {
      return {
        banners: [],
        recommends: []
      }

    },
    created() {
      getHomeMultiData().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
  }
</style>
