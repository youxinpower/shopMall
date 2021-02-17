<template>
  <div class="tabbarControll">
    <div class="itemTabbarControll" v-for="(item, index) in titles" :class="{active: index===pageCurrent}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarControll",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        pageCurrent:0
      }
    },
    methods:{
      itemClick(index){
        this.pageCurrent=index;
        this.$emit('clickCategory',index);
      }
    }
  }
</script>

<style scoped>
  .tabbarControll {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .itemTabbarControll {
    flex: 1;
  }

  .itemTabbarControll span{
    padding: 6px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
  }

</style>
