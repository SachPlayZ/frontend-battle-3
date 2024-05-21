import React from 'react'
import Sidebar from '../components/Sidebar'
import MessagingList from '../components/MessagingList'
const MessagingPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden pt-20">
            <MessagingList />
        </div>
    </div>
  )
}

export default MessagingPage