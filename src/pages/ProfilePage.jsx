import React from 'react'
import Sidebar from '../components/Sidebar'
import ProfileInfo from '../components/ProfileInfo' 
const ProfilePage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            <ProfileInfo />
        </div>
    </div>
  )
}

export default ProfilePage