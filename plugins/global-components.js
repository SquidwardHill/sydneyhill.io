// plugins/bl-components.js

import Vue from 'vue'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Tagline from '@/components/Tagline'

const globalComponents = { Nav, Footer, Tagline }

Object.entries(globalComponents).forEach(([name, component]) => {
  Vue.component(name, component)
})

// nuxt.config.js
export default {
  plugins: ['~plugins/global-components']
}
