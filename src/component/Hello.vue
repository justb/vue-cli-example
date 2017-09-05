<template>
  <ul class="list">
    <todo-item v-for="item in lists" v-bind:todo="item" v-bind:key="item.title">{{item.title}}</todo-item>
  </ul>
</template>

<script>
import Vue from 'vue'
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.title }}</li>'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
