<template>
  <div id="todos-area">
    <h2>新しいTODO</h2>
    <todo-add></todo-add>

    <h2>TODOリスト</h2>
    <div id="todo-list">
      <todo-item
        v-for="id in inProgTodosIds"
        :key="id"
        :tid="id"
        :id="'item-' + id"
      ></todo-item>
    </div>

    <h2>完了したTODOリスト</h2>
    <div id="done-list">
      <todo-item
        v-for="id in doneTodosIds"
        :key="id"
        :tid="id"
        :id="'item-' + id"
      ></todo-item>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoAdd from '@/components/TodoAdd.vue'
import { todosStore } from '@/store'

export default Vue.extend({
  name: 'TodosArea',

  components: {
    TodoItem,
    TodoAdd,
  },

  computed: {
    inProgTodosIds() {
      return todosStore.inProgTodosIds
    },
    doneTodosIds() {
      return todosStore.doneTodosIds
    },
  },
})
</script>
