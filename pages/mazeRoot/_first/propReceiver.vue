<template>
  <div>
    <h1>propの受信テスト</h1>
    <div>1つ目のrouteパラメータ: {{ first }}</div>
    <div>2つ目のrouteパラメータ: {{ second }}</div>
    <div>3つ目のrouteパラメータ: {{ pid }}</div>

    <h2>propsの値</h2>
    <!-- <div>numberProp: {{ numberprop }}</div> -->
    <div>stringProp: {{ stringProp }}</div>
    <div>route params: {{ $route.params }}</div>
    <div>route query: {{ $route.query }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PropReceiver',

  data() {
    return {
      first: '',
      second: '',
      pid: '',
      stringProp: '',
    }
  },

  created() {
    this.first = this.getFirst()
    this.second = this.$route.params.second
    this.pid = this.getPid()
  },

  methods: {
    getFirst() {
      return this.$route.params.first
    },
    getSecond() {
      return this.$route.params.second
    },
    getPid() {
      return this.$route.params.pid
    },
  },
})
</script>
