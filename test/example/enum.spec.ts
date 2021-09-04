const SampleEnumType = {
  FIRST: '1',
  SECOND: '2',
  THIRD: '3',
} as const
type SampleEnumType = typeof SampleEnumType[keyof typeof SampleEnumType]

const OtherEnumType = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
} as const
type OtherEnumType = typeof OtherEnumType[keyof typeof OtherEnumType]

function convert(raw: string): SampleEnumType {
  const arr = Object.entries(SampleEnumType)
  const res = arr.find((e) => e[1] === raw)
  if (!res) {
    throw TypeError(`unknown enum value: ${raw}`)
  }
  return res[1]
}

function convertGeneric<T, U>(raw: T, typeObject: Object): U {
  const arr = Object.entries(typeObject)
  const res = arr.find((e) => e[1] === raw)
  if (!res) {
    throw TypeError(`unknown enum value: ${raw}`)
  }
  return res[1] as U
}

describe('convert enum', () => {
  it('[Success] convert', () => {
    expect(convert('1')).toBe(SampleEnumType.FIRST)
    expect(convert('2')).toBe(SampleEnumType.SECOND)
    expect(convert('3')).toBe(SampleEnumType.THIRD)
  })

  it('[Error] convert', () => {
    expect(() => convert('0')).toThrowError('unknown enum value')
    expect(() => convert('4')).toThrowError('unknown enum value')
  })

  it('[Success] convert generic', () => {
    expect(convertGeneric<string, SampleEnumType>('1', SampleEnumType)).toBe(SampleEnumType.FIRST)
    expect(convertGeneric<string, SampleEnumType>('2', SampleEnumType)).toBe(SampleEnumType.SECOND)
    expect(convertGeneric('3', SampleEnumType)).toBe(SampleEnumType.THIRD)

    expect(convertGeneric<number, OtherEnumType>(1, OtherEnumType)).toBe(OtherEnumType.ONE)
    expect(convertGeneric<number, OtherEnumType>(2, OtherEnumType)).toBe(OtherEnumType.TWO)
    expect(convertGeneric<number, OtherEnumType>(3, OtherEnumType)).toBe(OtherEnumType.THREE)
  })

  it('[Error] convert generic', () => {
    expect(() => convertGeneric<string, SampleEnumType>('0', SampleEnumType)).toThrowError('unknown enum value')
    expect(() => convertGeneric('4', SampleEnumType)).toThrowError('unknown enum value')

    expect(() => convertGeneric<number, OtherEnumType>(0, OtherEnumType)).toThrowError('unknown enum value')
    expect(() => convertGeneric<number, OtherEnumType>(4, OtherEnumType)).toThrowError('unknown enum value')
  })
})
