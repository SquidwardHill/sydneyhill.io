<template>
  <section class="container">
    <Header></Header>
    <!-- <Counter></Counter> -->
    <Notepad></Notepad>
    <!-- Portfolio -->
    <section class="portfolio">
      <div class="columns is-multiline">
        <Portfolio
          v-for="item in portfolio"
          :key="item.id"
          :title="item.title"
          :canonical="item.canonical"
          :description="item.description"
        >
        </Portfolio>
      </div>
    </section>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import Notepad from '~/components/Notepad.vue'
import Portfolio from '~/components/Portfolio.vue'

export default {
  components: {
    Header,
    Notepad,
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
<style></style>
