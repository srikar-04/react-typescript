import { store } from "../app/store"
import { Provider } from "react-redux"

function ReactRedux() {
  return (
    <Provider store={store}>
        <div>React-Redux</div>
    </Provider>
  )
}

export default ReactRedux