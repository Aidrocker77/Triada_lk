import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Authorization from  './Authorization';
import BaseKnowledge from './BaseKnowledge';
import CurrentProject from './CurrentProject';
import MyProjects from './MyProjects';
import SettingsPage from './SettingsPage';
import CurrentBaseKnowledge from './CurrentBaseKnowledge';

import '../styles/App.scss';

function App() {
  return (
      <div className="App">
        <CurrentProject />
      </div>
  );
}

export default App;
