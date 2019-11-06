<template>
  <div class="DetailNavbar">
    <nav-bar>
      <div slot="left" class="nav-left" @click="goBack">
        <div><</div>
      </div>
      <div slot="center" class="nav-center">
        <div v-for="(item, index) in titles" 
        :key="index" 
        :class="{active : currentIndex === index}" 
        @click="navClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavbar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    navClick(index) {
      // console.log(index)
      this.currentIndex = index
    },
    goBack() {
      this.$router.back(-1)
    }
  }
};
</script>

<style scoped>
.nav-center {
  display: flex;
  justify-content: space-around;
}
.active {
  color: red
}
.nav-left {
  text-align: center;
  font-size: 20px;
}
</style>
