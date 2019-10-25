<template>
  <div id="home" class="wrapper">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner" />
    <recommend-view :recommends="recommend"></recommend-view>
  </div>
</template>

<script>
import { getHomeMultidata } from "network/home";
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCpns/HomeSwiper";
import RecommendView from "./childCpns/RecommendView";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  created() {
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    }
  }
};
</script>

<style scoped>
</style>
