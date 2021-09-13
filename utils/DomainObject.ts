interface Person {
  name: string
  age: number
}

export default class DomainObject {
  private counter_: number
  private primitiveArray_: number[]
  private objectArray_: Person[]

  constructor() {
    this.counter_ = 0
    this.primitiveArray_ = []
    this.objectArray_ = []
  }

  get counter() {
    return this.counter_
  }

  get primitiveArray() {
    return this.primitiveArray_
  }

  get objectArray() {
    return this.objectArray_
  }

  public resetCounter() {
    this.counter_ = 0
  }

  public clearPrimitiveArray() {
    this.primitiveArray_ = []
  }

  public clearObjectArray() {
    this.objectArray_ = []
  }

  public incrementCounter() {
    this.counter_++
  }

  public addPrimitive() {
    this.primitiveArray_.push(Math.random())
  }

  public addObject() {
    this.objectArray_.push({ name: 'taro', age: 12 })
  }
}
