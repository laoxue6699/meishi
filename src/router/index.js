import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Menu from '@/pages/Menu/Menu.vue'
import Video from '@/pages/Video/Video.vue'
import Profile from '@/pages/Profile/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
