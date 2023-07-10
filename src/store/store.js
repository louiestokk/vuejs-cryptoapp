import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  products: [],
  cart: [],
};

export default new Vuex.Store({
  state,
  mutations: {
    addAllProducts(state, payload) {
      state.products = payload;
    },
  },
});
