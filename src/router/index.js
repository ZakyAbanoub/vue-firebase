import { createRouter, createWebHistory } from "vue-router";
import Books from "../views/Books/Books.vue";

const routes = [
  {
    path: "/",
    name: "Books",
    component: Books,
  },
  {
    path: "/edit-book/:id",
    name: "EditBook",
    component: () => import("../views/Books/EditBook.vue"),
  },
  {
    path: "/players",
    name: "Players",
    component: () => import("../views/Players/Players.vue"),
  },
  {
    path: "/edit-player/:id",
    name: "EditPlayer",
    component: () => import("../views/Players/EditPlayer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
