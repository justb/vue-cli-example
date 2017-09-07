<template>
  <div>
    <ul class="list">
      <li v-for="(item,index) in lists" v-bind:key="index" v>{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      show: true,
      lists: [{ title: 111111111111111 }]
    }
  }
}
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
