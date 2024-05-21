import React from 'react'
import Sidebar from '../components/Sidebar'
import CompanyInfo from '../components/CompanyInfo'
const CompanyPage = () => {
  return (
    // <div className='flex'>
    //     <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            <CompanyInfo />
        </div>
    // </div>
  )
}

export default CompanyPage