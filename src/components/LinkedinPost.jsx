import React from 'react';

function AvatarImage(props) {
  return (
    <img className='w-full h-full rounded-full' alt={props.alt} src={props.src} />
  );
}

function Avatar(props) {
  return (
    <div className="avatar h-8 w-8">
      {props.children}
    </div>
  );
}

function Input(props) {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}

function Button(props) {
  return (
    <button
      className={`${props.className} flex items-center justify-center hover:bg-gray-600 pt-2 pb-4`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default function Component() {
  return (
    <div className="bg-[#1A1A1A] rounded-lg pt-4 px-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage alt="User profile" src="/46.jpg" />
        </Avatar>
        <Input
          className="bg-[#333333] text-white placeholder-gray-500 rounded-full py-2 px-4 flex-grow"
          placeholder="Start a post, try writing with AI"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-2">
        <Button className="text-white flex-1">
          <ImageIcon className="text-light h-5 w-5 mr-2" />
          Media
        </Button>
        <Button className="text-white flex-1">
          <CalendarIcon className="text-light h-5 w-5 mr-2" />
          Event
        </Button>
        <Button className="text-white flex-1">
          <DeleteIcon className="text-light h-5 w-5 mr-2" />
          Write article
        </Button>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
