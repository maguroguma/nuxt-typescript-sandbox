import { Person } from '@/utils/example'

describe('getter', () => {
  it('再計算', () => {
    const p = new Person('Taro')

    console.log(p.random)
    console.log(p.random)
    console.log(p.random)
  })

  it('privateなコールバック', () => {
    const p = new Person('Taro')

    p.callCallBack()
  })
})
