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
        <a href="" class="header-logo">Avion</a>
        <nav class="nav">
          <ul class="nav-menu">
            <li class="nav-menu__items">
              <img
                class="nav-menu__search"
                src="@/assets/icons/Shopping--cart.svg"
                alt=""
              />
            </li>
            <li class="nav-menu__items">
              <img
                class="nav-menu__search"
                src="@/assets/icons/User--avatar.svg"
                alt=""
              />
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-scnd">
        <nav class="nav-scnd">
          <ul class="nav-scnd-menu">
            <li class="nav-scnd-menu__item">
              <router-link to="/" href class="nav-menu__item"
                >Plant pots</router-link
              >
            </li>
            <li class="nav-scnd-menu__item">
              <router-link to="/" class="nav-menu__item">Ceramics</router-link>
            </li>
            <li class="nav-scnd-menu__item">
              <router-link to="/" class="nav-menu__item">Tables</router-link>
            </li>
            <li class="nav-scnd-menu__item">
              <router-link to="/" class="nav-menu__item">Chairs</router-link>
            </li>
            <li class="nav-scnd-menu__item">
              <router-link to="/" class="nav-menu__item">
                Crockery
              </router-link>
            </li>
            <li class="nav-scnd-menu__item">
              <router-link to="/" class="nav-menu__item">Tableware</router-link>
            </li>
            <li class="nav-scnd-menu__item">
              <router-link to="/" class="nav-menu__item">Cutlery</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" src="../../assets/scss/header.scss" scoped></style>
