import Vue from 'vue'
import Router from 'vue-router'
import Home from "views/home/Home";
import Category from "views/category/Category";
import Profile from "views/profile/Profile";
import MyCart from "views/carts/MyCart";

Vue.use(Router)

export  default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/myCart',
      component: MyCart
    }
  ]
})
