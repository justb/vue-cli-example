import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/component/Hello'
import hello2 from '@/component/hello2'
// import list from '@/component/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: hello2
    },
    {
      path: '/1',
      name: 'hello2',
      component: Hello
    }
  ]
})
