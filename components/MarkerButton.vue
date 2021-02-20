<template>
  <transition appear :name="transition">
    <button class="button FixedSize" @click.stop.prevent="action(button)">
      <b-icon
        v-if="!button.src"
        :type="button.type"
        :icon="button.icon"
        size="is-medium"
      />
      <figure v-else class="image is-32x32">
        <img class="ButtonImage" :src="button.src">
      </figure>
    </button>
  </transition>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      required: true
    },
    action: {
      type: Function,
      default: () => {}
    },
    transition: {
      type: String,
      default: 'bounce'
    }
  }
}
</script>

<style lang="less">
.FixedSize {
  width: 36px;
  height: 36px;
  padding: 0;
  margin-bottom: 1vh;
}

.ButtonImage {
  width: 32px;
  height: 32px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.slide-enter-active {
  transition: all 0.5s ease-in;
}

.slide-enter {
  transform: translate(100%, 0);
}

.slide-enter-to {
  transform: translate(0, 0);
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>
