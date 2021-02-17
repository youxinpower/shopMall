<template>
  <div id="app">
    <keep-alive exclude="ShopDetail">
    <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabbar/MainTabBar"

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
