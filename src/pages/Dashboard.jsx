import React from 'react'
import DashBoardCard from '../components/DashBoardCard'

function Dashboard() {
  return (
    <div className='pt-30 flex flex-col items-center justify-center '>
      <select defaultValue={1} className="border-1 border-gray-300 p-1.5 rounded-sm bg-white outline-none focus:border-orange-500 focus:border-2 w-[90%]" name="region" id="">
        <option  value="1">--Select Outlet--</option>
        <option value="">Koregoan Park</option>
        <option value="">Punjab</option>
        <option value="">Ravet</option>
        <option value="">ShewalWadi</option>
        <option value="">Wagoli</option>
        <option value="">Show All</option>
      </select>
       <DashBoardCard icon='/dashboard/buildingIcon.png' name="PRODUCTS" number={4} cardLink="/products" iconBgColor="bg-orange-400"/>
       <DashBoardCard icon='/dashboard/buildingIcon.png' name="OFFERS" number={4} cardLink="/offers-coupons"iconBgColor="bg-orange-400"/>
       <DashBoardCard icon='/dashboard/groupIcon.svg' name="CUSTOMERS" number={4} cardLink="/users"iconBgColor="bg-yellow-400"/>
       <DashBoardCard icon='/dashboard/groupIcon.svg' name="DELIVERY AGENTS" number={4} cardLink="/users"iconBgColor="bg-yellow-400"/>
       <DashBoardCard icon='/dashboard/ClockIcon.svg' name="PENDING ORDERS" number={4} cardLink="/orders"iconBgColor="bg-blue-400"/>
       <DashBoardCard icon='/dashboard/foodIcon.png' name="PREPARING FOOD" number={4} cardLink="/"iconBgColor="bg-blue-400"/>
       <DashBoardCard icon='/dashboard/motorcycle.png' name="DELIVERY ON THE WAY" number={4} cardLink="/products"iconBgColor="bg-blue-400"/>
       <DashBoardCard icon='/dashboard/planeIcon.png' name="DELIVERED ORDERS" number={4} cardLink="/products"iconBgColor="bg-blue-400"/>
       <DashBoardCard icon='/dashboard/rupeeIcon.png' name="RECEIVED PAYMENT" number={55} cardLink="/products"iconBgColor="bg-red-500"/>
       <DashBoardCard icon='/dashboard/rupeeIcon.png' name="EXPENSES" number={4} cardLink="/products"iconBgColor="bg-red-500"/>
    </div> 
  )
}

export default Dashboard
