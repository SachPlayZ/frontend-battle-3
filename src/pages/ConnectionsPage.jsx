import React from 'react'
import Sidebar from '../components/Sidebar'
import ConnectionList from '../components/ConnectionList'
const ConnectionsPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            <ConnectionList/>  
        </div>
    </div>
  )
}

export default ConnectionsPage