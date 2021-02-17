<template>
  <div>
    <Tabbar>
      <TablebarItem path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </TablebarItem>
      <TablebarItem path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </TablebarItem>
      <TablebarItem path="myCart" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </TablebarItem>
      <TablebarItem path="profile" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </TablebarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from "components/common/tabbar/Tabbar";
  import TablebarItem from "components/common/tabbar/TablebarItem";

  export default {
    name: "MainTabbar",
    components: {
      Tabbar,
      TablebarItem
    }
  }
</script>

<style scoped>

</style>
