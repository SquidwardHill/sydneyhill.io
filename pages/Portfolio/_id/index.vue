<template>
  <section class="has-padding-vertical">
    <div class="container ">
      <div class="columns">
        <div class="column is-three-quarters">
          <h1 class="is-size-3 is-strong">
            {{ portfolio.title }}
          </h1>
        </div>
        <div class="column">
          <nuxt-link
            to="/"
            class="button-close is-pulled-right has-gradient-sea-punch has-text-white-ter is-size-4">
            <i class="fas fa-times-circle"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- route params is a default paramater given to you by the vue router -->
    <section class="portfolio-item">
      <div class="container">
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
<style scoped>
/* styles here */
p {
  white-space: pre-line;
}

.button-close {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.portfolio-page-image {
  max-width: 550px;
  margin: 2rem 0;
}
@media screen and (min-width: 1408px) {
  .container {
    /* max-width: 1344px; */
    max-width: 1152px;
  }
}
</style>
