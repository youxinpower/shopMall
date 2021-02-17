<template>
<div>
  <tabbar-nav>
    <div slot="left" class="left">
      <img src="~assets/img/common/back.svg" @click="goBack">
    </div>
    <div slot="center" class="title">
      <div class="centerItem" v-for="(item, index) in titles" :class="{active: index==currentIndex}" @click="itemClick(index)">
        {{item}}
      </div>
    </div>
  </tabbar-nav>
</div>
</template>

<script>
  import TabbarNav from "components/common/tabbarNav/TabbarNav"
    export default {
        name: "DetaliNavBar",
      components:{
        TabbarNav
      },
      data(){
          return{
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
          }
      },
      methods:{
        itemClick(index){
          this.currentIndex=index;
        },
        goBack(){
          this.$router.back();
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 14px;
  }

  .centerItem{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .left img{
    padding-top: 10px;
    width: 25px;
    height: 30px;
  }


</style>
