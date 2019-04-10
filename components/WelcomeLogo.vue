<template>
  <transition name="disappear">
    <div v-show="showLogo" class="WelcomeLogo">
      <transition name="bounce" @after-enter="showBowtie = true">
        <figure v-show="initialised" class="image is-128x128">
          <img src="@/assets/images/VueJS.png">
        </figure>
      </transition>
      <transition name="bounce" @after-enter="hideLogo">
        <figure v-show="showBowtie" class="Bowtie image is-128x128">
          <img src="@/assets/images/Bowtie.png">
        </figure>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      initialised: false,
      showLogo: true,
      showBowtie: false
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initialised = true
  },
  methods: {
    hideLogo() {
      window.setTimeout(() => {
        this.showLogo = false
      }, 1000)
    }
  }
}
</script>

<style lang="less">
.WelcomeLogo {
  position: fixed;
  z-index: 2000;
  transform: translate(25%, calc(50vh - 50%)) scale(4);

  .Bowtie {
    position: absolute;
    top: 35%;
    transform: scale(0.8);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.disappear-leave-active {
  transition: all 0.5s ease-out;
}

.disappear-leave {
  opacity: 1;
}

.disappear-leave-to {
  opacity: 0;
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
