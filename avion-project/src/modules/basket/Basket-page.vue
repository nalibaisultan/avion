<template>
  <main class="main">
    <section class="basket">
      <div class="container main-container">
        <div class="basket-items">
          <div class="basket-head">
            <h4 class="basket-head__title">Product</h4>
            <div class="basket-head__in">
              <h4 class="basket-head__quantity">Quantity</h4>
              <h4 class="basket-head__total">Total</h4>
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
              <h4 class="basket-main__quantity">10</h4>
              <h4 class="basket-main__total">{{ item.price }}$</h4>
            </div>
          </div>
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
  },
};
</script>

<style lang="scss" src="../../assets/scss/basket.scss"></style>
