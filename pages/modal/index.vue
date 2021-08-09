<template>
  <!-- https://reffect.co.jp/vue/understand-component-by-moda-window -->
  <div>
    <button @click="openModal">Click</button>

    <transition name="fade">
      <simple-modal v-show="showContent" @from-child="closeModal"> slotから入ったinnerTextです。 </simple-modal>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimpleModal from '@/components/modal/SimpleModal.vue'

export default Vue.extend({
  components: {
    SimpleModal,
  },

  data() {
    return {
      showContent: false,
    }
  },

  methods: {
    openModal() {
      this.showContent = true
    },
    closeModal() {
      this.showContent = false
    },
  },
})
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
