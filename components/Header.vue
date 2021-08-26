<template>
  <section class="hero hero--mint is-large">
    <div class="nav nav--hero">
      <div class="nav__col">
          <nuxt-link to="/" class="nav__logo">
            <img class="logo" src="~/static/she.svg"/>
          </nuxt-link>
      </div>
      <div class="nav__col has-text-right">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="navbar__buttons">
              <a class="navbar-item" href="mailto:sydneyehill@gmail.com">
                Contact
              </a>
              <a class="navbar-item" href="https://dribbble.com/hillse" target="_blank">
                <i class="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__row">
      <div class="hero__col">
        <div class="hero__content">
          <h1 class="title mb-4">I'm Sydney</h1>
          <p class="subtitle mt-0 mb-6">
            I'm a Front End Designer and Developer, tinkerer, and creative being. Outside of work you can find me on the trails running or mountain biking with my friends, rock climbing, or drawing. <br/><br/>
            I'm in the process of revamping my portfolio, but you can check out some of my work below or on <a href="https://dribbble.com/hillse" target="_blank">Dribble</a>.
          </p>
          <a itemprop="url" class="btn btn--primary" v-on:click="scrollToElement({behavior: 'smooth'})">
            <span class="btn__text" >More.</span>
            <i class="btn__arrow"></i> 
            <div class="btn__shadow"></div>
          </a>
        </div>
      </div>
      <div class="hero__col">
        <div class="hero__image">
          <img src="~/static/sydney-hill-desktop.jpg" />
        </div>
      </div>
    </div>
    <div class="scroll scroll--down"></div>
  </section>
</template>

<script>
  export default {
    methods: {
      scrollToElement(options) {
        const el = document.getElementById('more');
        if (el) {
          el.scrollIntoView(options);
        }
    }
  }
}
</script>

<style scoped>
/* .hero {
  background-image: url('~@/static/funky-bg.png');
  background-position: 50% 50%;
} */
</style>
