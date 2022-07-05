import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import ShowDetails from "@/views/Product/ShowDetails";
import ListProducts from "@/views/Category/ListProducts";
import Register from "@/views/Users/RegisterPage";
import Login from "@/views/Users/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/product/show/:id',
    name : 'ShowDetails',
    component: ShowDetails
  },
  {
    path : '/category/show/:id',
    name : 'ListProducts',
    component: ListProducts
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
