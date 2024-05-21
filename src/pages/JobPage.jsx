import React from 'react'
import Sidebar from '../components/Sidebar'
import JobList from '../components/JobList'
const JobPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden pt-20">
            <JobList /> 
        </div>
    </div>
  )
}

export default JobPage