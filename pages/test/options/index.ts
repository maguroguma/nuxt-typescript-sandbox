import Vue from 'vue'

import SimpleModal from '@/components/modal/SimpleModal.vue'

export default Vue.extend({
  components: {
    SimpleModal,
  },

  data() {
    return {
      msg: '',
      showContent: false,
    }
  },

  computed: {
    greet() {
      // @ts-ignore
      return `Hello, ${this.msg}`
    },
  },

  methods: {
    onClickBtn() {
      this.msg = 'Pushed!'
    },
    openModal() {
      this.showContent = true
    },
    closeModal() {
      this.showContent = false
    },
  },
})
