import { shallowMount } from '@vue/test-utils'
import testPage from '@/pages/test/testPage.vue'

describe('pages/test/testPage.vue', () => {
  it('msg', () => {
    const wrapper = shallowMount(testPage as any) as any

    expect(wrapper.vm.msg).toBe('')
    wrapper.vm.onClickBtn()
    expect(wrapper.vm.msg).toBe('Pushed!')
  })

  it('showContent', () => {
    const wrapper = shallowMount(testPage as any) as any

    expect(wrapper.vm.showContent).toBeFalsy()
    wrapper.vm.openModal()
    expect(wrapper.vm.showContent).toBeTruthy()
    wrapper.vm.closeModal()
    expect(wrapper.vm.showContent).toBeFalsy()
  })

  it('greet', () => {
    const wrapper = shallowMount(testPage as any) as any

    expect(wrapper.vm.greet).toBe('Hello, ')
    wrapper.vm.onClickBtn()
    expect(wrapper.vm.greet).toBe('Hello, Pushed!')
  })
})
