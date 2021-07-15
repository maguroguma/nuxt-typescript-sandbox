<template>
  <div>
    <h1>固定ページ</h1>
    <div>1つ目のrouteパラメータ: {{ first }}</div>
    <div>2つ目のrouteパラメータ: {{ second }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'fixedPage',

  computed: {
    first() {
      console.log(typeof this.$route.params.first)
      return this.$route.params.first
    },
    second() {
      console.log(typeof this.$route.params.second)
      return this.$route.params.second
    },
  },
})
</script>
