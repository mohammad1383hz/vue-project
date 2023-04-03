import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Users from '../components/Users.vue'
import UserShowIndex from '../components/UserShowIndex.vue'
import PostCreate from '../components/PostCreate.vue'
import PostUpdate from '../components/PostUpdate.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserShowIndex
    },
    {
      path: '/posts',
      name: 'post.create',
      component: PostCreate
    },
    {
      path: '/post/edit/:id',
      name: 'post.update',
      component: PostUpdate
    },
  
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
