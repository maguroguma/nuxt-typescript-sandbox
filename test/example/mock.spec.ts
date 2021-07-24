class Person {
  constructor(private name: string) {}

  static kind() {
    return 'Person is Human'
  }

  greet() {
    return 'Hello'
  }

  introduce() {
    return `I'm ${this.name}`
  }

  callTo(to: string) {
    return `Hi, ${to}`
  }
}

describe('jest', () => {
  it('静的メソッドをモックにする', () => {
    expect(Person.kind()).toBe('Person is Human')
    Person.kind = jest.fn(() => 'This is Mock')
    expect(Person.kind()).toBe('This is Mock')
  })

  it('モック以降のテスト', () => {
    expect(Person.kind()).toBe('This is Mock')
  })

  it('インスタンスメソッドをモックにする', () => {
    const p = new Person('Taro')
    const q = new Person('Taro')

    expect(p.greet()).toBe('Hello')
    p.greet = jest.fn(() => 'XXX')
    expect(p.greet()).toBe('XXX')

    expect(q.greet()).toBe('Hello')
  })

  it('引数を取るインスタンスメソッドをモックにする', () => {
    const p = new Person('Taro')

    expect(p.callTo('Hanako')).toBe('Hi, Hanako')
    p.callTo = jest.fn()
    expect(p.callTo('Hanako')).toBe(undefined)

    // 引数を取らないモック関数も差し込める（返り値を固定してよいならこれが簡単そう）
    p.callTo = jest.fn(() => 'XXX')
    expect(p.callTo('Hanako')).toBe('XXX')
    expect(p.callTo('Jiro')).toBe('XXX')

    // 引数を取る場合は型推論が有効になる（？）
    p.callTo = jest.fn(to => `XXX, ${to}`)
    expect(p.callTo('Hanako')).toBe('XXX, Hanako')
    expect(p.callTo('Jiro')).toBe('XXX, Jiro')

    // 返り値の別の設定方法
    const mockFn = jest.fn()
    mockFn.mockReturnValue('XXX')
    p.callTo = mockFn
    expect(p.callTo('Hanako')).toBe('XXX')
    expect(p.callTo('Jiro')).toBe('XXX')
    // 一回のみ
    const mockFn2 = jest.fn()
    mockFn2.mockReturnValueOnce('XXX')
    p.callTo = mockFn2
    expect(p.callTo('Hanako')).toBe('XXX')
    expect(p.callTo('Jiro')).toBe(undefined)
  })

  it('.mockプロパティ', () => {
    const p = new Person('Taro')
    expect(p.callTo('Hanako')).toBe('Hi, Hanako')

    const mockFn = jest.fn()
    mockFn.mockReturnValueOnce('XXX')
    p.callTo = mockFn

    expect(p.callTo('Hanako')).toBe('XXX')
    expect(p.callTo('Jiro')).toBe(undefined)

    // 引数や呼び出し回数の記録の確認
    expect(mockFn.mock.calls.length).toBe(2)
    expect(mockFn.mock.calls[0][0]).toBe('Hanako')
    expect(mockFn.mock.calls[1][0]).toBe('Jiro')
    expect(mockFn.mock.results.length).toBe(2)
    expect(mockFn.mock.results[0].value).toBe('XXX')
    expect(mockFn.mock.results[1].value).toBe(undefined)
  })
})
