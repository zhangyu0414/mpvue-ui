<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>Vuex counter：{{ count + 2 }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="handleClick">点我啊1111111</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import { mapState, mapMutations } from 'vuex'
import { TEST } from '../../store/mutation-types'
export default {
  computed: {
    ...mapState([
      'test'
    ]),
    count () {
      return store.state.count
    }
  },
  methods: {
    ...mapMutations([
      TEST
    ]),
    handleClick () {
      this[TEST](Math.random())
      console.log(this.test)
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}

</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
