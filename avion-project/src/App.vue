<template>
  <div id="app">
    <header-page></header-page>
    <main-page></main-page>
  </div>
</template>

<script>
import HeaderPage from "./modules/header/Header-page.vue";
import MainPage from "./modules/main/Main-page.vue";
export default {
  components: { HeaderPage, MainPage },
};
</script>

<style lang="scss" src="@/assets/scss/global.scss"></style>
