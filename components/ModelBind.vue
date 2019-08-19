<template>
  <section class="spotify">
    <div class="columns">
      <div class="column is-three-fifths">
        <p>Seaching for: {{ song }} by {{ artist }}</p>
      </div>
      <div class="column is-one-fifth">
        <p>Search song</p>
        <input v-model="song" />
      </div>
      <div class="column is-one-fifth">
        <p>Search artist</p>
        <input v-model="artist" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    song: {
      type: String,
      default: 'Marinade'
    },
    artist: {
      type: String,
      default: 'Dope Lemon'
    }
  }
}
</script>
