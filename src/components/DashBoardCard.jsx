import React from 'react'
import { Link } from 'react-router-dom'

function DashBoardCard({ icon, name,number,cardLink, iconBgColor }) {
  return (
    <div  className='bg-white flex w-[90%] shadow-md rounded-lg h-20 mt-6 '>
      <div className={` flex items-center justify-center w-22 rounded-l-lg ${iconBgColor}`}>
        <img src={icon} alt="icon" className="w-12 h-12 object-contain" />
      </div>
      <div className='flex flex-col'>
        <p className="ml-5 mt-1">{name}</p>
     <Link className='ml-5 font-bold text-orange-400 text-3xl hover:underline hover:text-orange-900' to={cardLink}>{number}</Link>
     </div>
      
    </div>
  )
}

export default DashBoardCard
