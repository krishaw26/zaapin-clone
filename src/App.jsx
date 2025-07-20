
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import SubCategories from './pages/SubCategories';
import Products from './pages/Products';
import Outlets from './pages/Outlets';
import Offers from './pages/Offers';  
import Orders from './pages/Orders';
import Users from './pages/Users';
import Section from './pages/Section';
import Contents from './pages/Contents';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <NavBar toggleSidebar={toggleSidebar} />
      <SideBar setIsSidebarOpen={setIsSidebarOpen}  isOpen={isSidebarOpen} />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/sub-categories' element={<SubCategories />} />
        <Route path='/products' element={<Products />} />
        <Route path='/outlets' element={<Outlets />} />
        <Route path='/offers-coupons' element={<Offers/>} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/users' element={<Users />} />
        <Route path='/section' element={<Section />} />
        <Route path='/contents' element={<Contents />} />
        
      </Routes>

     
      </div>
   
  );
}

export default App;
