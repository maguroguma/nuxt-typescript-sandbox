describe('Object', () => {
  it('assign', () => {
    const target = { a: 1, b: 2 }
    const source = { b: 4, c: 5 }

    const returnedTarget = Object.assign(target, source)

    console.log('[assign]', 'target', target)
    console.log('[assign]', 'returnedTarget', returnedTarget)
  })

  it('create', () => {
    const person = {
      isHuman: false,
      printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
      },
      name: 'unknown',
    }

    const me = Object.create(person) // meはany

    me.name = 'Matthew' // "name" is a property set on "me", but not on "person"
    me.isHuman = true // inherited properties can be overwritten

    person.printIntroduction()
    me.printIntroduction()
    // expected output: "My name is Matthew. Am I human? true"
  })

  it('entries', () => {
    const obj = { a: 'somestring', b: 42 }

    // ArrayはIteratorを返すが、Objectでは配列を返す
    // keys, values静的メソッドについても同様
    for (const [key, value] of Object.entries(obj)) {
      console.log('[entries]', `${key}: ${value}`)
    }
  })
})
