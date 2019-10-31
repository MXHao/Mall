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
    
    
}
 .left {
     width: 60px;
 }
 .center {
     flex: 1;
     text-align: center;
     
 }
 .right {
     width: 60px;

 }
</style>
