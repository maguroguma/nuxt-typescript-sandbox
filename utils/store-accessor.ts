import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Todos from '~/store/modules/todos'

let todosStore: Todos;

function initialiseStores(store: Store<any>): void {
  todosStore = getModule(Todos, store)
}

export { initialiseStores, todosStore }
