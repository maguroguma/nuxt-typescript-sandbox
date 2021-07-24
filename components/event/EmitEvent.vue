<template>
  <div>
    <div>
      <button @click="emitGlobalEventByNuxt">Nuxtでグローバルイベントをemit</button>
    </div>
    <div>
      <button @click="emitLocalEventByNuxt">Nuxtでローカルイベントをemit</button>
    </div>
    <div>
      <button @click="emitGlobalEvent">グローバルイベントをemit</button>
    </div>
    <div>
      <button @click="emitLocalEvent">ローカルイベントをemit</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'EmitEvent',

  methods: {
    emitGlobalEventByNuxt() {
      this.$nuxt.$emit('global-event')
    },
    emitLocalEventByNuxt() {
      this.$nuxt.$emit('local-event')
    },
    emitGlobalEvent() {
      this.$emit('global-event')
    },
    emitLocalEvent() {
      this.$emit('local-event')
    },
  },
})
</script>
