<template>
  <transition-group appear name="slide">
    <div key="cv" class="buttons">
      <a href="https://represent.io/donnico/" class="button is-link" target="_blank">
        <b-icon icon="file" />
        <span>CV</span>
      </a>
      <a key="tw" href="https://twitter.com/DonNicoJs" class="button is-link" target="_blank">
        <b-icon icon="twitter" />
        <span>Twitter</span>
      </a>
      <a key="gh" href="https://github.com/DonNicoJs" class="button is-link" target="_blank">
        <b-icon icon="github-face" />
        <span>GitHub</span>
      </a>
      <a key="vl" href="https://github.com/KoRiGaN/Vue2Leaflet" class="button is-link" target="_blank">
        <b-icon icon="map" />
        <span>Vue2Leaflet</span>
      </a>
      <a key="xlsx" href="https://github.com/DonNicoJs/vue-xlsx" class="button is-link" target="_blank">
        <b-icon icon="table-large" />
        <span>Vue-XLSX</span>
      </a>
      <a key="vue-people" href="https://www.vuepeople.org/user/1/" class="button is-link" target="_blank">
        <b-icon icon="map-marker" />
        <span>VuePeople</span>
      </a>
    </div>
  </transition-group>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.slide-enter-active {
  transition: all 0.5s ease-in;
}

.slide-enter {
  transform: translate(-100%, 0);
}

.slide-enter-to {
  transform: translate(0, 0);
}
</style>
