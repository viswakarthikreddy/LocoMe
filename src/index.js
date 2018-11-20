import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './Reducers';
import {App} from './Containers/App';

const store = createStore(reducers);

const ROOT_ELEMENT = document.getElementById('root');

const Display  = () => {
    return  (
    <Provider store={store}>
        <App />
    </Provider>
    );
}

render(<Display />, ROOT_ELEMENT);