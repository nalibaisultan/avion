import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Admin from "@/modules/admin/Admin-page.vue";
import Main from "@/modules/main/Main-page.vue";
import Allproducts from "@/modules/allproducts/All-products.vue";
import Details from "@/modules/main/components/Product-details.vue";
import Basket from "@/modules/basket/Basket-page.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/allproducts",
      name: "allproducts",
      component: Allproducts,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
    {
      path: "/products/:id",
      name: "products",
      component: Details,
    },
  ],
});
