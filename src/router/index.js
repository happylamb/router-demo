import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('../views/Home')
const About = ()=>import('../views/About')
const TestCom = ()=>import('../views/TestCom')
const Index = ()=>import('../views/Index')

const routes = [
  {
    path: '/',
    // name: 'home',
    redirect:'/index'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: TestCom
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: About
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active'
})

export default router
