import { shallowMount, Wrapper } from '@vue/test-utils'
import TodoAdd from '@/components/TodoAdd.vue'

import Vue from 'vue'
// import Vuetify from '@nuxtjs/vuetify'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

// ref: https://tenderfeel.xsrv.jp/javascript/4675/

describe('TodoAdd.vue', () => {
  let wrapper: Wrapper<Vue>

  afterEach(() => {
    wrapper.destroy()
  })

  it('コンポーネントが表示されているか', () => {
    wrapper = shallowMount(TodoAdd)

    // wrapperが存在する
    expect(wrapper.exists()).toBe(true)
    // wrapperのルート要素はdivである
    expect(wrapper.element.tagName).toBe('DIV')
    // v-btnのテキストは「TODOの追加」である（タグが単一ならばこれでよい）
    expect(wrapper.findComponent({ name: 'v-btn' }).text()).toBe('TODOの追加')
  })

  it('イベントハンドラ', async () => {
    wrapper = shallowMount(TodoAdd)

    // ボタンclickイベントの発火
    // const input = () => wrapper.find('input')
    // const input = () => wrapper.findComponent({ name: 'v-text-field' })
    // expect(input().text()).toBe('')
    // await input().setValue('aaa')
    // expect(input().text()).toBe('aaa')
    // const btn = wrapper.findComponent({ name: 'v-btn' })
    // btn.trigger('click')
  })
})
