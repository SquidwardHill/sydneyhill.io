<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    data-theme=""
  >
    <div class="container">
      <div class="">
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
            <a href="https://github.com/SquidwardHill" target="_blank"
              ><img src="@/static/logos/github-brands.svg"
            /></a>
            <a href="https://www.linkedin.com/in/sydneyehill/" target="_blank"
              ><img src="@/static/logos/linkedin-in-brands.svg"
            /></a>
            <a href="mailto:sydneyehill@gmail.com"
              ><img src="@/static/logos/paper-plane-solid.svg"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
