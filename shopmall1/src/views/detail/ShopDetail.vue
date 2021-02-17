<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <DetailSwapper :top-images="images"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo"/>
      <detail-param-info :paramInfo="paramInfo"/>
      <detail-comment-info :commentInfo="commentInfo" />
      <GoodsList :goodsCollect="recomment"></GoodsList>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./DetaliNavBar"
  import DetailSwapper from "./DetailSwapper"
  import DetailBaseInfo from './DetailBaseInfo'
  import DetailShopInfo from './DetailShopInfo'
  import DetailParamInfo from './DetailParamInfo'
  import DetailCommentInfo from './DetailCommentInfo'
  import DetailGoodsInfo from "./DetailGoodsInfo"
  import GoodsList from 'components/content/goods/GoodsList'
  import {getDetailData, Goods, Shop, GoodsParam,getRecommendData} from "network/detail";
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "ShopDetail",
    components: {
      Scroll,
      DetailNavBar,
      getDetailData,
      getRecommendData,
      DetailSwapper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    data() {
      return {
        iid: null,
        images: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo:{},
        commentInfo:[],
        recomment:[]
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetailData(this.iid).then(res => {
        this.images = res.data.result.itemInfo.topImages;
        this.goods = new Goods(res.data.result.itemInfo, res.data.result.columns, res.data.result.shopInfo.services);
        // 3.创建店铺信息的对象
        this.shop = new Shop(res.data.result.shopInfo);
        //获取详情页 图片数据
        this.detailInfo = res.data.result.detailInfo;
        //獲取參數信息
        this.paramInfo = new GoodsParam(res.data.result.itemParams.info, res.data.result.itemParams.rule);
        //获取评论数据
        if(res.data.result.rate.cRate !== 0){
          this.commentInfo = res.data.result.rate.list
        };
      }),
        getRecommendData().then(res =>{
          console.log(res.data.data.list);
          //获取推荐数据
          this.recomment=res.data.data.list;
        })
    },
    methods: {}
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px);
  }

</style>
