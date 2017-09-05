<template>
  <div class="hello">
    <!-- 添加一个input输入框 添加keypress事件-->
    <input type="text" v-model="inputValue" @change="enter">
    <p>{{mesFather}}</p>
  </div>
</template>

<script>
export default {
  props: ['mesFather'],

  // 添加data, 用户输入绑定到inputValue变量，从而获取用户输入
  data: function() {
    return {
      inputValue: ''
    }
  },
  methods: {
    enter() {
      this.$emit("valueUp", this.inputValue)
      //子组件发射自定义事件valueUp, 并携带要传递给父组件的值，
      // 如果要传递给父组件很多值，这些值要作为参数依次列出 如 this.$emit('valueUp', this.inputValue, this.mesFather); 
    },
  }
}
</script>