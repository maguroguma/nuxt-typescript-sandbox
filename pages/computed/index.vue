<template>
  <div>
    <h1>算出プロパティのあれこれ</h1>
    <div>プロフィール: {{ profile }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      name: 'index.vue',
      age: 0,
    }
  },

  computed: {
    profile() {
      console.log('profileの再計算')
      // @ts-ignore
      return `Name: ${this.name}, Age: ${this.age}`
    },
  },

  created() {
    console.log('created start')
    console.log('created end')
    // computedの計算はcreatedの後に行われる
  },

  mounted() {
    // computedの計算はmountedの前に行われる
    console.log('mounted start')
    console.log('mounted end')
  },
})
</script>
