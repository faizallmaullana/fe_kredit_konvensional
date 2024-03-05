import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: () => import("@/views/LandingPage.vue"),
  },
  {
    path: "/registration",
    name: "RegistrationPage",
    component: () => import("@/views/RegistrationPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/LoginPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
