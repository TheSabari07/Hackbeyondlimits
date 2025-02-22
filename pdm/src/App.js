import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

const Sidebar = () => (
  <div className="sidebar">
    <h2>ALL SECTOR</h2>
    <ul>
      <li className="selected-sector sector-good">
        <a href="#sector1">SECTOR NAME 1</a>
        <span className="machine-count">10 Machines</span>
      </li>
      <li className="sector-with-issues">
        <a href="#sector2">SECTOR NAME 2</a>
        <span className="machine-count">8 Machines</span>
        
      </li>
      <li className="sector-good"> 
        <a href="#sector3">SECTOR NAME 3</a>
        <span className="machine-count">12 Machines</span>
      </li>
    </ul>
  </div>
);

const Header = () => (
  <div className="header">
    <div className="header-top">
      <div className="company-name">Smart Maintenance X</div>
      <div className="user-name">Tech RealM X</div>
    </div>
    <div className="header-nav">
      <nav>
        <a href="/">DASHBOARD</a>
        <a href="/machines">MACHINES</a>
      </nav>
    </div>
    
    <div className="last-updated">Last Updated: [timestamp]</div>
  </div>
);

export default App;



