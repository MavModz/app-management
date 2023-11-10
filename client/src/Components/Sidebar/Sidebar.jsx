import React from 'react';
import Img from '../assets/images/user-2.jpg';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar-container">
        <div className="top">
            <img src={Img} alt="user" className="logo-img" />
        </div>
    </aside>
  )
}

export default Sidebar