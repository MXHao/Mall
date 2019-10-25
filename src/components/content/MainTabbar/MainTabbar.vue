<template>
 <tab-bar>
      <tab-bar-item path="/home">
      <!-- 在webpack.base.conf.js下面的resolve给src文件夹起名为@，这里直接使用 -->
          <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
          <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
          <div slot="item-text">分类</div>
          </tab-bar-item>
      <tab-bar-item path="/shopcar">
          <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
          <div slot="item-text">购物车</div>
          </tab-bar-item>
      <tab-bar-item path="/profile">
          <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'
 export default {
   name: 'MainTabbar', 
   data () {
     return {

     }
   },
   components: {
     TabBar,
     TabBarItem
   },
   methods:{
  
}
 }
</script>

<style scoped>

 
</style>
