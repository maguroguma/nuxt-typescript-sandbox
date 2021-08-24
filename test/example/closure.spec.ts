function generateFunc(initVal: number) {
  return () => {
    initVal++
    return initVal
  }
}

describe('クロージャ', () => {
  it('引数をバインドさせる', () => {
    const f = generateFunc(0)
    expect(f()).toBe(1)
    expect(f()).toBe(2)
    expect(f()).toBe(3)
  })
})
