import React from 'react'
import Sidebar from '../components/Sidebar'
import CarouselComponent from '../components/Carousel'
import LinkedinPost from '../components/LinkedinPost'
import LinkedInPostcard from '../components/LinkedInPostcard'
const posts = [
    {
      "profile_picture": "https://randomuser.me/api/portraits/men/1.jpg",
      "name": "John Smith",
      "position": "Senior Software Engineer at Tech Innovators",
      "time": "7m",
      "post_content": "Excited to share that our team just released the latest update to our app, which includes several new features based on user feedback. Check it out and let us know what you think! #TechInnovation #SoftwareUpdate",
      "picture": "/software-update-free.png" // Sample picture for post 1
    },
    {
      "profile_picture": "https://randomuser.me/api/portraits/women/2.jpg",
      "name": "Emily Johnson",
      "position": "Marketing Director at Green Solutions",
      "time": "14h",
      "post_content": "Had an amazing time speaking at the Eco Future Summit yesterday! It was inspiring to see so many innovative ideas for sustainable living. Looking forward to implementing some of these concepts in our next campaign. #Sustainability #Marketing"
    },
    {
      "profile_picture": "https://randomuser.me/api/portraits/men/3.jpg",
      "name": "David Lee",
      "position": "Product Manager at FinTech Revolution",
      "time": "3d",
      "post_content": "Proud to announce that we've just secured Series B funding! This will enable us to expand our services and continue revolutionizing the financial tech industry. Huge thanks to our investors and the entire team for their hard work. #FinTech #StartupSuccess"
    },
    {
      "profile_picture": "https://randomuser.me/api/portraits/women/4.jpg",
      "name": "Jessica Brown",
      "position": "HR Manager at Creative Minds Inc.",
      "time": "2d",
      "post_content": "Just wrapped up a fantastic workshop on workplace diversity and inclusion. It was great to see so many colleagues actively participating and contributing their perspectives. Looking forward to seeing the positive changes we'll implement together. #DiversityAndInclusion #HR",
      "picture": "/diversity.png" // Sample picture for post 4
    },
    {
      "profile_picture": "https://randomuser.me/api/portraits/men/5.jpg",
      "name": "Michael Davis",
      "position": "CEO at HealthTech Innovations",
      "time": "5h",
      "post_content": "Thrilled to announce our partnership with Care Solutions to bring advanced health monitoring technologies to more people. This collaboration marks a significant step forward in our mission to make healthcare more accessible and efficient. #Healthcare #Innovation"
    }
  ];
  
const LandingPage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
        <CarouselComponent />
        <LinkedinPost />
        <hr className="border-t border-gray-600 my-4" />
        <LinkedInPostcard posts={posts} />
        </div>

        
    </div>
  )
}

export default LandingPage