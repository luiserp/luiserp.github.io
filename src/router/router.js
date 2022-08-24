import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  { 
    path: "/",
    name: "home",
    component: Home
  },
  { 
    path: "/portfolio",
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),
  },
  { 
    path: "/portfolio/:id",
    name: "view_proyect",
    component: () => import(/* webpackChunkName: "view_proyect" */ '../views/ViewProyectDetails.vue')
  },
  { 
    path: "/cv",
    name: 'cv',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Cv.vue'),
  },
  { 
    path: "/contact",
    name: 'contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  },
  { 
    path: "/:pathMatch(.*)*",
    redirect: '/'
  }
];

const router = createRouter({
  history : createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;