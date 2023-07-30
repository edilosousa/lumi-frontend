import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-light border-right bg-color-sidebar" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <img src="/logo-lumi.svg" alt="Logo" width="100" height="50" />
      </div>
      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item list-group-item-action text-white" id="bglist">
          <i className="bi bi-house-door"></i> Dashboard
        </a>
        <a href="/historico-faturas" className="list-group-item list-group-item-action text-white" id="bglist">
          <i className="bi bi-file-earmark-text"></i> Histórico de Faturas
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
