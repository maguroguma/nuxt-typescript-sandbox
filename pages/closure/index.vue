<template>
  <div>
    <div>Age: {{ age }}</div>
    <div><button @click="callIncrement">Plus Age</button></div>
    <div>Name: {{ name }}</div>
    <div><button @click="callRepeat">Repeat Name</button></div>
    <div><button @click="incrementPageGlobalNumber">Increment Page Global Number(console)</button></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import generator, { ClosureType } from '@/utils/closure/util'

// VueRouterで遷移しても保持されるが、ブラウザのリロードなどで再度初期化される
let pageGlobalNumber = 0

export default Vue.extend({
  data() {
    return {
      age: 0,
      name: 'ABA',
      callIncrement: null as ClosureType | null,
      callRepeat: null as ClosureType | null,
    }
  },

  created() {
    this.callIncrement = generator(this.increment)
    this.callRepeat = generator(this.repeat)
  },

  methods: {
    increment(diff: number) {
      this.age += diff
    },
    repeat(n: number) {
      this.name = this.name.repeat(n)
    },
    incrementPageGlobalNumber() {
      pageGlobalNumber++
      console.log(`ページ内グローバル変数: ${pageGlobalNumber}`)
    },
  },
})
</script>
