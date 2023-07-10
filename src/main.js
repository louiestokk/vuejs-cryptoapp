import Vue from "vue";
import App from "./App.vue";
import Products from "./components/Products.vue";
import ProductDetails from "./components/ProductDetails.vue";
import Post from "./components/Post.vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "./store/store";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Products,
    name: "products",
  },
  {
    path: "/singelproduct",
    component: ProductDetails,
    name: "details",
  },
  {
    path: "/cryptocoin/:slug",
    component: Post,
    name: "post",
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
