<template>
  <div>
    <!-- リアクティブになっていないため、初期値のまま変化しない -->
    <div>モジュール内グローバル変数: {{ computedModuleGN }}</div>
    <div>
      <button @click="incrementModuleGlobalNumberThroughModuleFunc">インクリメント</button>
    </div>
    <div>{{ computedLocalNum }}</div>
    <div>
      <button @click="incrementLocalNumber">インクリメント</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { moduleGlobalNumber, incrementModuleGlobalNumber } from '@/utils/closure/util'

export default Vue.extend({
  data() {
    return {
      localNumber: 0,
    }
  },

  computed: {
    computedModuleGN() {
      return moduleGlobalNumber // モジュール内変数などをリアクティブにすることは出来ない
    },
    computedLocalNum() {
      // @ts-ignore
      return `ページローカル算出プロパティ: ${this.localNumber}`
    },
  },

  methods: {
    incrementLocalNumber() {
      // @ts-ignore
      this.localNumber++
    },
    incrementModuleGlobalNumberThroughModuleFunc() {
      incrementModuleGlobalNumber()
      console.log(`モジュール内グローバル変数: ${moduleGlobalNumber}`)
    },
  },
})
</script>
