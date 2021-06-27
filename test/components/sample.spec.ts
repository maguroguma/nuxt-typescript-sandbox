import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
// import ExampleInputForm from "@/components/ExampleInputForm.vue";
import TodoAdd from '@/components/TodoAdd.vue'

const localVue = createLocalVue();
Vue.use(Vuetify);

describe("ExampleInputForm", () => {
  let vuetify: Vuetify

  const build = () => {
    const wrapper = mount(TodoAdd, { localVue, vuetify });

    // 関数にすることで毎回wrapper.findしないとダメっぽい？
    return {
      wrapper,
      input: () => wrapper.find("input"),
      button: () => wrapper.find("button"),
    };
  };

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  // test("イベントトリガー時に入力された値が渡されているか", () => {
  //   const expectedWord = "stardustkids";
  //   const { wrapper, input, button } = build();
  //
  //   input().setValue(expectedWord);
  //   button().trigger("click");
  //
  //   expect(wrapper.emitted().submit[0]).toEqual([expectedWord]);
  // });
  it('ボタンのテキスト', () => {
    const expected = 'TODOの追加'
    const { wrapper, input, button } = build()

    expect(button().text()).toBe(expected)
  })

  it('イベントハンドラ', async () => {
    const { wrapper, input, button } = build()

    // TS: 要素をキャストしないとvalueにアクセスできない
    // const inputElement = <HTMLInputElement>input().element
    const inputElement = input().element as HTMLInputElement
    expect(inputElement.value).toBe('')
    await input().setValue('aaa')
    expect(inputElement.value).toBe('aaa')

    // ボタンをクリック
    // button().trigger('click')
    // expect(inputElement.value).toBe('aaa')
  })
});
