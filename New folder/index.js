import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import MainReducer from "./reducers/MainReducer";
import CreateTodo from "./containers/CreateTodo";
import Table from "./containers/Table";

// ./react-dom.js
export {unstable_batchedUpdates} from "react-dom"

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
