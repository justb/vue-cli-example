// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/common.scss'
import './theme/index.css'
import list from '@/component/List'
import getValue from '@/component/getValue'
import carrousel from '@/component/swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.component('list',list)
Vue.component('getValue',getValue)
Vue.component('carrousel',carrousel)

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
