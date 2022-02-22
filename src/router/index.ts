import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/',
  //   name: 'temporaryEntrance',
  //   component: () => import(/* webpackChunkName: "temporaryEntrance" */ '../views/home/temporaryEntrance.vue')
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    meta:{
      keepAlive: true
    },
  },
  {
    path: '/label',
    name: 'Label',
    component: () => import('../views/home/label.vue'),
    meta:{
      keepAlive: true
    },
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/home/article.vue'),
    meta: { 
      keepAlive: false, //是否需要缓存
    }
  },
  {
    path: '/temporaryEntrance',
    name: 'TemporaryEntrance',
    component: () => import(/* webpackChunkName: "temporaryEntrance" */ '../views/home/temporaryEntrance.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/temporaryEntrance'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // console.log('savedPosition-----', savedPosition);

      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})


export default router
