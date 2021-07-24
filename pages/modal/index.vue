<template>
  <!-- https://reffect.co.jp/vue/understand-component-by-moda-window -->
  <div>
    <button @click="openModal">Click</button>

    <simple-modal v-show="showContent" @from-child="closeModal">
      slotから入ったinnerTextです。
    </simple-modal>
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
