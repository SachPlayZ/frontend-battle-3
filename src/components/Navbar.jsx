import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showSearch = () => {
    setIsSearchVisible(true);
  };

  const hideSearch = () => {
    setIsSearchVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
      setIsUserDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <header className="flex items-center justify-between bg-gray-950 px-4 py-3 text-white md:px-6">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2 mr-6" to="#">
          <TwitchIcon className="h-6 w-6" />
        </Link>
        {!isSearchVisible && (
          <div className="hidden md:flex gap-4">
            <Link className="hover:text-purple-400" to="#">Connections</Link>
            <Link className="hover:text-purple-400" to="#">Jobs</Link>
          </div>
        )}
        {!isSearchVisible && (
          <div className="flex md:hidden gap-4">
            <button className="rounded-full" size="icon" variant="ghost">
              <ConnectionsIcon className="h-5 w-5" />
              <span className="sr-only">Connections</span>

              </button>
            <button className="rounded-full" size="icon" variant="ghost">
              <JobsIcon className="h-5 w-5" />
              <span className="sr-only">Jobs</span>
            </button>
          </div>
        )}
      </div>
      <form className={`flex-1 max-w-md mx-auto ${isSearchVisible ? 'flex' : 'hidden md:flex'}`}>
        {isSearchVisible && (
          <button onClick={hideSearch} className="mr-2 rounded-full" size="icon" variant="ghost">
            <BackIcon className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </button>
        )}
        <div className="relative flex flex-1">
          <input
            className="w-full rounded-l-lg border border-gray-800 bg-black px-4 py-2 text-sm focus:border-purple-600 focus:outline-none"
            placeholder="Search..."
            type="search"
          />
          <button className="px-3 py-2 text-sm rounded-r-lg bg-gray-700 hover:bg-gray-600">
            <SearchIcon className="h-4 w-4" />
          </button>
        </div>
      </form>
      <div className={`flex items-center gap-4 ${isSearchVisible ? 'hidden' : 'flex'}`}>
        <button onClick={showSearch} className="md:hidden rounded-full" size="icon" variant="ghost">
          <SearchIcon className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </button>
        <div className="hidden md:flex items-center gap-4 me-6">
          <button className="relative group rounded-full" size="icon" variant="ghost">
            <NotificationIcon className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max rounded-md bg-gray-900 p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Notifications
            </div>
          </button>
          <button className="relative group rounded-full" size="icon" variant="ghost">
            <MessageIcon className="h-5 w-5" />
            <span className="sr-only">Messages</span>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max rounded-md bg-gray-900 p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              Messages
            </div>
          </button>
        </div>
        <div className="relative md:hidden" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="rounded-full" size="icon" variant="ghost">
            <ThreeDotMenuIcon className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-900 rounded-md shadow-xl z-50">
              <Link className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700" to="#">
                <NotificationIcon className="h-5 w-5" />
                <span>Notifications</span>
              </Link>
              <Link className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700" to="#">
                <MessageIcon className="h-5 w-5" />
                <span>Messages</span>
              </Link>
            </div>
          )}
        </div>
        <div className="relative" ref={userDropdownRef}>
          <button onClick={toggleUserDropdown} className="rounded-full" size="icon" variant="ghost">
            <img
              className="h-8 w-8 rounded-full object-cover"
              src="/46.jpg"
              alt="User Avatar"
            />
          </button>
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 py-2 bg-gray-900 rounded-md shadow-xl z-50">
              <div className="flex flex-col items-center p-4">
                <img
                  className="h-16 w-16 rounded-full object-cover mb-2"
                  src="/46.jpg"
                  alt="User Avatar"
                />
                <span className="font-semibold text-gray-200">Oliver James</span>
                <span className="text-sm text-gray-400">MERN Stack | Java Enthusiast | ML Virtuoso</span>
              </div>
              <hr className="my-2 border-gray-700" />
              <Link className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700" to="#">
                <SettingsIcon className="h-5 w-5" />
                <span>Settings & Privacy</span>
              </Link>
              <Link className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700" to="#">
                <HelpIcon className="h-5 w-5" />
                <span>Help</span>
              </Link>
              <Link className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700" to="#">
                <LanguageIcon className="h-5 w-5" />
                <span>Language</span>
              </Link>
              <Link className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700" to="#">
                <ActivityIcon className="h-5 w-5" />
                <span>Posts & Activity</span>
              </Link>
              <Link className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-gray-700" to="#">
                <SignOutIcon className="h-5 w-5" />
                <span>Sign Out</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

function BackIcon(props) {
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
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ConnectionsIcon(props) {
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
      <path d="M16 8a6 6 0 1 0-8 0A6 6 0 0 0 8 14v6H4v-6a10 10 0 1 1 20 0v6h-4v-6a6 6 0 0 0-6-6z" />
    </svg>
  );
}

function JobsIcon(props) {
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
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TwitchIcon(props) {
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
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  );
}

function NotificationIcon(props) {
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
      <path d="M21 14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-2h2l2 2h4a2 2 0 0 1 2 2z" />
      <line x1="12" x2="12" y1="11" y2="17" />
      <line x1="9" x2="15" y1="14" y2="14" />
    </svg>
  );
}

function MessageIcon(props) {
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
      <path d="M21 10a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7h-.7a8.38 8.38 0 0 1-3.8-.9l-3.2 1.2 1.2-3.2a8.38 8.38 0 0 1-.9-3.8v-.7a8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 14 3h.7a8.38 8.38 0 0 1 3.8.9l3.2-1.2-1.2 3.2A8.38 8.38 0 0 1 21 10z" />
    </svg>
  );
}

function ThreeDotMenuIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function HelpIcon(props) {
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
      <path d="M9.09 9a3 3 0 1 1 2.91 4 3 3 0 0 0-2.91 4H15" />
      <line x1="12" x2="12" y1="17" y2="17" />
    </svg>
  );
}

function LanguageIcon(props) {
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
      <path d="M3 5h12" />
      <path d="M9 3v2" />
      <path d="M4.5 11a7.49 7.49 0 0 1 7.5 7.5v.5H3a9 9 0 0 1 18 0h-1.5" />
      <path d="M17 3.5A7.5 7.5 0 0 1 23 9" />
      <path d="M12.5 17H15" />
    </svg>
  );
}

function ActivityIcon(props) {
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
      <path d="M15 12l4-4-4-4" />
      <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </svg>
  );
}

function SignOutIcon(props) {
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
      <path d="M10 17l-5-5 5-5" />
      <path d="M21 12H9" />
      <path d="M21 21V3" />
    </svg>
  );
}

export default Navbar;
