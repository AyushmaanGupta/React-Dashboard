import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
