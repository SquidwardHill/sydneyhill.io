<template>
  <section>
    <Header></Header>
    <!-- <Counter></Counter> -->
    <Notepad></Notepad>
    <!-- Portfolio -->
    <section class="portfolio">
      <div class="container has-padding-vertical has-padding-horizontal-mobile">
        <div class="columns is-multiline">
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
    <div class="test">
      <Api v-for="friend in friends" :key="friend.id" :name="friend.name"></Api>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Notepad from '~/components/Notepad.vue'
import Api from '~/components/Api.vue'
import Portfolio from '~/components/Portfolio.vue'

export default {
  components: {
    Header,
    Notepad,
    Portfolio,
    Api
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

page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
