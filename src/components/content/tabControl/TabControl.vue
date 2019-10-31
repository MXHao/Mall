<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
      class="tab-control-item"
      :key="index"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  },
  components: {}
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
  position: sticky;
  top: 44px;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.active {
  color: red;
}
</style>
