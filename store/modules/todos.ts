import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

interface EditContentPayload {
  id: number
  content: string
}

@Module({
  name: 'modules/todos',
  stateFactory: true,
  namespaced: true,
})
export default class TodosStore extends VuexModule {
  // Stateはクラスのプロパティとして定義すれば良い
  private todos = new Todos(
    [
      new TodoItem(0, 'フロントの勉強'),
      new TodoItem(1, 'AWSの勉強'),
      new TodoItem(2, 'TypeScriptの勉強'),
    ],
    3
  )

  // Getterはクラスのgetterとして定義すれば良い
  get inProgTodosIds() {
    return this.todos.getInProgTodoIds()
  }
  get doneTodosIds() {
    return this.todos.getDoneTodoIds()
  }
  get getTodoItemById() {
    return (id: number) => this.todos.getTodoItemById(id)
  }

  // MutationはMutationデコレーションしたメソッドとして定義すれば良い
  @Mutation
  addTodoItem(newContent: string) {
    this.todos.addTodoItem(newContent)
  }
  @Mutation
  toggleIsDone(id: number) {
    const todo = this.todos.getTodoItemById(id)
    todo.isDone = !todo.isDone
  }
  @Mutation
  editContent(payload: EditContentPayload) {
    this.todos.getTodoItemById(payload.id).content = payload.content
  }
  @Mutation
  removeTodo(id: number) {
    this.todos.getTodoItemById(id).isDeleted = true
  }
  @Mutation
  incrementPomoCount(id: number) {
    this.todos.getTodoItemById(id).incrementPomoCount()
  }

  // ActionはActionデコレーションしたメソッドとして定義すれば良い
  @Action
  addTodoItemAction(newContent: string) {
    this.context.commit('addTodoItem', newContent)
  }
}

export class TodoItem {
  public id: number
  public content: string
  public isDone: boolean
  public isDeleted: boolean
  public isAssigned: boolean
  private _pomoCount: number

  constructor(id: number, content: string) {
    this.id = id
    this.content = content
    this.isDone = false
    this.isDeleted = false
    this.isAssigned = false
    this._pomoCount = 0
  }

  get pomoCount() {
    return this._pomoCount
  }
  incrementPomoCount() {
    this._pomoCount++
  }
}

// ファーストクラスコレクション
class Todos {
  public todoList: TodoItem[]
  public nextId: number

  constructor(todoList: TodoItem[], nextId: number) {
    this.todoList = todoList
    this.nextId = nextId
  }

  getTodoItemById(id: number) {
    const res = this.todoList.find((el) => el.id === id)
    if (res === undefined) {
      throw Error('Todo is not found.')
    }
    return res
  }

  addTodoItem(newContent: string) {
    const newTodoItem = new TodoItem(this.nextId, newContent)
    this.nextId++
    this.todoList.push(newTodoItem)
  }

  // 削除されていないidのリストを返す
  getInProgTodoIds() {
    const res: number[] = []
    this.todoList.forEach((el) => {
      if (!el.isDeleted && !el.isDone) {
        res.push(el.id)
      }
    })
    return res
  }
  // 未削除かつ完了済みのidのリストを返す
  getDoneTodoIds() {
    const res: number[] = []
    this.todoList.forEach((el) => {
      if (!el.isDeleted && el.isDone) {
        res.push(el.id)
      }
    })
    return res
  }
}
