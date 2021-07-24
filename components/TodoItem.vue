<template>
  <div>
    <v-text-field :value="content" @input="editContent" />

    <v-btn v-if="!isDone" @click="toggleIsDone(tid)" :id="'done-' + tid">
      完了
    </v-btn>
    <v-btn v-else @click="toggleIsDone(tid)" :id="'return-' + tid">戻す</v-btn>
    <v-btn @click="disappear(tid)" :id="'remove-' + tid">削除</v-btn>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { todosStore } from '@/store'

export default Vue.extend({
  name: 'TodoItem',

  props: {
    tid: {
      type: Number,
      required: true,
    } as PropOptions<number>,
  },

  computed: {
    // 双方向算出プロパティでも可能だが、今回はイベントを使った
    // content: {
    //   get() {
    //     return todosStore.getTodoItemById(this.tid).content
    //   },
    //   set(value: string) {
    //     todosStore.editContent(this.tid, value);
    //   }
    // },

    content() {
      return todosStore.getTodoItemById(this.tid).content
    },
    isDone() {
      return todosStore.getTodoItemById(this.tid).isDone
    },
    isDeleted() {
      return todosStore.getTodoItemById(this.tid).isDeleted
    },
  },

  methods: {
    editContent(e: any) {
      todosStore.editContent({ id: this.tid, content: e as string })
    },
    toggleIsDone(id: number) {
      todosStore.toggleIsDone(id)
    },
    disappear(id: number) {
      todosStore.removeTodo(id)
    },
  },
})
</script>
