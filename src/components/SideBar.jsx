import React from 'react';
import { Link } from 'react-router-dom';
function SideBar({ isOpen,setIsSidebarOpen}) {

  const sideBarItems = [
    { name: 'Dashboard', path: "/dashboard" },
    { name: 'Categories', path: '/categories' },
    { name: 'Sub Categories', path: '/sub-categories' },
    { name: 'Products', path: '/products' },
    { name: 'Outlets', path: '/outlets' },
    { name: 'Offers & Coupons', path: '/offers-coupons' },
    { name: 'Orders', path: '/orders' },
    { name: 'Users', path: '/users' },
    { name: 'Section', path: '/section' },
    { name: 'Contents', path: '/contents' }]

    
    function disappear() {
      if (isOpen) {
        setIsSidebarOpen(false);
      }
    }


  return (
    <div className={`fixed top-0 left-0 h-screen w-60 pt-12 bg-gray-800 text-white z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='grid grid-rows-12'>
        {sideBarItems.map((item, i) => (
          <Link onClick={disappear} key={i}
            to={item.path}
            className="flex items-center h-12 px-4 hover:bg-hover transition-colors duration-200">
            {item.name}
          </Link>
        ))
        }



      </div>
    </div>
  );
}

export default SideBar;

