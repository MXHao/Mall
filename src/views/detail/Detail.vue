<template>
  <div id="detail">
    
   <detail-navbar></detail-navbar>
   <div>{{iid}}</div>
  </div>
</template>

<script>
import DetailNavbar from './childCpn/DetailNavbar'
import {getDetail} from 'network/detail'
export default {
  name: "Detail",
  data() {
    return {
      iid: null
    };
  },
  created() {
    //接收保存goodsitem传过来的商品id
this.iid = this.$route.params.iid
//网络请求
getDetail(this.iid).then(res => {
  console.log(res)
})
  },
  components: {
    DetailNavbar
  },
  methods: {}
};
</script>

<style scoped>
</style>
