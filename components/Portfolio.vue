<template>
  <div class="column is-half-tablet is-one-third-desktop  is-one-fourth-fullhd">
    <nuxt-link :to="'/portfolio/' + canonical">
      <!-- <article
        class="portfolio-item"
        :style="{ backgroundImage: 'url(' + portfolioImage + ')' }"
      ></article> -->
      <img class="portfolio-item-image" :src="image" />
      <div class="portfolio-item-content">
        <h4 class="is-size-6">
          <strong>{{ title }}</strong>
        </h4>
        <p>{{ description }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    canonical: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    subhead: {
      type: String,
      default: ''
    },
    heroText: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
