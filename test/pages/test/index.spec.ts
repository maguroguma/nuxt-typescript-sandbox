import { shallowMount } from '@vue/test-utils'
import VueOption from '@/pages/test/options/index'

describe('pages/test/options/index.vue', () => {
  describe('computed', () => {
    it('greet', () => {
      const wrapper = shallowMount(VueOption)
      expect(wrapper.vm.greet).toBe('Hello, ')
    })

    it('initial showContent', () => {
      const wrapper = shallowMount(VueOption)
      expect(wrapper.vm.showContent).toBeFalsy()
    })
  })
})
