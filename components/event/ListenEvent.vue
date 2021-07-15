<template>
  <div>
    <p>データ: {{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ListenEvent',

  data() {
    return {
      text: 'デフォルト',
    }
  },

  created() {
    this.$nuxt.$on('global-event', () => {
      this.text = 'Nuxtでグローバルイベントをキャッチ！'
    })
    this.$nuxt.$on('local-event', () => {
      this.text = 'Nuxtでローカルイベントをキャッチ'
    })
    this.$on('global-event', () => {
      this.text = 'グローバルイベントをキャッチ'
    })
    this.$on('local-event', () => {
      this.text = 'ローカルイベントをキャッチ！'
    })
  },
})
</script>
