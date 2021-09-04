import { Buffer } from 'buffer'

describe('base64', () => {
  it('ABCDEFG', () => {
    const encoded = window.btoa('ABCDEFG')
    console.log(encoded)
    const decoded = window.atob(encoded)
    console.log(decoded)
  })

  // マルチバイト文字の場合はnodeのBufferを使う必要がある
  it('ありがとう', () => {
    const encoded = Buffer.from('ありがとう').toString('base64')
    console.log(encoded)
    const decoded = Buffer.from(encoded, 'base64').toString()
    console.log(decoded)
  })
})
