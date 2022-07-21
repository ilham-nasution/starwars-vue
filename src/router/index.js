import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/characters/:id",
      name: "characters",
      component: () => import("../views/CharacterView.vue"),
    },
    {
      path: "/movies/:id",
      name: "movies",
      component: () => import("../views/MovieView.vue"),
    },
  ],
});

export default router;
