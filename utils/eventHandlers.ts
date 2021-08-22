let counter = 0

export default function handler(e: Event) {
  counter++

  console.log('[handler.ts] START')
  console.log(`[handler.ts] counter: ${counter}`)
  console.info(e)
  for (let i = 0; i < 1000000000; i++) {
    if (i % 100000000 == 0) {
      console.log('[handler.ts] ' + i)
    }
  }
  console.log('[handler.ts] END')
}
