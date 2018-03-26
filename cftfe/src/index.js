import React from 'react';
import ReactDOM from 'react-dom';
import './resources/fontAwesome/font-awesome.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Store from './store.js';
import './../node_modules/toastr/build/toastr.min.css';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
