import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setShowNotifications(false);

    if (showNotifications) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [showNotifications]);

  return (
    <nav className="text-2xl bg-white border-gray-300 border-b px-8 h-15.5 flex gap-30 fixed w-full top-0 z-50">
      
      <div className='flex-3 flex items-center'>
        <img src="/src/assets/longLogo.png" className='inline-block h-11 pl-4' />
      </div>

      <div className='flex-5 flex items-center justify-between gap-10'>
        <Link to="/dashboard"><span className='navText'>DashBoard</span></Link>
        <Link to="/discover"><span className='navText'>Discover</span></Link>
        <Link to="/profile"><span className='navText'>Profile</span></Link>
        <Link to="/sessions"><span className='navText'>Sessions</span></Link>

        <div className="flex items-center gap-5 relative">
          
          <img
            src="https://www.svgrepo.com/show/133673/notification-bell.svg"
            className="h-6 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowNotifications(prev => !prev);
            }}
          />

          {showNotifications && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute right-10 top-10 w-72 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-4 z-50"
            >
              <p className="font-semibold mb-2 text-lg">Notifications</p>
              
              <div className="text-sm text-gray-600">
                <p>No new notifications</p>
              </div>
            </div>
          )}

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1280px-Default_pfp.svg.png"
            className="h-9 cursor-pointer"
          />

        </div>
      </div>
    </nav>
  );
};

export default NavBar;