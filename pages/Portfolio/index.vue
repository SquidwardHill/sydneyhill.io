<template>
  <!-- Portfolio -->
  <section class="portfolio">
    <div class="columns">
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
</template>
