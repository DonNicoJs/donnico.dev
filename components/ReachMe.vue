<template>
  <div class="buttons">
    <transition-group appear name="slide">
      <a
        key="cv"
        href="https://represent.io/donnico/"
        class="button is-link"
        target="_blank"
      >
        <b-icon icon="file" class="is-marginless" />
        <span class="is-hidden-touch Label">CV</span>
      </a>
      <a
        key="tw"
        href="https://twitter.com/DonNicoJs"
        class="button is-link"
        target="_blank"
      >
        <b-icon icon="twitter" class="is-marginless" />
        <span class="is-hidden-touch Label">Twitter</span>
      </a>
      <a
        key="gh"
        href="https://github.com/DonNicoJs"
        class="button is-link"
        target="_blank"
      >
        <b-icon icon="github-face" class="is-marginless" />
        <span class="is-hidden-touch Label">GitHub</span>
      </a>
      <a
        key="vl"
        href="https://github.com/KoRiGaN/Vue2Leaflet"
        class="button is-link"
        target="_blank"
      >
        <b-icon icon="map" class="is-marginless" />
        <span class="is-hidden-touch Label">Vue2Leaflet</span>
      </a>
      <a
        key="xlsx"
        href="https://github.com/DonNicoJs/vue-xlsx"
        class="button is-link"
        target="_blank"
      >
        <b-icon icon="table-large" class="is-marginless" />
        <span class="is-hidden-touch Label">Vue-XLSX</span>
      </a>
      <a
        key="vue-people"
        href="https://www.vuepeople.org/user/1/"
        class="button is-link"
        target="_blank"
      >
        <b-icon icon="map-marker" class="is-marginless" />
        <span class="is-hidden-touch Label">VuePeople</span>
      </a>
    </transition-group>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.slide-enter-active {
  transition: all 0.5s ease-in;
}

.slide-enter {
  transform: translate(-100%, 0);
}

.slide-enter-to {
  transform: translate(0, 0);
}
.Label {
  margin-left: 0.8rem;
}
</style>
