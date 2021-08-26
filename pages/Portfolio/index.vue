<template>
  <section class="portfolio">
    <div class="columns">
      <Portfolio
        v-for="item in portfolio"
        :key="item.id"
        :title="item.title"
        :canonical="item.canonical"
        :description="item.description"
        :image="item.image"
        :images="item.process_images"
      ></Portfolio>
    </div>
  </section>
</template>
