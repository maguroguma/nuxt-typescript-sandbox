<template>
  <div>
    <div>プリミティブ値: {{ compCounter }}</div>
    <div>プリミティブ値: {{ compCounter }}</div>
    <div><button @click="domainObject.resetCounter()">クリア</button></div>
    <div><button @click="domainObject.incrementCounter()">インクリメント</button></div>
    <hr />
    <div>プリミティブ配列: {{ compPrimitiveArray }}</div>
    <div>プリミティブ配列: {{ compPrimitiveArray }}</div>
    <div><button @click="domainObject.clearPrimitiveArray()">クリア</button></div>
    <div><button @click="domainObject.addPrimitive()">追加</button></div>
    <hr />
    <div>オブジェクト配列: {{ compObjectArray }}</div>
    <div>オブジェクト配列: {{ compObjectArray }}</div>
    <div><button @click="domainObject.clearObjectArray()">クリア</button></div>
    <div><button @click="domainObject.addObject()">追加</button></div>
    <hr />
    <div>data: {{ domainObject }}</div>
    <hr />
    <div>外部カウンター: {{ compOuterCounter }}</div>
    <div><button @click="incrementOuter">インクリメント</button></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DomainObject from '@/utils/DomainObject'

let outerCounter = 0

export default Vue.extend({
  data() {
    return {
      domainObject: null as DomainObject | null,
    }
  },

  computed: {
    compCounter() {
      // @ts-ignore
      return this.domainObject!.counter
    },
    compPrimitiveArray() {
      // @ts-ignore
      return this.domainObject!.primitiveArray
    },
    compObjectArray() {
      // @ts-ignore
      return this.domainObject!.objectArray
    },
    // 外部変数を算出プロパティに
    compOuterCounter() {
      return outerCounter
    },
  },

  created() {
    this.domainObject = new DomainObject()
  },

  methods: {
    incrementOuter() {
      outerCounter++
      console.log(outerCounter)
    },
  },
})
</script>
