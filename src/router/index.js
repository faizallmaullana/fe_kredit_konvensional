import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: () => import("@/views/LandingPage.vue"),
  },
  // auth
  {
    path: "/registration",
    name: "RegistrationPage",
    component: () => import("@/views/authentication/RegistrationPage.vue"),
  },
  {
    path: "/registration/admin",
    name: "RegistrationAdminPage",
    component: () => import("@/views/authentication/RegistrationAdminPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/authentication/LoginPage.vue"),
  },
  // home
  {
    path: "/home",
    name: "HomePage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/custommer",
    name: "DaftarCustommer",
    component: () => import("@/views/DaftarCustommer.vue"),
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("@/views/ProfilePage.vue"),
  },
  {
    path: "/new_credit",
    name: "NewCreditPage",
    component: () => import("@/views/NewCreditPage.vue"),
  },
  // admin
  {
    path: "/admin/home",
    name: "AdminHomePage",
    component: () => import("@/views/admin/AdminHomePage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
