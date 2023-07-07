<template>
  <section class="gallery">
    <div class="container">
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
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },

  mounted() {
    this.$store.dispatch("getProductsAPI");
  },
};
</script>

<style lang="scss" src="../../../assets/scss/gallery.scss" scoped></style>
