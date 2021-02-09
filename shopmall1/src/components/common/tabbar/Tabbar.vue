<template>
  <div class="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>
.tab-bar{
  height: 49px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
}
</style>
