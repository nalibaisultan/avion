<template>
  <main class="main">
    <section class="all-products">
      <div class="allproducts-header">
        <h1 class="allproducts-title">All products</h1>
      </div>
      <div class="container">
        <div class="gallery-items">
          <router-link
            class="gallery-item"
            v-for="(item, index) in products"
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
  </main>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },
};
</script>

<style lang="scss" src="../../assets/scss/allproducts.scss" scoped></style>
