import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import MainReducer from "./reducers/MainReducer";
import CreateTodo from "./containers/CreateTodo";
import Table from "./containers/Table";
import registerServiceWorker from './registerServiceWorker';

export {unstable_batchedUpdates} from "react-dom"

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
  <CreateTodo />
  <Table/>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
