import { store } from "../app/store"
import { Provider } from "react-redux"
import AddTodo from "../features/AddTodo"
import Todos from "../features/Todos"

function ReactRedux() {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default ReactRedux