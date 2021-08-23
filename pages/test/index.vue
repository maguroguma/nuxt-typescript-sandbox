<template>
  <div>
    <div>{{ msg }}</div>
    <div>
      <button @click="onClickBtn">ボタン</button>
    </div>

    <div>
      <button @click="openModal">Click</button>

      <transition name="fade">
        <simple-modal v-show="showContent" @from-child="closeModal"> slotから入ったinnerTextです。 </simple-modal>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import VueOption from '@/pages/test/options/index'

export default VueOption
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
