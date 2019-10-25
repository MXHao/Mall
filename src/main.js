import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import axios from 'axios'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
axios({
    url: 'http://123.207.32.32:8000/api/v1/home/multidata',
    method: 'get'
}).then(res => {
    console.log(res)
})