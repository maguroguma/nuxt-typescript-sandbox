export const MESSAGE_B = 'BBB'
export const MESSAGE_C = 'CCC'

export function genHandler(bFunc: () => void, cFunc: () => void) {
  return (e: MessageEvent): void => {
    if (e.data.id === MESSAGE_B) {
      bFunc()
    } else if (e.data.id === MESSAGE_C) {
      cFunc()
    }
  }
}
