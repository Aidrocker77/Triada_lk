import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Authorization from './Authorization';
import BaseKnowledge from './BaseKnowledge';
import CurrentProject from './CurrentProject';
import MyProjects from './MyProjects';
import SettingsPage from './SettingsPage';
import CurrentBaseKnowledge from './CurrentBaseKnowledge';

//Servise

//Styles
import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={'Загрузка данных...'}>
          <Routes>
            <Route path="/" element={<Authorization />} />
            <Route path="/MyProjects" element={<MyProjects />} />
            <Route path="MyProjects/CurrentProject" element={<CurrentProject />} />
            <Route path="/BaseKnowledge" element={<BaseKnowledge />} />
            <Route path="/SettingsPage" element={<SettingsPage />} />
            <Route path="BaseKnowledge/CurrentBaseKnowledge" element={<CurrentBaseKnowledge />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
