<template>
  <div>
    <div>{{ msg }}</div>
    <div>
      <button @click="doPostMessage">postMessage実行</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import handlerFunc from '@/utils/eventHandlers'

export default Vue.extend({
  data() {
    return {
      msg: '受信前',
    }
  },

  mounted() {
    window.addEventListener('message', handlerFunc)
    window.addEventListener('message', (e: MessageEvent) => {
      console.log("[Vue] vue's handler")
      this.msg = e.data.msg
    })
    // リロード時は一度だけブラウザがMessageEventを発行する？
  },

  methods: {
    doPostMessage() {
      console.log('message event emit!')
      window.postMessage({ id: 0, msg: 'Hello' }, '*')
    },
  },
})
</script>
