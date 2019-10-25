<template>
 <div class="navbar">
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
 </div>
</template>

<script>
 export default {
   name: 'navbar', 
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
  
}
 }
</script>

<style scoped>
.navbar {
    display: flex;
    line-height: 44px;
    height: 44px;
    background-color: rgb(0, 0, 0)
}
 .left {
     width: 60px;
 }
 .center {
     flex: 1;
     text-align: center;
     color: #fff;
 }
 .right {
     width: 60px;

 }
</style>
