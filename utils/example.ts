export class Person {
  constructor(private name: string) {}

  static kind() {
    return 'Person is Human'
  }

  get random() {
    return Math.random()
  }

  private callback() {
    console.log('This is private callback')
  }

  callCallBack() {
    const c = this.callback
    c()
  }

  greet() {
    return 'Hello'
  }

  introduce() {
    return `I'm ${this.name}`
  }

  callTo(to: string) {
    return `Hi, ${to}`
  }
}

export function Sum(a: number, b: number) {
  return a + b
}
