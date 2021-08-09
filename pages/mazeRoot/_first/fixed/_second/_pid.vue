<template>
  <div>
    <h1>動的ページ</h1>
    <div>1つ目のrouteパラメータ: {{ first }}</div>
    <div>2つ目のrouteパラメータ: {{ second }}</div>
    <div>3つ目のrouteパラメータ: {{ pid }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Pid',

  computed: {
    first() {
      console.log(typeof this.$route.params.first)
      return this.$route.params.first
    },
    second() {
      console.log(typeof this.$route.params.second)
      return this.$route.params.second
    },
    pid() {
      console.log(typeof this.$route.params.pid)
      return this.$route.params.pid
    },
  },
})
</script>
