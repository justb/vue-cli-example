<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/logo.png">
    <list mes-father="message from father" @valueUp="recieve"></list>
    <p>子组件传递过来的数据 {{childMes}}</p>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      childMes: '',
      
    }
  },
  methods: {
    recieve: function(mes) { // recieve 事件需要设置参数，这些参数就是子组件传递过来的数据，因此，参数的个数，也要和子元素传递过来的一致。
      console.log(mes);
      this.childMes = mes;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
