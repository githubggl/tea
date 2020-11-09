import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    // component: Home
    redirect: '/ttype'
  },
  {
    path: '/ttype',
    name: 'ttype',
    component: () => import(/* webpackChunkName: "teatypedetail" */ '../views/TeaTypeDetail.vue'),
    props: route => ({
      name: route.query.name,
      id: route.query.id
    })
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "teadetail" */ '../views/TeaDetail.vue'),
    props: route => ({
      name: route.query.name,
      // id: route.query.id
    })
  },
  {
    path: '/abroad',
    name: 'abroad',
    component: () => import(/* webpackChunkName: "abroad" */ '../views/Abroad.vue'),
    props: route => ({
      name: route.query.name,
    })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/*',
    name: '404'
    // component:
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
