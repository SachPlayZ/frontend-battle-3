import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Avatar({ children }) {
  return <div className="relative w-8 h-8">{children}</div>;
}

function AvatarImage({ src }) {
  return <img className="rounded-full w-full h-full object-cover" alt="Avatar" src={src} />;
}

function Badge({ children, isCollapsed }) {
  return (
    !isCollapsed && (
      <span className="ml-auto inline-block px-2 py-1 text-xs font-semibold text-white bg-gray-600 hover:bg-purple-600 rounded-full cursor-pointer">
        {children}
      </span>
    )
  );
}

function Button({ children, isCollapsed }) {
  return (
    <button className={`mt-3 w-full py-2 text-sm font-semibold text-white bg-gray-700 ${isCollapsed ? 'rounded-full' : 'rounded-lg'} hover:bg-gray-600`}>
      {children}
    </button>
  );
}

function ShowMore({ children, isCollapsed }) {
  return (
    <button className={`mt-3 py-1.5 px-1.5 text-sm font-semibold text-white bg-gray-700 ${isCollapsed ? 'rounded-full' : 'rounded-lg'} hover:bg-gray-600 flex items-center justify-center`}>
      {children}
    </button>
  );
}

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(response => {
        const users = response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          description: `${user.location.city}, ${user.location.country}`,
          avatar: user.picture.thumbnail,
          badge: `+`
        }));
        setChannels(users);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  // Only render sidebar on non-mobile devices
  if (window.innerWidth < 768) {
    return null; // Return null to prevent rendering
  }

  return (
    <aside className={`bg-[#2a2a2a] text-white p-4 space-y-2 transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between">
        {!isCollapsed && <h2 className="text-xl font-semibold">For You</h2>}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="flex items-center justify-center">
          <ChevronLeftIcon className={`h-5 w-5 transition-transform duration-300 ${isCollapsed ? 'transform rotate-180' : ''}`} />
        </button>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-semibold transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>Recent</h3>
          {isCollapsed && <ClockIcon className="h-8 w-8 mx-auto" />}
          <ArrowUpDownIcon className={`h-5 w-5 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} />
        </div>
        <ul className="space-y-3 mt-3">
          {channels.map((channel, index) => renderChannel(channel, isCollapsed, index))}
        </ul>
        <ShowMore isCollapsed={isCollapsed}>
          {isCollapsed ? <DownArrowIcon className="h-5 w-5 mx-auto" /> : 'Show More'}
        </ShowMore>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-semibold transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>Recommended</h3>
          {isCollapsed && <StarIcon className="h-5 w-5 mx-auto" />}
        </div>
        <ul className="space-y-3 mt-3">
          {channels.map((channel, index) => renderChannel(channel, isCollapsed, index))}
        </ul>
        <ShowMore isCollapsed={isCollapsed}>
          {isCollapsed ? <DownArrowIcon className="h-5 w-5 mx-auto" /> : 'Show More'}
        </ShowMore>
      </div>
    </aside>
  );
}

function renderChannel(channel, isCollapsed, key) {
  return (
    <li className="flex items-center" key={key}>
      <Avatar>
        <AvatarImage src={channel.avatar} />
      </Avatar>
      {!isCollapsed && (
        <div className="ml-2">
          <p className="font-semibold">{channel.name}</p>
          <p className="text-sm text-gray-400">{channel.description}</p>
        </div>
      )}
      {channel.badge && <Badge isCollapsed={isCollapsed}>{channel.badge}</Badge>}
    </li>
  );
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function DownArrowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15 8.6 22 9.3 17 14 18.5 21 12 17.7 5.5 21 7 14 2 9.3 9 8.6 12 2" />
    </svg>
  );
}

export default Sidebar;
