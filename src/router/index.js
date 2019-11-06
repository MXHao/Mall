import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Shopcar = () =>
    import ('../views/shopcar/Shopcar')
const Profile = () =>
    import ('../views/profile/Profile')
const Detail = () =>
    import ('../views/detail/Detail')
    //安装插件
Vue.use(VueRouter)

//创建路由
const routes = [{
        path: '/',
        redirect: '/home',

    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcar',
        component: Shopcar
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router