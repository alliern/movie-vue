import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import MovieIndex from "../views/MovieIndex.vue";
import MovieNew from "../views/MovieNew.vue";
import MovieShow from "../views/MovieShow.vue";
import MovieEdit from "../views/MovieEdit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "Sign up",
    component: Signup,
  },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/movies", name: "movies-index", component: MovieIndex },
  { path: "/movies/new", name: "movie-new", component: MovieNew },
  { path: "/movies/:id", name: "movie-show", component: MovieShow },
  { path: "/movies/:id/edit", name: "movie-edit", component: MovieEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
