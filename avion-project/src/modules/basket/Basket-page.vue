<template>
  <main class="main">
    <section class="basket">
      <div class="container main-container">
        <!-- <div class="basket-items">
          <div class="basket-head">
            <h4 class="basket-head__title">Product</h4>
            <div class="basket-head__in">
              <h4 class="basket-head__quantity">Quantity</h4>
              <h4 class="basket-head__total">Total</h4>
              <h4 class="basket-head__delet">Delete</h4>
            </div>
          </div>
          <div class="basket-main" v-for="(item, index) in basket" :key="index">
            <div class="basket-main__in">
              <img :src="item.img" alt="" class="basket-main__img" />
              <div class="basket-main__inside">
                <h3 class="basket-main__title">{{ item.title }}</h3>
                <h5 class="basket-main__descr">{{ item.descr }}</h5>
                <h4 class="basket-main__price">{{ item.price }}$</h4>
              </div>
            </div>
            <div class="basket-main__in2">
              <h4 class="basket-main__quantity">{{ item.quantity }}</h4>
              <h4 class="basket-main__total">{{ item.totalPrice }}$</h4>
              <img
                @click="removeFromBasket(item)"
                src="../../assets/icons/icons8-delete.svg"
                alt=""
                class="basket-delete"
              />
            </div>
          </div>
        </div> -->

        <table class="basket-items">
          <tr class="basket-head">
            <th>
              <h4 class="basket-title">Product</h4>
            </th>
            <th>
              <h4 class="basket-title">&nbsp;</h4>
            </th>
            <th>
              <h4 class="basket-title">Quantity</h4>
            </th>
            <th>
              <h4 class="basket-title">Total</h4>
            </th>
            <th>
              <h4 class="basket-title">Delete</h4>
            </th>
          </tr>
          <tr v-for="(item, index) in basket" :key="index">
            <td><img :src="item.img" alt="" class="basket-img" /></td>
            <td class="basket-main__product">
              <h3 class="basket-main__title">{{ item.title }}</h3>
              <h5 class="basket-main__descr">{{ item.descr }}</h5>
              <h4 class="basket-main__price">{{ item.price }}$</h4>
            </td>
            <td class="basket-main__quantity">
              <h4>{{ item.quantity }}</h4>
            </td>
            <td class="basket-main__total">
              <h4>{{ item.totalPrice }}$</h4>
            </td>
            <td>
              <img
                @click="removeFromBasket(item)"
                src="../../assets/icons/icons8-delete.svg"
                alt=""
                class="basket-delete"
              />
            </td>
          </tr>
        </table>
        <div class="basket-total">
          <h5 class="basket-totalText">
            Taxes and shipping are calculated at checkout
          </h5>
          <h3 class="basket-totalPrice">
            Total Price: &nbsp;{{ totalPrice }} $
          </h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },

    totalPrice() {
      let total = 0;

      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].totalPrice;
      }

      return parseFloat(total).toFixed(2);
    },
  },

  methods: {
    removeFromBasket(item) {
      this.$store.commit("removeFromBasket", item);
    },
  },
};
</script>

<style lang="scss" src="../../assets/scss/basket.scss" scoped></style>
