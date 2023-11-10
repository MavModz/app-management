import React from 'react';
import Header from '../../Components/Header/Header';
import Study from '../../assets/images/study.png';
import './dashboard.css';

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-conatiner">
        <div className="dashboard-wrapper">
          <div className="banner-container h-80 rounded-xl flex justify-around items-center">
            <div className="top-banner">
              <h1 className='banner-text text-2xl'>Welcome back to your Dashboard</h1>
              <p>You’ve learned 70% of your goal this week! <br />
                Keep it up and improve your results!
              </p>
            </div>
            <div className='banner-svg'>
              <img src= {Study} alt="student studying on the table" className='h-72' />
            </div>
          </div>
          <div className="stats-wrapper flex gap-8 justify-around h-96 mt-5">
            <div className="course-progress w-5/12">
              <p>progress data</p>
            </div>
            <div className="schedule w-5/12">
              <p>schedule data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard