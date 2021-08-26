<template>
  <section>
    <Header></Header>
    <section class="portfolio">
      <div class="container has-padding-vertical has-padding-horizontal-mobile">
        <div id="more" class="columns is-multiline">
          <Portfolio
            v-for="item in portfolio"
            :key="item.id"
            :title="item.title"
            :canonical="item.canonical"
            :description="item.description"
            :image="item.image"
          >
          </Portfolio>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Portfolio from '~/components/Portfolio.vue'

export default {
  components: {
    Header,
    Portfolio
  },
  data() {
    return {}
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio
    },
    notepad() {
      return this.$store.state.notepad
    },
    count() {
      return this.$store.state.count
    }
  }
}
</script>
<style>
/* .page-enter-active {
  animation: acrossIn 0.4s ease-out both;
}
.page-leave-active {
  animation: acrossOut 0.6s ease-in both;
}
@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
} */

.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
