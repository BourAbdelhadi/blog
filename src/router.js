import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () => import('./components/Home.vue')
const Posts = () => import('./components/Posts.vue')
const Post = () => import('./components/Post.vue')
const NotFound = () => import('./components/NotFound.vue')

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/posts',
      component: Posts,
      name: 'posts',
    },
    {
      path: '/posts/:id',
      component: Post,
      name: 'post',
    },
    {
      path: '*',
      component: NotFound,
      name: 'not-found',
    },
  ],
})