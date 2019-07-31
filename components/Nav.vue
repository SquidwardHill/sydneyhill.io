<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    data-theme="navbar-dark"
  >
    <div class="container">
      <div class="navbar-brand">
        <!-- navbar items, navbar burger... -->
        <nuxt-link to="/" class="navbar-item has-text-white-bis"
          ><img class="logo" src="~/static/sydney-hill-script.svg"
        /></nuxt-link>
      </div>
      <div class="navbar-menu ">
        <!-- navbar start, navbar end -->
        <!-- <div class="navbar-end">
          <nuxt-link to="/portfolio" class="navbar-item">Portfolio</nuxt-link>
          <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
          <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
          <nuxt-link to="/contact" class="navbar-item"
            >Shits & Giggles</nuxt-link
          >
        </div> -->
        <div class="navbar-end">
          <div class="brand-logos level">
            <a href="https://github.com/SquidwardHill" target="_blank"
              ><img src="@/static/logos/github-brands.svg"
            /></a>
            <a href="https://www.linkedin.com/in/sydneyehill/" target="_blank"
              ><img src="@/static/logos/linkedin-in-brands.svg"
            /></a>
            <a href="@mail-to:sydneyehill@gmail.com"
              ><img src="@/static/logos/paper-plane-solid.svg"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav {
  background-color: #374a67;
  color: #8f97a3;
}
a {
  color: #a7afbb;
}
.logo {
  max-height: 24px;
}
.brand-logos img {
  max-width: 24px;
  margin: 0 7px;
  transition: 0.1s ease;
}
.brand-logos img:hover {
  transform: scale(1.2);
  transition: 0.1s ease;
}
</style>
