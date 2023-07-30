import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Link, Routes, RouteProps } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import HistoricoFaturas from './pages/historico-faturas/historico-faturas';
import Sidebar from './components/Sidebar';
import './components/Sidebar.css';

const App: React.FC = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <Router>
      <div className="d-flex" id="app-wrapper">
        <Sidebar />

        <div id="page-content-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/historico-faturas" element={<HistoricoFaturas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
