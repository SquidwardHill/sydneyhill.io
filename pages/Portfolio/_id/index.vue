<template>
  <!-- route params is a default paramater given to you by the vue router -->
  <section class="portfolio-item">
    <div class="container">
      <p><strong>route:</strong> {{ $route.params.id }}</p>
      <h1>{{ portfolio.title }}</h1>
      <img src="" alt="" />
      <p>{{ portfolio.description }}</p>
    </div>
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
        // return the paramaters from the route
      )[0]
    }
  }
}
</script>
<style scoped>
/* styles here */
</style>
