<template>
  <main class="main">
    <section class="details">
      <div class="container">
        <div class="details-container">
          <img :src="product.img" alt="" class="details-img" />

          <div class="details-wrapper">
            <div class="details-info">
              <div class="details-info__iner">
                <h1 class="details-title">{{ product.title }}</h1>
                <h2 class="details-price">{{ product.price }} $</h2>
              </div>
              <p class="details-header">Product description</p>
              <p class="details-text">{{ product.descr }}</p>
            </div>
            <div class="details-info_scnd">
              <p class="details-head">Dimensions</p>
              <div class="details-info_scnd__iner">
                <div class="details-info_scnd__iner__wrap">
                  <p class="details-height">Height</p>
                  <p class="details-height">{{ product.height }}cm</p>
                </div>
                <div class="details-info_scnd__iner__wrap details-border">
                  <p class="details-width">Width</p>
                  <p class="details-width">{{ product.width }}cm</p>
                </div>
                <div class="details-info_scnd__iner__wrap">
                  <p class="details-depth">Depth</p>
                  <p class="details-depth">{{ product.depth }}cm</p>
                </div>
              </div>
            </div>

            <button
              class="details-btn"
              @click="addToBasket(product)"
              v-on:click="greet"
            >
              Add to cart
            </button>
          </div>
        </div>
        <h1 class="gallery-head">You might also like</h1>
        <div class="gallery-items">
          <router-link
            class="gallery-item"
            v-for="(item, index) in products.slice(0, 4)"
            :key="index"
            :to="{ name: 'products', params: { id: item.id } }"
          >
            <img class="gallery-img" :src="item.img" alt="" />
            <h3 class="gallery-title">{{ item.title }}</h3>
            <p class="gallery-text">{{ item.price }}$</p>
          </router-link>
        </div>
        <router-link to="/allproducts"
          ><button class="gallery-btn">View collection</button></router-link
        >
        <h2 class="diferent-title">What makes our brand different</h2>
        <div class="diferent-container">
          <div class="diferent-container__items">
            <img
              src="../../../assets/icons/Delivery.svg"
              alt=""
              class="deferent-container__img"
            />
            <h3 class="diferent-container__title">Next day as standard</h3>
            <p class="diferent-container__text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div class="diferent-container__items">
            <img
              src="../../../assets/icons/Checkmark--outline.svg"
              alt=""
              class="deferent_img"
            />
            <h3 class="diferent-container__title">Made by true artisans</h3>
            <p class="diferent-container__text">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div class="diferent-container__items">
            <img
              src="../../../assets/icons/Purchase.svg"
              alt=""
              class="deferent_img"
            />
            <h3 class="diferent-container__title">Unbeatable prices</h3>
            <p class="diferent-container__text">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div class="diferent-container__items">
            <img
              src="../../../assets/icons/Sprout.svg"
              alt=""
              class="deferent_img"
            />
            <h3 class="diferent-container__title">Recycled packaging</h3>
            <p class="diferent-container__text">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productId: this.$route.params.id,
      product: {},
      products: [],
    };
  },

  computed: {
    basket() {
      return this.$store.getters.getBasket;
    },
  },

  mounted() {
    fetch(`http://localhost:3000/products/${this.productId}`)
      .then((res) => res.json())
      .then((json) => (this.product = json));

    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },

  methods: {
    addToBasket(item) {
      this.$store.commit("addToBasket", item);
    },
    greet: function () {
      alert("This product has been added to the shopping cart");
    },
  },
};
</script>

<style lang="scss" src="../../../assets/scss/details.scss" scoped></style>
