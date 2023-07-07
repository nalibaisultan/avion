<template>
  <div id="app">
    <header-page></header-page>
    <router-view></router-view>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from "./modules/header/Header-page.vue";
import FooterPage from "./modules/footer/Footer-page.vue";
export default {
  components: { HeaderPage, FooterPage },
};
</script>

<style lang="scss" src="@/assets/scss/global.scss"></style>
