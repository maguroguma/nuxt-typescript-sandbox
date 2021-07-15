<template>
  <div>
    <listen-event />
    <emit-event />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListenEvent from '@/components/event/ListenEvent.vue'
import EmitEvent from '@/components/event/EmitEvent.vue'

export default Vue.extend({
  components: {
    ListenEvent, EmitEvent,
  }
})
</script>
