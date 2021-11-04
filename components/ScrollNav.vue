<template>
  <scrollactive
    active-class="active"
    :offset="80"
    :duration="800"
    bezier-easing-value=".5,0,.35,1"
  >
    <a href="#home" class="scrollactive-item">Home</a>
    <a href="#about-us" class="scrollactive-item">About Us</a>
    <a href="#portfolio" class="scrollactive-item">Portfolio</a>
    <a href="#contact" class="scrollactive-item">Contact</a>
  </scrollactive>
</template>

<style>
.active {
  text-decoration: underline;
}
.scrollactive-nav {
  position: fixed;
  z-index: 10;
  width: 100%;
  background: yellow;
}
</style>
<script>
export default {
  methods: {
    onItemChanged(event, currentItem, lastActiveItem) {
      // here you have access to everything you need regarding that event
    }
  },
  options: {
    /**
     * Active class that will be applied to the active item.
     */
    activeClass: {
      type: String,
      default: 'is-active'
    },

    /**
     * Amount of space between top of screen and the section to highlight. (Usually your fixed
     * header's height).
     */
    offset: {
      type: Number,
      default: 20
    },

    /**
     * Amount of space between the top of the screen and the section to highlight when clicking a
     * scrollactive item to scroll. It will use the value of the `offset` prop if none is provided
     * here. Useful when you want to use the `offset` prop to make an item be active as soon as
     * it shows on the screen but still scroll to the top of the section when clicking the item.
     */
    scrollOffset: {
      type: Number,
      default: null
    },

    /**
     * The selector string of the scroll container element you'd like to use. It defaults to the
     * window object (most common), but you might want to change in case you're using an element
     * as container with overflow.
     */
    scrollContainerSelector: {
      type: String,
      default: ''
    },

    /**
     * Enables/disables the scrolling when clicking in a menu item.
     * Disable if you'd like to handle the scrolling by your own.
     */
    clickToScroll: {
      type: Boolean,
      default: true
    },

    /**
     * The duration of the scroll animation when clicking to scroll is activated.
     */
    duration: {
      type: Number,
      default: 600
    },

    /**
     * Defines if the plugin should track the section change when clicking an item to scroll to
     * its section. If set to true, it will always keep track and change the active class to the
     * current section while scrolling, if false, the active class will be immediately applied to
     * the clicked menu item, ignoring the passed sections until the scrolling is over.
     */
    alwaysTrack: {
      type: Boolean,
      default: false
    },

    /**
     * Your custom easing value for the click to scroll functionality.
     * It must be a string with 4 values separated by commas in a cubic bezier format.
     */
    bezierEasingValue: {
      type: String,
      default: '.5,0,.35,1'
    },

    /**
     * Decides if the URL should be modified with the section id when clicking a scrollactive
     * item.
     */
    modifyUrl: {
      type: Boolean,
      default: true
    },

    /**
     * If true the active class will only be applied when a section matches exactly one of the
     * scrollactive items, meaning it will be highlighted when scrolling exactly inside the
     * section. If false (default) it will always highlight the last item which was matched
     * in a section, even if it is already outside that section (and not inside another that's
     * being tracked).
     */
    exact: {
      type: Boolean,
      default: false
    },

    /**
     * If true the active class will be applied to the first scrollactive-item before you scroll
     * past it (even if you didn't reach it yet).
     */
    highlightFirstItem: {
      type: Boolean,
      default: false
    },

    /**
     * Changes the scrollactive container component html tag.
     */
    tag: {
      type: String,
      default: 'nav'
    },

    /**
     * If true the screen will scroll down to the element in the URL when the component is mounted.
     */
    scrollOnStart: {
      type: Boolean,
      default: true
    }
  }
}
</script>
