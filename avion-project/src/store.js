import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let basket = window.localStorage.getItem("basket");
let basketCount = window.localStorage.getItem("basketCount");

const store = new Vuex.Store({
  state: {
    products: [],
    basket: basket ? JSON.parse(basket) : [],
    basketCount: basketCount ? basketCount : 0,
  },
  mutations: {
    SET_PRODUCTS(state, updatedProducts) {
      state.products = updatedProducts;
    },
    SET_BASKET(state, updatedBasket) {
      state.basket = updatedBasket;
    },
    addToBasket(state, item) {
      let found = state.basket.find((product) => product.id === item.id);

      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price;
      } else {
        state.basket.push(item);

        Vue.set(item, "quantity", 1);
        Vue.set(item, "totalPrice", item.price);
      }

      state.basketCount++;
      this.commit("saveBasket");
    },

    removeFromBasket(state, item) {
      let index = state.basket.indexOf(item);

      if (index > -1) {
        let product = state.basket[index];
        state.basketCount -= product.quantity;
        state.basket.splice(index, 1);
      }
    },

    saveBasket(state) {
      window.localStorage.setItem("basket", JSON.stringify(state.basket));
      window.localStorage.setItem("basketCount", state.basketCount);
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
    getBasketCount: (state) => state.basketCount,
  },
});

export default store;
