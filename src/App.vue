<template>
  <div id="app">
<router-view></router-view>
<Main-Tabbar></Main-Tabbar>
  </div>
</template>

<script>
import MainTabbar from './components/content/MainTabbar/MainTabbar'

export default {
  name: 'app',
  components: {
    MainTabbar
  }
}
</script>
  
<style>
@import "assets/css/normalize.css"
</style>
