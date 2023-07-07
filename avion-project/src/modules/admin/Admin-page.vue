<template>
  <main class="admin">
    <section class="admin">
      <div class="container">
        <h1 class="admin-title">Admin for created "Products"</h1>

        <form class="admin-form">
          <label for="image" class="admin-label">Image</label>
          <input
            id="image"
            type="text"
            class="admin-input"
            v-model="products.img"
          />
          <label for="title" class="admin-label">Title</label>
          <input
            id="title"
            type="text"
            class="admin-input"
            v-model="products.title"
          />
          <label for="price" class="admin-label">Price</label>
          <input
            id="price"
            type="text"
            class="admin-input"
            v-model="products.price"
          />
          <label for="description" class="admin-label">Description</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            v-model="products.descr"
          ></textarea>
          <label for="height" class="admin-label">Height</label>
          <input
            id="height"
            type="text"
            class="admin-input"
            v-model="products.height"
          />
          <label for="width" class="admin-label">Width</label>
          <input
            id="width"
            type="text"
            class="admin-input"
            v-model="products.width"
          />
          <label for="width" class="admin-label">Depth</label>
          <input
            id="width"
            type="text"
            class="admin-input"
            v-model="products.depth"
          />

          <button class="admin-btn" @click="addProductsToServer" type="button">
            Add product
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      products: {
        img: "",
        title: "",
        price: "",
        descr: "",
        height: "",
        width: "",
        depth: "",
      },
    };
  },

  methods: {
    addProductsToServer() {
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(this.products),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));

      alert("Producrs is added!");
    },
  },
};
</script>

<style lang="scss" src="../../assets/scss/admin.scss" scoped></style>
