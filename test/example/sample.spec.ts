function Safe() {
  return
}

function Unsafe() {
  throw new Error('Unsafe')
}

describe('jest', () => {
  test('test', () => {
    expect(1).toBe(1)
    expect(1).not.toBe(0)
  })

  test('error matcher', () => {
    expect(() => Safe()).not.toThrow()
    expect(() => Unsafe()).toThrow()
  })
})
