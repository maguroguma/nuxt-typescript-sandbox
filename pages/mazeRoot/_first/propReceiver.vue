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
import Vue, { PropOptions } from 'vue'
// import Vue from 'vue'

export default Vue.extend({
  name: 'propReceiver',

  data() {
    return {
      first: '',
      second: '',
      pid: '',
      stringProp: '',
    }
  },

  props: {
    // numberprop: {
    //   type: Number,
    //   required: false,
    //   default: 111,
    // } as PropOptions<number>,
    // stringprop: {
    //   type: String,
    //   required: false,
    //   default: 'default prop value',
    // } as PropOptions<string>,

    // numberprop: {
    //   type: Number,
    //   default: 111,
    //   required: false,
    // },
  },

  computed: {
    // first() {
    //   console.log(typeof this.$route.params.first)
    //   return this.$route.params.first
    // },
    // second() {
    //   console.log(typeof this.$route.params.second)
    //   return this.$route.params.second
    // },
    // pid() {
    //   console.log(typeof this.$route.params.pid)
    //   return this.$route.params.pid
    // },
  },

  created() {
    this.first = this.getFirst()
    this.second = this.$route.params.second
    this.pid = this.getPid()
    // this.stringProp = this.$route.params.stringprop
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
  }
})
</script>
