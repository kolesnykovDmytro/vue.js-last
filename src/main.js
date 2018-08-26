// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import VueAgile from './../node_modules/vue-agile'

import FaceBook from '../node_modules/vue-material-design-icons/Facebook.vue'
import Instagram from '../node_modules/vue-material-design-icons/Instagram.vue'
import Arrow from '../node_modules/vue-material-design-icons/ArrowLeft.vue'
import '../node_modules/vue-material-design-icons/styles.css'

Vue.component('facebook', FaceBook)
Vue.component('instagram', Instagram)
Vue.component('arrow-left', Arrow)
Vue.use(VueAgile)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  data: {
    open: false
  },
  methods: {
    hideModal () {
      this.open = false
    }
  }
})
