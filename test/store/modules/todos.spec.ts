import { createStore } from '@/.nuxt/store'
import { initialiseStores, todosStore } from '@/store'
import { TodoItem } from '@/store/modules/todos'

beforeEach(() => {
  initialiseStores(createStore())
})

describe('getters', () => {
  it('in progress todos', () => {
    todosStore.toggleIsDone(1)
    const actual = todosStore.inProgTodosIds

    expect(actual).toStrictEqual([0, 2])
  })

  it('done todos', () => {
    todosStore.toggleIsDone(0)
    todosStore.toggleIsDone(2)
    const actual = todosStore.doneTodosIds

    expect(actual).toStrictEqual([0, 2])
  })

  it('get todo item by id', () => {
    const actual = todosStore.getTodoItemById(1)

    expect(actual).toStrictEqual(new TodoItem(1, 'AWSの勉強'))
  })

  it('[Error] get todo item by id', () => {
    expect(() => todosStore.getTodoItemById(999)).toThrow()
    expect(() => todosStore.getTodoItemById(999)).toThrowError('Todo is not')
    expect(() => todosStore.getTodoItemById(999)).toThrowError('Todo is not found.')
  })
})

describe('mutations', () => {
  it('add todo item', () => {
    todosStore.addTodoItem('4つ目のTODO')

    expect(todosStore.getTodoItemById(0).content).toEqual('フロントの勉強')
    expect(todosStore.getTodoItemById(1).content).toEqual('AWSの勉強')
    expect(todosStore.getTodoItemById(2).content).toEqual('TypeScriptの勉強')
    expect(todosStore.getTodoItemById(3).content).toEqual('4つ目のTODO')
  })

  it('toggle is done', () => {
    todosStore.toggleIsDone(1)

    expect(todosStore.getTodoItemById(0).isDone).toEqual(false)
    expect(todosStore.getTodoItemById(1).isDone).toEqual(true)
    expect(todosStore.getTodoItemById(2).isDone).toEqual(false)
  })

  it('edit content', () => {
    todosStore.editContent({ id: 1, content: 'GCPの勉強' })

    expect(todosStore.getTodoItemById(0).content).toEqual('フロントの勉強')
    expect(todosStore.getTodoItemById(1).content).toEqual('GCPの勉強')
    expect(todosStore.getTodoItemById(2).content).toEqual('TypeScriptの勉強')
  })

  it('remove todo', () => {
    todosStore.removeTodo(1)

    expect(todosStore.getTodoItemById(0).isDeleted).toEqual(false)
    expect(todosStore.getTodoItemById(1).isDeleted).toEqual(true)
    expect(todosStore.getTodoItemById(2).isDeleted).toEqual(false)
  })

  it('increment pomo count', () => {
    todosStore.incrementPomoCount(0)
    todosStore.incrementPomoCount(1)
    todosStore.incrementPomoCount(1)

    expect(todosStore.getTodoItemById(0).pomoCount).toEqual(1)
    expect(todosStore.getTodoItemById(1).pomoCount).toEqual(2)
    expect(todosStore.getTodoItemById(2).pomoCount).toEqual(0)
  })
})
