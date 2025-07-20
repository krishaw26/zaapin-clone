import React from 'react';

function NavBar({ toggleSidebar }) {
  return (
    <nav className="fixed top-0 w-full h-12 bg-orange-500 flex items-center px-6 z-50">
      {/* ✅ Trigger toggleSidebar on click */}
      <button className='size-8' onClick={toggleSidebar}>
        <img src="menu1.svg" alt="" />
      </button>

      <div className='w-2/3 flex justify-center'>
        <img className='w-35' src="logo.png" alt="" />
      </div>

      <button className='flex text-white font-bold'>
        <img className="mr-2" src="admin.png" alt="" />
        Administrator
      </button>
    </nav>
  );
}

export default NavBar;

