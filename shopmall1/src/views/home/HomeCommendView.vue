<template>
  <div class="recommends">
    <div v-for="item in recommends" class="itemRecommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeCommendView",
      props:{
        recommends:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
  .recommends{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 9px 0 20px;
    border-bottom: 8px solid #eee;
  }

  .itemRecommends{
    flex: 1;
  }

  .recommends img{
    width: 65px;
    height:65px;
    margin-bottom: 10px;
  }

</style>
