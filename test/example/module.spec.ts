import { Person, Sum } from '@/utils/example'

// すべてのモジュールのメソッド、関数がundefinedを返すようになる
jest.mock('@/utils/example')

describe('module mock', () => {
  it('function', () => {
    expect(Sum(1, 2)).toBeUndefined()
  })

  it('class static method', () => {
    expect(Person.kind()).toBeUndefined()
  })

  it('class instance method', () => {
    const p = new Person('Taro')

    expect(p.greet()).toBeUndefined()
    expect(p.introduce()).toBeUndefined()
    expect(p.callTo('XXX')).toBeUndefined()
  })
})
