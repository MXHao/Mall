<template>
  <div class="GoodsListItem" @click="itemClick">
    <img :src="goodsItem.show.img" alt />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  methods: {
    itemClick() {
      // this.$router.push({
      //   path: "/detail",
      //   query: {
      //     name: "张三",
      //     id: 1
      //   }
      // });
      this.$router.push('/detail/' + this.goodsItem.iid)//跳转详情页并传递id
      // console.log("跳到详情");
    }
  }
};
</script>

<style scoped>
.GoodsListItem {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.GoodsListItem img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
