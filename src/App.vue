<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/logo.png">
    <list mes-father="message from father" @valueUp="recieve"></list>
    <p>子组件传递过来的数据 {{childMes}}</p>
    <input v-model="question">
    <input v-model="name">
    <input v-model="firstName">
    <input v-model="lastName">
    <br>
    <input v-model="parentMsg">
    <div class="child">
      <slot text="hello from child"></slot>
    </div>
    <div class="parent">
        <child>
            <template slot-scope="props">
                <span>hello from parent</span>
                <span>{{ props.text }}</span>
            </template>
        </child>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['text'],
  data: function() {
    return {
      props:"",
      parentMsg: '',
      childMes: '',
      question: "",
      firstName: '',
      lastName: '',
      items: [{ text: 1 }, { text: 1 }, { text: 1 },]
    }
  },
  methods: {
    recieve: function(mes) { // recieve 事件需要设置参数，这些参数就是子组件传递过来的数据，因此，参数的个数，也要和子元素传递过来的一致。
      console.log(mes);
      this.childMes = mes;
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function() {
      // this.answer = 'Waiting for you to stop typing...'
      console.log(arguments)
    },
    abc: function() {
      // this.answer = 'Waiting for you to stop typing...'
      console.log(arguments)
    },
  },
  computed: {
    name: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
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
  /* margin-top: 60px; */
}
</style>
