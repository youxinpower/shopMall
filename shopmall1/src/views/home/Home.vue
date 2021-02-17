<template>
  <div id="home">
    <TabbarNav class="home-nav">
      <div slot="center">购物街</div>
    </TabbarNav>
    <Scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="scrollContent"
            :pullUpLoad="true"
            @pullingUp="refrenshLoader"
           >
      <home-swiper :banners="banners"></home-swiper>
      <HomeCommendView :recommends="recommends"></HomeCommendView>
      <HomeFeatureView></HomeFeatureView>
      <tabbarControll :titles="['流行','新款','精选']" class="homeControll" @clickCategory="clickCategory"></tabbarControll>
      <GoodsList :goodsCollect="goodsCollect"/>
    </Scroll>
    <BackHome @click.native="backTop" v-show="isTopShow"></BackHome>
  </div>
</template>

<script>
  import TabbarNav from "components/common/tabbarNav/TabbarNav"
  import HomeSwiper from "./HomeSwiper"
  import HomeCommendView from "./HomeCommendView"
  import {getHomeMultiData, homeGoodsList} from "network/home"
  import HomeFeatureView from "./HomeFeatureView"
  import TabbarControll from "components/common/tabbarControll/TabbarControll"
  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll"
  import BackHome from "components/content/backHome/BackHome"


  export default {
    name: "Home",
    components: {
      TabbarNav,
      HomeSwiper,
      HomeCommendView,
      HomeFeatureView,
      TabbarControll,
      GoodsList,
      Scroll,
      BackHome
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'sell': {
            page: 0,
            list: []
          },
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
        },
        currentCategory: 'pop',
        isTopShow: false,
        currentY:0
      }
    },
    computed: {
      goodsCollect() {
        return this.goods[this.currentCategory].list;
      }
    },
    activated(){
      this.$refs.scroll.scroll.scrollTo(0,this.currentY);
      this.$refs.scroll.scroll.refresh();
    },
    deactivated(){
      this.currentY=this.$refs.scroll.scroll.y;
    },
    created() {
      this.getHomeMultiData(),
        this.homeGoodsList("pop"),
        this.homeGoodsList("sell"),
        this.homeGoodsList("new")
    },
    methods: {
      refrenshLoader(){
        this.homeGoodsList(this.currentCategory);
        this.$refs.scroll.scroll.refresh();
      },
      scrollContent(position){
        this.isTopShow=(-position.y)>1000?true:false;

      },
      backTop(){
        this.$refs.scroll.scroll.scrollTo(0,0)
      },
      clickCategory(index) {
        switch (index) {
          case 0:
            this.currentCategory = 'pop';
            break;
          case 1:
            this.currentCategory = 'sell';
            break;
          case 2:
            this.currentCategory = 'new'
        }
      },
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      homeGoodsList(type) {
        const page = this.goods[type].page + 1;
        homeGoodsList(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1;
          this.$refs.scroll.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .home-nav {
    background-color: var(--color-tint);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }

  .homeControll {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
