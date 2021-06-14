import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Signin from '../views/Signin.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { isAuthenticated: false }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { isAuthenticated: true }
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
    meta: { isAuthenticated: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthenticated && store.state.admin.isAuthenticated == false) {
    next('/signin')
  } else {
    next()
  }
})

export default router