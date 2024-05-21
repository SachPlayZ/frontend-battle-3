import React from 'react';
import { CameraIcon, MapIcon, LinkIcon, PencilIcon } from '@heroicons/react/16/solid';
import { SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiMysql, SiAmazonaws } from 'react-icons/si';

const ProfileInfo = () => {
  return (
    <main className="flex-1 py-8 md:py-12 bg-gray-100 dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr]">
          <div className="flex flex-col items-center space-y-4 bg-white dark:bg-black p-6 rounded-lg shadow-lg">
            <div className="relative w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
              <img
                alt="Profile"
                className="aspect-square rounded-full object-cover"
                height="300"
                src="/46.jpg"
                width="300"
              />
              <div className="absolute bottom-0 right-0 bg-gray-900 text-gray-50 px-2 py-1 rounded-full text-xs">
                <CameraIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Oliver James</h1>
              <p className="text-gray-600 dark:text-gray-300">MERN Stack | Java Enthusiast | ML Virtuoso</p>
              <div className="flex items-center justify-center gap-2">
                <MapIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-sm text-gray-600 dark:text-gray-300">San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <LinkIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <a
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
                  href="#"
                >
                  linkedin.com/in/oliverjames
                </a>
              </div>
            </div>
            <button className="w-full bg-transparent border border-purple-600 text-gray-700 hover:bg-purple-600 dark:text-gray-300 dark:hover:text-gray-50 hover:text-gray-900 py-2 px-4 rounded">
              Connect
            </button>
          </div>
          <div className="space-y-8">
            <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <div className='flex justify-between'>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">About</h2>
              <PencilIcon className="absolute rounded-full hover:bg-gray-600 top-4 right-4 h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            </div>
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate software engineer with over 5 years of experience in building web applications. I have
                a strong background in JavaScript, React, and Node.js, and I'm always eager to learn new technologies
                and techniques to improve my skills.
              </p>
            </div>
            <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <div className='flex justify-between'>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Experience</h2>
              <PencilIcon className="absolute rounded-full hover:bg-gray-600 top-4 right-4 h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            </div>
              
              <div className="space-y-6">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className='flex'>
                    <img src="/comp.jpg" alt="Company Logo" className="h-12 w-12 mr-3" />
                    <div className='flex flex-col'>
                      <h3 className="font-semibold text-gray-50">Software Engineer</h3>
                      <p className="text-gray-600 dark:text-gray-300">Acme Inc</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">2019 - Present</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developed and maintained web applications using React, Node.js, and various other technologies.
                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className='flex'>
                    <img src="/comp.jpg" alt="Company Logo" className="h-12 w-12 mr-3" />
                    <div className='flex flex-col'>
                      <h3 className="font-semibold text-gray-50">Intern</h3>
                      <p className="text-gray-600 dark:text-gray-300">Acme Inc</p>
                    </div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">2018 - 2019</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Gained hands-on experience in web development, participating in various projects and learning new
                    technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <div className='flex justify-between'>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Education</h2>
              <PencilIcon className="absolute rounded-full hover:bg-gray-600 top-4 right-4 h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            </div>
              <div className="space-y-6">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className='flex'>
                    <img src="/University-of-California.png" alt="University Logo" className="h-12 w-12 mr-3 object-cover" />
                    <div className='flex flex-col'>
                    <h3 className="font-semibold text-gray-50">Bachelor of Science in Computer Science</h3>
                      <p className="text-gray-600 dark:text-gray-300">University of California, Berkeley</p>
                    </div>
                      
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">2014 - 2018</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Graduated with a degree in Computer Science, focusing on web development and software engineering.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
            <div className='flex justify-between'>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Skills</h2>
              <PencilIcon className="absolute rounded-full hover:bg-gray-600 top-4 right-4 h-5 w-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
            </div>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiJavascript className="mr-1" /> JavaScript
                </span>
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiReact className="mr-1" /> React
                </span>
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiNodedotjs className="mr-1" /> Node.js
                </span>
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiHtml5 className="mr-1" /> HTML
                </span>
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiCss3 className="mr-1" /> CSS
                </span>
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiGit className="mr-1" /> Git
                </span>
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiMysql className="mr-1" /> SQL
                </span>
                <span className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  <SiAmazonaws className="mr-1" /> AWS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileInfo;
