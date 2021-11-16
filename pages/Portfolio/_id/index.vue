<template>
  <section class="has-padding-vertical portfolio__inner">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column is-three-quarters">
          <h1 class="is-size-3 is-strong">
            {{ portfolio.title }}
          </h1>
        </div>
        <div class="column column has-text-right">
          <nuxt-link
            to="/"
            class="button--close">
            <i class="fas fa-times-circle"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- route params is a default paramater given to you by the vue router -->
    <section class="portfolio-item">
      <div class="container  is-max-desktop">
        <br />
        <p>{{ portfolio.description }}</p>
        <img :src="portfolio.image" class="portfolio-page-image" />
        <br />
        <h5 class="is-size-6 is-strong">Project Goals</h5>
        <p>{{ portfolio.goal }}</p>
        <br />
        <h5 class="is-size-6 is-strong">Process</h5>
        <p>{{ portfolio.process }}</p>
        <br/>
        <div v-for="(image, imageIndex) in portfolio.processImages">
            <p class="mt-6 mb-3"><em>{{image.description}}</em></p>
            <img :src="image.image" class="process__image" :key="imageIndex" />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio.filter(
        f => f.canonical === this.$route.params.id
        // return the paramaters from the route (filter where the canonical value matches the route paramater)
      )[0]
    }
  }
}
</script>
