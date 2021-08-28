<template>
  <div>
    <h1>VueのThisの挙動</h1>

    <div>vueLocalNumber: {{ vueLocalNumber }}</div>
    <div>vueGlobalNumber: {{ vueGlobalNumber }}</div>

    <div>B value: {{ bVal }}</div>
    <div>C value: {{ cVal }}</div>

    <div>通常関数の算出プロパティ: {{ normalFuncComputed }}</div>

    <div>
      <button @click="runMethods">Vue methodsの実行</button>
    </div>
    <div>
      <button @click="doPostMessage">A Message</button>
    </div>
    <div>
      <button @click="doPostMessageB">B Message</button>
    </div>
    <div>
      <button @click="doPostMessageC">C Message</button>
    </div>
    <div>
      <button @click="doPostMessageD">D Message</button>
    </div>
    <div>
      <button @click="doPostMessageE">E Message</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { MESSAGE_B, MESSAGE_C, genHandler } from '@/pages/this/utils'

const MESSAGE_A = 'AAA'
const MESSAGE_D = 'DDD'
const MESSAGE_E = 'EEE'

function dFunc(e: MessageEvent) {
  if (e.data.id !== MESSAGE_D) {
    console.log('THIS IS NOT MY MESSAGE')
    return
  }
  // @ts-ignore
  console.log(`D Func is called - ${this}`) // window object
  // @ts-ignore
  console.log(this)
}

const eFunc = (e: MessageEvent) => {
  if (e.data.id !== MESSAGE_E) {
    console.log('THIS IS NOT MY MESSAGE')
    return
  }
  // @ts-ignore
  console.log(`E Func is called - ${this}`) // undefined
}

export default Vue.extend({
  data() {
    return {
      orgMessage: 'This is pages/this/index.vue',
      vueLocalNumber: 100,
      vueGlobalNumber: 1000,
      bVal: 10000,
      cVal: 100000,
    }
  },

  computed: {
    normalFuncComputed() {
      // @ts-ignore
      return '[Normal] ' + this.orgMessage
    },
    // そもそも算出プロパティはアロー関数で定義した時点でコンパイルエラーになる
  },

  mounted() {
    // 以下で登録したVue methodsは、イベント時に正しく動作する、なぜ？
    // ref: https://teramako.hatenadiary.org/entry/20130528/p1#f-28bcc056
    // > 習慣的にthisはハンドラを設置したオブジェクトになるようブラウザで統一されている
    window.addEventListener('message', this.vueMethodsHandler)
    // こちらはthisを最も近いもの（Vueインスタンス）で束縛しているため、正しく動作する（意図通り）
    const arrowHandler = (e: MessageEvent) => {
      if (e.data.id !== MESSAGE_A) {
        console.log('THIS IS NOT MY MESSAGE')
        return
      }
      console.log(`${this.orgMessage} - run vue Lambda arrow function, data: ${e.data.msg}`)
      this.vueGlobalNumber++
    }
    window.addEventListener('message', arrowHandler)

    // 外部モジュール経由で登録する
    const bFunc = () => {
      console.log(`B Func is called - ${this.orgMessage}`)
      this.bVal++
    }
    window.addEventListener('message', genHandler(bFunc, this.cFunc))

    window.addEventListener('message', dFunc)
    window.addEventListener('message', eFunc)
  },

  methods: {
    normalFunc() {
      console.log('[Normal] ' + this.orgMessage)
      console.log(this)
    },
    arrowFunc: () => {
      // console.log('[Arrow] ' + this.orgMessage) // そもそもコンパイルエラーになる
      console.log('[Arrow] ' + this) // this === undefined
    },
    runMethods() {
      this.normalFunc()
      this.arrowFunc()
    },
    doPostMessage() {
      console.log('message event emit!')
      window.postMessage({ id: MESSAGE_A, msg: 'Hello' }, '*')
    },
    vueMethodsHandler(e: MessageEvent) {
      if (e.data.id !== MESSAGE_A) {
        console.log('THIS IS NOT MY MESSAGE')
        return
      }
      console.log(`${this.orgMessage} - run vueMethodsHandler, data: ${e.data.msg}`)
      this.vueLocalNumber++
    },

    doPostMessageB() {
      console.log('ANOTHER B message event emit!')
      window.postMessage({ id: MESSAGE_B, msg: 'Hello' }, '*')
    },
    doPostMessageC() {
      console.log('ANOTHER C message event emit!')
      window.postMessage({ id: MESSAGE_C, msg: 'Hello' }, '*')
    },
    cFunc() {
      console.log(`C Func is called - ${this.orgMessage}`)
      this.cVal++
    },

    doPostMessageD() {
      console.log('ANOTHER D message event emit!')
      window.postMessage({ id: MESSAGE_D, msg: 'Hello' }, '*')
    },
    doPostMessageE() {
      console.log('ANOTHER E message event emit!')
      window.postMessage({ id: MESSAGE_E, msg: 'Hello' }, '*')
    },
  },
})
</script>
