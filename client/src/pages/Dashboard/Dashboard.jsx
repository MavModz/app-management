import React from 'react';
import Header from '../../Components/Header/Header';
import { BarChart2 } from 'lucide-react';
import './dashboard.css';

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-conatiner">
        <div className="dashboard-wrapper">
          <div className="banner-container h-64 rounded-xl">
            <div className="top-banner pt-6 pl-6">
              <h1 className='banner-text text-2xl'>Welcome back to your Dashboard</h1>
              <p>You’ve learned 70% of your goal this week! <br />
                Keep it up and improve your results!
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard