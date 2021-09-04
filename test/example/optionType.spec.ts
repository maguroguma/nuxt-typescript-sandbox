import { Option, None } from '@/utils/optionType/option'

describe('Option Type', () => {
  it('sample', () => {
    const result = Option(6)
      .flatMap((n) => Option(n * 3))
      .flatMap((_) => new None())
      .getOrElse(7)
    expect(result).toBe(7)
  })
})
