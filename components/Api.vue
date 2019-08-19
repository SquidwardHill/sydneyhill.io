<template>
  <!-- <li>{{ friend }}</li> -->
  <p>{{ name }}</p>
</template>

<script>
// import axios from 'axios'

export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      friends: []
    }
  },
  mounted() {
    fetch('http://rest.learncode.academy/api/collection/test')
      .then(response => response.json())
      .then(data => {
        this.friends = data
      })
  }
}
</script>
