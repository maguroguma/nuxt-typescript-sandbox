<template>
  <div id="overlay" @click="clickEvent">
    <div id="content" @click="stopEvent">
      <p><slot></slot></p>
      <p><button @click="clickEvent">Close</button></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    clickEvent() {
      this.$emit('from-child')
    },
    stopEvent(e: any) {
      e.stopPropagation()
    },
  },
})
</script>

<style scoped>
#overlay {
  /* 要素を重ねた時の順番 */
  z-index: 1;

  /* 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>
