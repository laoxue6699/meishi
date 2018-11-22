import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Cate from '@/pages/Home/Cate.vue'
import Steps from '@/pages/Home/Steps.vue'
import Menu from '@/pages/Menu/Menu.vue'
import Video from '@/pages/Video/Video.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search
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
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cate/:id',
      name: 'Cate',
      component: Cate
    },
    {
      path: '/steps/:id',
      name: 'Steps',
      component: Steps
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
