import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/index.js';
import './styles/index.scss';
import App from './views/App';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    rootElement
);