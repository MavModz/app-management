import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Image from "../../assets/images/astronaut.jpg";
import { ClipboardCheck, BellDot, User} from 'lucide-react';
import LayoutDashboard from '../../assets/images/Dashboard.svg';
import CalendarDays from '../../assets/images/Calendar.svg';
import UserProfile from  '../../assets/images/Profile.svg';
import FileText from '../../assets/images/Billing.svg';
import MessageCircle from '../../assets/images/Message.svg';
import './header.css';

const navItems = [
  { text: 'Dashboard', icon: <img src={LayoutDashboard} alt="Dashboard svg icon" className='image-state'/>, path: '/dashboard' },
  { text: 'Billing', icon: <img src={FileText} alt="Billing svg icon" className='image-state' />, path: '/billing' },
  { text: 'Courses', icon: <img src={CalendarDays} alt="Calendar svg icon" className='image-state' />, path: '/courses' },
  { text: 'Management', icon: <img src={MessageCircle} alt="Calendar svg icon" className='image-state' />, path: '/management' },
  { text: 'Profile', icon: <img src={UserProfile} alt="Calendar svg icon" className='image-state' />, path: '/profile' }
];

function Header() {
  const [activePath, setActivePath] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleItemClick = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <div className='header-container'>
      <div className="header-wrapper">
      <img src={Image} className="header-logo" alt="main logo img" />
        <div className="nav-menu">
          <ul className='nav-menu-list'>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-menu-items ${item.path === activePath ? 'active' : ''}`}
                onClick={() => handleItemClick(item.path)}
              >
                <div className="nav-item-content">
                  {item.icon}
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-button-wrapper">
          <div className="nav-button-list">
            <div className="nav-button-items">
              <ClipboardCheck size={20} strokeWidth={1.5} />
            </div>
            <div className="nav-button-items">
              <BellDot strokeWidth={1.5} size={20} />
            </div>
            <div className="nav-button-items-active">
              <User strokeWidth={1.5} size={20} color="#ffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
