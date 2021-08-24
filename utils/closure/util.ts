export type ClosureType = () => void

export default function (callback: (a: number) => void): ClosureType {
  return () => {
    console.log('Start callback')
    callback(2)
    console.log('End callback')
  }
}
