<template>
  <div class="gooods">
    <GoodsItem v-for="item in goodsCollect" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem"

  export default {
    name: "GoodsList",
    components:{
      GoodsItem
    },
    props: {
      goodsCollect:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.gooods{
  display: flex;
  flex-wrap: wrap;
  padding: 3px;
  justify-content: space-around;
}
</style>
