<template>
  <div>
    <h1>Masahiro Yokoyama's TodoList</h1>
    <todos-area></todos-area>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodosArea from '@/components/TodosArea.vue'

export default Vue.extend({
  name: 'App',

  components: {
    TodosArea,
  },
})
</script>
