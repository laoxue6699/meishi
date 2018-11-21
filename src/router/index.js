import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Menu from '@/pages/Menu.vue'
import Video from '@/pages/Video.vue'
import Profile from '@/pages/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
      name: 'root',
      redirect: '/home',
    }
  ]
})
