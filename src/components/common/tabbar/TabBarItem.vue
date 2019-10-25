<template>
 <div class="tabbar-item" @click="itemclick">
<!-- <img src="../../assets/img/tabbar/home.svg" alt="">
<div>首页</div> -->
<div v-if="!isactive">
    <slot name="item-icon"></slot>
    </div>
<div v-else>
    <slot name="item-icon-active"></slot>
    </div>
<div :class="{active: isactive}">
    <slot  name="item-text"></slot>
</div>

 </div>
</template>

<script>
 export default {
   name: 'TabBarItem', 
   props: {
       path: String
   },
   data () {
     return {
// isactive: false
     }
   },
   computed: {
       isactive () {
           //如果当前的path值和活跃的path值相同(等于-1)，则返回
           return this.$route.path.indexOf(this.path) !== -1
       }
   },
   methods:{
  itemclick () {
      console.log('点击了');
      this.$router.push({path:this.path})
      console.log(this.path);
      
      
  }
}
 }
</script>

<style scoped>
.tabbar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px
    }

.tabbar-item img {
height: 24px;
width: 24px;
margin-top: 3px;
vertical-align: middle;
margin-bottom: 2px
    }

 .active {
     color:red
    
     
 }

</style>