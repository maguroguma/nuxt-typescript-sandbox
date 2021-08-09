<template>
  <div>
    <h1>Routing Maze</h1>
    <nuxt-link to="/mazeRoot/xxx/fixed/100/fixedPage">固定ページ1</nuxt-link>
    <nuxt-link to="/mazeRoot/yyy/fixed/200/fixedPage">固定ページ2</nuxt-link>
    <nuxt-link to="/mazeRoot/zzz/fixed/300/fixedPage">固定ページ3</nuxt-link>
    <nuxt-link to="/mazeRoot/xxx/fixed/100/math">動的ページ1</nuxt-link>
    <nuxt-link to="/mazeRoot/yyy/fixed/200/english">動的ページ2</nuxt-link>
    <nuxt-link to="/mazeRoot/zzz/fixed/300/science">動的ページ3</nuxt-link>

    <div>
      <button @click="move()">正しい移動</button>
    </div>
    <div>
      <button @click="wrongMove()">間違った移動</button>
    </div>
    <div>
      <button @click="propMove()">Propを渡しながら移動</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Maze',

  methods: {
    async move() {
      console.log('on!')
      const r = await this.$router.push('/mazeRoot/koreha/fixed/program/karakimashita')
      console.log(r)
      console.log('end...')
    },
    async wrongMove() {
      console.log('on!')
      const r = await this.$router.push('/none')
      console.log(r)
      console.log('end...')
    },
    async propMove() {
      console.log('on!')
      const r = await this.$router.push({
        path: '/mazeRoot/xxx/propReceiver',
        params: {
          // numberprop: 222,
          stringprop: '!!!!!!!',
        },
        query: {
          numberprop: '222',
        },
      })
      console.log(r)
      console.log('end...')
    },
  },
})
</script>
