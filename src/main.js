// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/common.scss'
import './theme/index.css'
import carrousel from '@/component/swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import counter from './store/modules/counter.js'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync';


Vue.component('carrousel', carrousel)

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter
  }
})
sync(store, router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
