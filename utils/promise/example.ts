export default {
  basic() {
    const p = new Promise<number>((resolve) => {
      resolve(1)
    })
    p.then((value) => {
      console.log()
    })
  },
}
