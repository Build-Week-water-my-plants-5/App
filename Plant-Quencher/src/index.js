import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers'
// ReactDOM.render(<Router><App />
//     </Router>, document.getElementById('root'));

// -------------------------------------------------------
// ------------------------------------------------------- 
// ------------ Store VVVVV ------------------------------

const store = createStore(reducer, applyMiddleware(thunk, logger));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>  
    <Router>
      <App />
    </Router>
  </Provider>,
rootElement);

// picmetric redux persist line 14-finish