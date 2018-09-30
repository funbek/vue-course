import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import EditUser from "@/views/EditUser.vue";
import AddUser from "@/views/AddUser.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL || "/",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      component: Users
    },
    {
      path: "/add-user",
      component: AddUser
    },
    {
      path: "/edit-user/:id",
      component: EditUser
    }
  ]
});
