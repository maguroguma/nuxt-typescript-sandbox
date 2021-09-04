interface MessageData {
  contentId: string
  showTools: boolean
}

function isMessageData(data: any): data is MessageData {
  return data && typeof data.contentId === 'string' && typeof data.showTools === 'boolean'
}

describe('ユーザ定義の型ガード', () => {
  it('基本的な使い方', () => {
    const data = 'wrong data'

    if (isMessageData(data)) {
      // このブロックではMessageData型であると判定される
      console.log(data.contentId, data.showTools)
    } else {
      console.log(`data is not MessageData type - value: ${data}`)
    }
  })
})
