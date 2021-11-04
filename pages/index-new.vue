<template>
  <section>
    <ScrollNav />
    <div class="container">
      <div class="columns">
        <div class="column half--noscroll">
          Hi im sydney
        </div>
        <div class="column half--scroll">
          <div class="portfolio">
            <section id="home" class="portfolio__section">
              home
            </section>
            <section id="about-us" class="portfolio__section">
              sec 2
            </section>
            <section id="portfolio" class="portfolio__section">
              sec3
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Portfolio from '~/components/Portfolio.vue'
import ScrollNav from '~/components/ScrollNav.vue'

export default {
  components: {
    Header,
    Portfolio,
    ScrollNav
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
.portfolio__section {
  height: 80vh;
}
.half--scroll {
  overflow-y: auto;
}
.half--noscroll {
  overflow-y: none;
}
.container {
  overflow-y: none;
}

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
