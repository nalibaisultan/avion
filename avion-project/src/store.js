import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    basket: [],
  },
  mutations: {
    SET_PRODUCTS(state, updatedProducts) {
      state.products = updatedProducts;
    },
    SET_BASKET(state, updatedBasket) {
      state.basket = updatedBasket;
    },
  },
  actions: {
    getProductsAPI({ commit }) {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((json) => commit("SET_PRODUCTS", json));
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getBasket: (state) => state.basket,
  },
});

export default store;
