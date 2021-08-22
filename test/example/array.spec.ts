describe('Array', () => {
  it('entries', () => {
    const arr = ['a', 'b', 'c']
    const iter = arr.entries()
    // 配列の分割代入
    for (const [index, element] of iter) {
      console.log('[entries]', index, element)
    }
  })

  it('keys', () => {
    const arr = ['a', 'b', 'c']
    const iter = arr.keys()
    for (const index of iter) {
      console.log('[keys]', index)
    }
  })

  it('values', () => {
    const arr = ['a', 'b', 'c']
    const iter = arr.values()
    for (const value of iter) {
      console.log('[values]', value)
    }
  })

  it('reduce', () => {
    const arr = [1, 2, 3, 4]
    console.log(
      '[reduce]',
      arr.reduce((acc, cur) => acc + cur, 100),
    )
  })

  it('some', () => {
    const arr = [1, 2, 3]
    console.log(
      '[some]',
      'Is there odd?',
      arr.some((e) => e % 2 == 1),
    )
    console.log(
      '[some]',
      'Is there even?',
      arr.some((e) => e % 2 == 0),
    )
  })

  it('includes', () => {
    const arr = [1, 2, 3]
    console.log('[includes]', 'have 1?', arr.includes(1))
    console.log('[includes]', 'have 4?', arr.includes(4))
  })
})
