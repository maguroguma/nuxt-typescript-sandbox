// mainが重くがコールスタック開かないため、イベントキューに溜まった処理が実行されない
// イベントキューはmainが終了してから実行されることが確認できる
;(function () {
  const CNT = 1000000000
  let a = 0
  setTimeout(() => console.log(`first setTimeout: a is ${a}`, 1))
  setTimeout(() => console.log(`second setTimeout: a is ${a}`, 1))
  for (let i = 0; i < CNT; i++) {
    a++
  }
  console.log('main is done')
})()
