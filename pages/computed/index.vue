<template>
  <div>
    <h1>算出プロパティのあれこれ</h1>
    <div>プロフィール: {{ profile }}</div>

    <div>
      <!-- 3回分関数が実行されてしまうため、引数を取るcomputedはmethodsと変わらない？ -->
      <div>選択中（算出プロパティ）: {{ selectedElm(selectedId) }}</div>
      <div>選択中（算出プロパティ）: {{ selectedElm(selectedId) }}</div>
      <div>選択中（メソッド）: {{ selectedElmByMethod(selectedId) }}</div>
      <div>選択中（メソッド）: {{ selectedElmByMethod(selectedId) }}</div>
      <select v-model="selectedId" :size="list.length">
        <option v-for="e in list" :key="e.id" :value="e.id">{{ e.name }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      name: 'index.vue',
      age: 0,
      list: [
        { id: 0, name: '0番目' },
        { id: 1, name: '1番目' },
        { id: 2, name: '2番目' },
      ],
      selectedId: -1,
    }
  },

  computed: {
    profile() {
      console.log('profileの再計算')
      // @ts-ignore
      return `Name: ${this.name}, Age: ${this.age}`
    },

    selectedElm() {
      return (id: number) => {
        console.log(`selectedElm(${id})の再計算`)
        return this.list.find((e) => e.id === id)
      }
    },
  },

  created() {
    console.log('created start')
    console.log('created end')
    // computedの計算はcreatedの後に行われる
  },

  mounted() {
    // computedの計算はmountedの前に行われる
    console.log('mounted start')
    console.log('mounted end')
  },

  methods: {
    selectedElmByMethod(id: number) {
      console.log(`selectedElmByMethod(${id})の再計算`)
      return this.list.find((e) => e.id === id)
    },
  },
})
</script>
