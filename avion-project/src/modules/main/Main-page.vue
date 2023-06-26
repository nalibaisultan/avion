<template>
  <main class="main">
    <section class="hero">
      <div class="container">
        <div class="hero-wrapper">
          <h1 class="hero-title">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p class="hero-text">Shop the new Spring 2022 collection today</p>
          <button class="hero-btn">View collection</button>
        </div>
      </div>
    </section>

    <main-components></main-components>
    <main-gallery></main-gallery>
    <main-idea></main-idea>
  </main>
</template>

<script>
import MainComponents from "./components/Main-components.vue";
import MainGallery from "./components/Main-gallery.vue";
import MainIdea from "./components//Main-idea.vue";
export default { components: { MainComponents, MainGallery, MainIdea } };
</script>

<style lang="scss" src="@/assets/scss/main.scss" scoped></style>
