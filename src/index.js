/* eslint-disable import/no-unresolved */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from 'Reducers';
import { App } from 'Containers/App';
import rootSaga from './Sagas';


const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({

});
const middleware = [sagaMiddleware, logger];

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

const ROOT_ELEMENT = document.getElementById('root');

store.injectReducers = {};

const Display = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(<Display />, ROOT_ELEMENT);
