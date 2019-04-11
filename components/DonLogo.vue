<template>
  <transition appear name="go-to-center">
    <b-tooltip :active="showTooltip" position="is-left" multilined always label="This is the map of my milestones, feel free to click around and discover all the major markers in my life up untill now!">
      <figure class="image is-64x64" @click.prevent.stop="showTooltip =! showTooltip">
        <img src="@/assets/images/DonVue.png">
      </figure>
    </b-tooltip>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showTooltip: false
    }
  },
  mounted() {
    window.addEventListener('click', this.hideTooltip)
    window.setTimeout(() => {
      this.showTooltip = true
    }, 2000)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideTooltip)
  },
  methods: {
    hideTooltip() {
      this.showTooltip = false
    }
  }
}
</script>

<style lang="less">
.go-to-center-enter-active {
  transition: all 0.5s ease;
}

.go-to-center-enter {
  transform: scale(0);
  opacity: 0;
}
.go-to-center-enter-to {
  transform: translate(0, 0), scale(1);
  opacity: 1;
}
</style>
