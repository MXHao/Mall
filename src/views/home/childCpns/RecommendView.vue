<template>
 <div class="recommend">
<div v-for="item in recommends" :key="">
    <a :href="item.link" class="recommend-item">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
    </a>
</div>
 </div>
</template>

<script>
 export default {
   name: 'RecommendView', 
   props: {
     recommends: {
         type: Array,
         default: []
     }
   },
   components: {

   },
   methods:{
  
}
 }
</script>

<style scoped>
.recommend {
    display: flex;
    justify-content: space-around
}
.recommend-item {
    flex: 1
}
.recommend-item img {
    width: 70px;
    height: 70px
}
</style>
