import React from 'react'
import Sidebar from '../components/Sidebar'
import NotificationList from '../components/NotificationList'
const NotificationPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden pt-20">
            <NotificationList />
        </div>
    </div>
  )
}

export default NotificationPage