<template>
  <div id="add-todo">
    <v-text-field v-model="content"></v-text-field>
    <v-btn @click="addAndReset">TODOの追加</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { todosStore } from '@/store'

export default Vue.extend({
  name: 'TodoAdd',

  data() {
    return {
      content: '',
    }
  },

  methods: {
    addAndReset() {
      todosStore.addTodoItem(this.content)
      this.content = ''
    },
  },
})
</script>
