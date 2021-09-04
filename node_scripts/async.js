;(function () {
  async function makeSetTimeoutPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('done')
        resolve('fulfilled')
      }, 1000)
    })
  }

  function main() {
    makeSetTimeoutPromise()
  }

  // call main（JSではメインルーチンが終了しても非同期処理は生きている）
  main()
})()
