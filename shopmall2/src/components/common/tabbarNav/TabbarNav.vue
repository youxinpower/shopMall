<template>
    <div class="navBar" >
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabbarNav"
    }
</script>

<style scoped>
  .navBar{
    line-height: 44px;
    height: 44px;
    display: flex;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    text-align: center;
  }

  .left, .right{
    width: 60px;
    height: 44px;
  }
  .center{
    flex: 1;
  }

</style>
