<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-container">
        <div class="header-search">
          <ul class="nav-menu">
            <li class="nav-menu__items">
              <img
                class="nav-menu__search"
                src="@/assets/icons/Search.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
        <router-link to="/" class="header-logo">Avion</router-link>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu__items">
              <router-link to="/basket" class="nav-menu__count">
                <img
                  class="nav-menu__search"
                  src="@/assets/icons/Shopping--cart.svg"
                  alt=""
                />&nbsp;{{ basketCount }}</router-link
              >
            </li>
            <li class="nav-menu__items">
              <router-link to="/admin">
                <img
                  class="nav-menu__search"
                  src="@/assets/icons/User--avatar.svg"
                  alt=""
                />
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-scnd">
        <nav class="nav-scnd">
          <ul class="nav-scnd-menu">
            <li class="nav-scnd-menu__item">Plant pots</li>
            <li class="nav-scnd-menu__item">Ceramics</li>
            <li class="nav-scnd-menu__item">Tables</li>
            <li class="nav-scnd-menu__item">Chairs</li>
            <li class="nav-scnd-menu__item">Crockery</li>
            <li class="nav-scnd-menu__item">Tableware</li>
            <li class="nav-scnd-menu__item">Cutlery</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    basketCount() {
      return this.$store.getters.getBasketCount;
    },
  },
};
</script>

<style lang="scss" src="../../assets/scss/header.scss" scoped></style>
