import Vue from 'vue'
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControl,
  LPolyline,
  LIcon
} from 'vue2-leaflet'
import { Icon } from 'leaflet'

import '@/node_modules/leaflet/dist/leaflet.css'

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.component('LMap', LMap)
Vue.component('LTileLayer', LTileLayer)
Vue.component('LMarker', LMarker)
Vue.component('LPopup', LPopup)
Vue.component('LControl', LControl)
Vue.component('LIcon', LIcon)
Vue.component('LPolyline', LPolyline)
