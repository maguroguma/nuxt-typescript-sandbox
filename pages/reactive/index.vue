<template>
  <div>
    <h1>numberプリミティブのリストレンダリング</h1>
    <button @click="pushPrimitive">push</button>
    <div v-for="(e, idx) in primitiveArray" :key="idx">
      <span>value: {{ e }}</span>
      <button @click="incrementPrimitiveElm(idx)">increment</button>
    </div>

    <h1>ラッパーオブジェクトのリストレンダリング</h1>
    <button @click="pushObject">push</button>
    <div v-for="(ob, idx) in objectArray" :key="idx">
      <span>value: {{ ob.val }}</span>
      <button @click="incrementObjectElm(idx)">increment</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface ObjType {
  val: number
}

export default Vue.extend({
  data() {
    return {
      primitiveArray: [0, 0, 0],
      objectArray: [{ val: 0 }, { val: 0 }, { val: 0 }] as ObjType[],
    }
  },

  methods: {
    incrementPrimitiveElm(i: number): void {
      this.primitiveArray[i]++
    },
    incrementObjectElm(i: number): void {
      this.objectArray[i].val++
    },
    pushPrimitive(): void {
      this.primitiveArray.push(0)
    },
    pushObject(): void {
      this.objectArray.push({ val: 0 })
    },
  },
})
</script>
