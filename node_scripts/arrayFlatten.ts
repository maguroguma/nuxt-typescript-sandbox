;(function () {
  function flatten<T>(array: T[][]): T[] {
    // concatの引数はスプレッド演算子だから、これで正しく動作する
    return Array.prototype.concat.apply([], array)
  }

  // console.log(flatten([[1, 2, 3], [4, 5], [6], 7]))
  console.log(flatten([[1, 2, 3], [4, 5], [6]]))

  // console.log([].concat([[1, 2, 3], [4, 5], [6]]))
  console.log(Array.prototype.concat.apply([], [[1, 2, 3], [4, 5], [6]]))

  let a: any = 1
  let b: number = a
  console.log(b)
})()
