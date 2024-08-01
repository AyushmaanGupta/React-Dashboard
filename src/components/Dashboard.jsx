import React from 'react';
import StatsCard from './StatsCard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats-container">
        <StatsCard title="Total Users" value="10,000" />
        <StatsCard title="Active Users" value="9,000" />
        <StatsCard title="New Signups" value="500" />
        <StatsCard title="Revenue" value="$1,00,000" />
      </div>
      <div className="table-container">
        <h3>Recent Activity</h3>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Activity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ayushmaan</td>
              <td>Signed Up</td>
              <td>01/08/2024</td>
            </tr>
            <tr>
              <td>Varun</td>
              <td>Logged In</td>
              <td>01/08/2024</td>
            </tr>
            <tr>
              <td>Mr.React</td>
              <td>Purchased Subscription</td>
              <td>01/08/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
