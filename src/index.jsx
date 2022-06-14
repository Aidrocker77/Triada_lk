import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/index.js';
import './styles/index.scss';
import App from './views/App';
import MyProjects from './views/CurrentProject';
import SettingsPage from './views/SettingsPage';
import Authorization from './views/Authorization';

ReactDOM.render(
 <Provider store={configureStore()}>
  <SettingsPage />
 </Provider>,
 document.getElementById('root')
);
