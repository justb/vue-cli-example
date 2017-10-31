<template>
  <div>
    <!-- Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div> -->
    <div>{{fooCount}}</div>
    <button @click="inc()">Increment async</button>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
// export default {
//   computed: mapGetters([
//     'count',
//     'recentHistory'
//   ]),
//   // methods: mapActions([
//   //   'increment',
//   //   'decrement',
//   //   'incrementIfOdd',
//   //   'incrementAsync'
//   // ])
//   methods:{
//     increment(){
//       console.log(this.$store.state)
//       this.$store.dispatch('increment')
//     }
//   }
// }

// import fooStoreModule from "../store/counter";

export default {
  // 重要信息：当多次访问路由时，
  // 避免在客户端重复注册模块。
  destroyed() {
    this.$store.unregisterModule("foo");
  },
  computed: {
    fooCount() {
      return this.$store.state.counter.count;
    }
  },
  // beforeCreate(store) {
  //   console.log(store);
  //   store.registerModule("foo", fooStoreModule);
  // },
  methods: {
    inc() {
      console.log(this.$store)
      this.$store.dispatch('counter/inc')
    }
  }
};
</script>