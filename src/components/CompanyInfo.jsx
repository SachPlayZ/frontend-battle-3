import React from 'react';
import { MapIcon, LinkIcon } from '@heroicons/react/16/solid';
import Sidebar from './Sidebar';

const CompanyInfo = () => {
  const posts = [
    {
      title: 'Our Latest Project',
      date: 'May 1, 2024',
      content: 'We are excited to announce the launch of our latest project...',
    },
    {
      title: 'Employee Spotlight',
      date: 'April 15, 2024',
      content: 'This month, we are highlighting Jane Doe for her outstanding contributions...',
    },
  ];

  const employees = [
    {
      name: 'John Smith',
      position: 'CEO',
      email: 'john.smith@acmeinc.com',
      phone: '+1 (123) 456-7891',
    },
    {
      name: 'Jane Doe',
      position: 'Lead Developer',
      email: 'jane.doe@acmeinc.com',
      phone: '+1 (123) 456-7892',
    },
  ];

  return (
    <div className='flex'>
      <Sidebar />
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden pt-20">
        <main className="flex-1 py-8 md:py-12 bg-gray-100 dark:bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr]">
              <div className=" animate-fadeIn flex flex-col items-center space-y-4 bg-white dark:bg-black p-6 rounded-lg shadow-lg">
                <div className="relative w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
                  <img
                    alt="Company Logo"
                    className="aspect-square rounded-full object-cover"
                    height="300"
                    src="/comp.jpg"
                    width="300"
                  />
                  <div className="absolute bottom-0 right-0 bg-gray-900 text-gray-50 px-2 py-1 rounded-full text-xs">
                    <MapIcon className="h-4 w-4" />
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Acme Inc</h1>
                  <p className="text-gray-600 dark:text-gray-300">Software Development Company</p>
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
                      acmeinc.com
                    </a>
                  </div>
                </div>
                <button className="w-full bg-transparent border border-purple-600 text-gray-700 hover:bg-purple-600 dark:text-gray-300 dark:hover:text-gray-50 hover:text-gray-900 py-2 px-4 rounded">
                  Contact Us
                </button>
              </div>
              <div className="space-y-8 animate-fadeInlong">
                <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">About Us</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Acme Inc is a leading software development company specializing in building scalable and innovative
                    solutions for businesses of all sizes. With a team of experienced professionals, we deliver high-quality
                    software products to meet our clients' needs.
                  </p>
                </div>
                <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Services</h2>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                    <li>Custom Software Development</li>
                    <li>Web Application Development</li>
                    <li>Mobile App Development</li>
                    <li>UI/UX Design</li>
                    <li>Cloud Services</li>
                  </ul>
                </div>
                <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Contact Information</h2>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>Email: info@acmeinc.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Address: 123 Main St, San Francisco, CA</p>
                  </div>
                </div>
                <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Posts</h2>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    {posts.map((post, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                        <p>{post.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative space-y-4 bg-white dark:bg-[#1A1A1A] p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Employees</h2>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    {employees.map((employee, index) => (
                      <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
                        <h3 className="text-xl font-semibold">{employee.name}</h3>
                        <p>{employee.position}</p>
                        <p>{employee.email}</p>
                        <p>{employee.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompanyInfo;
