import React from 'react'
import Sidebar from '../components/Sidebar'
import CarouselComponent from '../components/Carousel'
import LinkedinPost from '../components/LinkedinPost'
const LandingPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
        <CarouselComponent />
        <LinkedinPost />
        </div>

        
    </div>
  )
}

export default LandingPage