import React from "react";
import { AlertCircle, Thermometer, Activity, Wind, TrendingUp } from "lucide-react";
import "./Dashboard.css";

const machineData = [
  { name: "Machine 1", pressure: 1200, temperature: 250, vibration: 5, gasFlow: 2.5, RUL: 80 },
  { name: "Machine 2", pressure: 1600, temperature: 310, vibration: 8, gasFlow: 3.5, RUL: 40 },
  { name: "Machine 3", pressure: 1100, temperature: 200, vibration: 3, gasFlow: 2.2, RUL: 95 },
  { name: "Machine 4", pressure: 1300, temperature: 270, vibration: 6, gasFlow: 2.8, RUL: 70 },
  { name: "Machine 5", pressure: 1400, temperature: 290, vibration: 7, gasFlow: 3.0, RUL: 60 },
  { name: "Machine 6", pressure: 1500, temperature: 300, vibration: 8, gasFlow: 3.2, RUL: 50 },
  { name: "Machine 7", pressure: 1600, temperature: 310, vibration: 9, gasFlow: 3.4, RUL: 40 },
  { name: "Machine 8", pressure: 1700, temperature: 320, vibration: 10, gasFlow: 3.6, RUL: 30 },
  { name: "Machine 9", pressure: 1800, temperature: 330, vibration: 11, gasFlow: 3.8, RUL: 20 },
  { name: "Machine 10", pressure: 1900, temperature: 340, vibration: 12, gasFlow: 4.0, RUL: 10 },
];

const isAbnormal = (machine) => {
  return (
    machine.pressure < 1000 || machine.pressure > 1500 ||
    machine.temperature < 100 || machine.temperature > 300 ||
    machine.vibration < 0 || machine.vibration > 10 ||
    machine.gasFlow < 2 || machine.gasFlow > 3
  );
};

const getIssueCount = (type) => {
  return machineData.filter(machine => {
    switch (type) {
      case 'pressure':
        return machine.pressure < 1000 || machine.pressure > 1500;
      case 'temperature':
        return machine.temperature < 100 || machine.temperature > 300;
      case 'vibration':
        return machine.vibration < 0 || machine.vibration > 10;
      case 'gasFlow':
        return machine.gasFlow < 2 || machine.gasFlow > 3;
      default:
        return false;
    }
  }).length;
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="total-machines">
        <h2>TOTAL MACHINES</h2>
        <div className="total-number">{machineData.length}</div>
      </div>
      <div className="data-cards">
        <div className="data-card">
          <TrendingUp className="icon blue-icon" />
          <div className="issue-count">{getIssueCount('pressure')}</div>
          <div className="data-label">Pressure</div>
        </div>
        <div className="data-card">
          <Thermometer className="icon red-icon" />
          <div className="issue-count">{getIssueCount('temperature')}</div>
          <div className="data-label">Temperature</div>
        </div>
        <div className="data-card">
          <Activity className="icon purple-icon" />
          <div className="issue-count">{getIssueCount('vibration')}</div>
          <div className="data-label">Vibration</div>
        </div>
        <div className="data-card">
          <Wind className="icon green-icon" />
          <div className="issue-count">{getIssueCount('gasFlow')}</div>
          <div className="data-label">Gas Flow</div>
        </div>
      </div>
      <div className="machine-grid">
        {machineData.map((machine, index) => (
          <div key={index} className={`machine-card ${isAbnormal(machine) ? 'error' : 'good'}`}>
            <h2 className="machine-name">{machine.name}</h2>
            <div className="machine-data">
              <div className="data-item">
                <TrendingUp className="icon blue-icon" />
                <span>{machine.pressure} psi</span>
              </div>
              <div className="data-item">
                <Thermometer className="icon red-icon" />
                <span>{machine.temperature}°C</span>
              </div>
              <div className="data-item">
                <Activity className="icon purple-icon" />
                <span>{machine.vibration} Hz</span>
              </div>
              <div className="data-item">
                <Wind className="icon green-icon" />
                <span>{machine.gasFlow} kg/s</span>
              </div>
            </div>
            <div className="rul">
              <span>RUL: {machine.RUL}%</span>
              {isAbnormal(machine) && <AlertCircle className="alert-icon" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;