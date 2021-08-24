export type ClosureType = () => void

// モジュール内変数はモジュール外からはread-onlyとなる
export let moduleGlobalNumber = 0
export function incrementModuleGlobalNumber() {
  moduleGlobalNumber++
}

interface Pushable {
  push: Function
}

export function genCallVueRouterPush(router: Pushable, path: string) {
  return async () => {
    router.push(path)
  }
}

export default function (callback: (a: number) => void): ClosureType {
  return () => {
    console.log('Start callback')
    callback(2)
    console.log('End callback')
  }
}
