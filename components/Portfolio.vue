<template>
  <div class="column is-one-third">
    <nuxt-link :to="'/portfolio/' + canonical">
      <article
        class="portfolio--item"
        :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
      >
        <div class="portfolio--item-content">
          <h4>{{ title }}</h4>
          <p>{{ description }}</p>
        </div>
      </article>
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
    backgroundImage: {
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
