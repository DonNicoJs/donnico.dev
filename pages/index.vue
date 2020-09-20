<template>
  <div class="hero is-fullheight">
    <div class="hero-body is-marginless is-paddingless is-flex-column">
      <welcome-logo />
      <div class="MapContainer is-flex-column">
        <no-ssr>
          <l-map
            ref="map"
            :style="{flex: 1}"
            :zoom="zoom"
            :center="center"
          >
            <l-control>
              <div class="Navigation">
                <don-logo />
                <div v-for="(button) in markers" :key="'b' + button.id" class="ButtonContainer">
                  <b-tooltip
                    :label="button.name"
                    type="is-light"
                    position="is-left"
                  >
                    <marker-button transition="slide" :button="button" :action="flyTo" />
                  </b-tooltip>
                </div>
              </div>
            </l-control>
            <l-control position="bottomleft">
              <reach-me />
            </l-control>
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker v-for="(marker) in markers" :key="'m' + marker.id" ref="markers" :lat-lng="marker.coords" @update:latLng="log">
              <l-icon :popup-anchor="[10,0]">
                <marker-button :button="marker" />
              </l-icon>
              <l-popup>
                <h4 class="subtitle">
                  {{ marker.name }}
                </h4>
                <blockquote class="content">
                  {{ marker.description }}
                </blockquote>
              </l-popup>
            </l-marker>
          </l-map>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import DonLogo from '@/components/DonLogo'
import WelcomeLogo from '@/components/WelcomeLogo'
import MarkerButton from '@/components/MarkerButton'
import ReachMe from '@/components/ReachMe'

import PuliIcon from '@/assets/images/PuliIcon.png'

export default {
  name: 'HomePage',

  components: { DonLogo, WelcomeLogo, MarkerButton, ReachMe },
  data() {
    return {
      url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png',
      attribution:
        '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
      zoom: 7,
      center: [43.919658762067655, 16.40241622924805],
      markers: [
        {
          name: 'Birthplace',
          id: 1,
          icon: 'baby-buggy',
          type: 'is-primary',
          coords: [43.3386996, 12.8907421],
          description:
            "I was born in this tiny city in the center of Italy in the distant 1988... it was a windy and rainy day. I can remember it as if it was now.. Wait what? I can't remember it at all!"
        },
        {
          name: 'University',
          id: 2,
          icon: 'school',
          type: 'is-primary',
          coords: [41.98402617126427, 12.653760910034181],
          description:
            'This is where I completed my studies in Computer Science, I always knew that I wanted to study it, but little did I knew how hard is Calculus 8 ( I am not exagerating at all 😛)'
        },
        {
          name: 'Sinergie',
          id: 3,
          icon: 'flower',
          type: 'is-primary',
          coords: [41.7660815, 12.4724878],
          description:
            'Oh, my first workplace, hours and hours spent on backoffices and e-commerce... My first JQuery Callback-hell! Sweet ( not at all ) memories'
        },
        {
          name: 'MyHospital',
          id: 4,
          icon: 'android',
          type: 'is-primary',
          coords: [40.6747384, 14.7576368],
          description:
            'It was during the rising of cordova that I started working as ios / android hybrid developer, I probably can recite Ionic 1.x documentation by heart'
        },
        {
          name: 'Chemaxon',
          id: 5,
          icon: 'chemical-weapon',
          type: 'is-primary',
          coords: [47.66160109191127, 18.96952629089356],
          description:
            'In search of new experiences I moved to Hungary, where a huge AngularJS + React codebase was waiting for me, it was not a long love but totally an intense one'
        },
        {
          name: 'Pulilab',
          id: 6,
          src: PuliIcon,
          coords: [47.34301034806174, 19.19547557830811],
          description:
            'My current workplace, totally utterly amazing, did I say amazing? Yeah I did I DID right? Jokes aside, here VueJs is my bread and butter since 2.5 years'
        },
        {
          name: 'Amsterdam VueJs',
          id: 7,
          icon: 'vuejs',
          type: 'is-primary',
          coords: [52.3546274, 4.8285839],
          description:
            'The first Vuejs conf was inspiring, and the second one even more, here is where my desire of doing open source exploded and became reality'
        }
      ]
    }
  },
  computed: {
    polylines() {
      const result = []
      this.markers.forEach((current, index) => {
        const next = this.markers[index + 1]
        if (current && next) {
          result.push({
            latlngs: [[...current.coords], [...next.coords]],
            color: 'green'
          })
        }
      })
      return result
    }
  },
  methods: {
    log(arg) {
      // eslint-disable-next-line no-console
      console.log(arg)
    },
    flyTo({ coords }) {
      const marker = this.$refs.markers.find(
        m => m.latLng[0] === coords[0] && m.latLng[1] === coords[1]
      )
      this.$refs.map.mapObject.flyTo(coords, 10)
      if (marker && marker.mapObject) {
        marker.mapObject.openPopup(coords)
      }
    }
  }
}
</script>

<style lang="less">
.is-flex-column {
  flex-direction: column;
}
.MapContainer {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  width: 100%;
  height: 100%;
  display: flex;
}
.Navigation {
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  width: 64px;
  justify-content: space-evenly;

  .ButtonContainer {
    width: 36px;
  }
}
</style>
