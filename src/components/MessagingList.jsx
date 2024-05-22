import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Button({ children, size, variant }) {
  return (
    <button className={`button button-${size} button-${variant}`}>
      {children}
    </button>
  );
}

function AvatarImage({ alt, src }) {
  return <img className='w-10 h-10 rounded-full' alt={alt} src={src} />;
}

function Avatar({ children }) {
  return <div className="avatar">{children}</div>;
}

function Input({ className, placeholder, type }) {
  return <input className={className} placeholder={placeholder} type={type} />;
}

const MessagingList = () => {
  const [messages, setMessages] = useState({
    'Olivia Davis': [
      { sender: 'Olivia Davis', text: 'Hey, how\'s it going?', time: '9:15 AM' },
      { sender: 'You', text: 'Hi, Olivia! I\'m doing well, thanks for asking.', time: '9:16 AM' },
      { sender: 'Olivia Davis', text: 'That\'s great to hear! I have a few things I\'d like to discuss with you.', time: '9:17 AM' },
    ],
    'John Doe': [
      { sender: 'John Doe', text: 'Did you see the new design?', time: 'Yesterday' },
      { sender: 'You', text: 'Yes, John! I just checked it out. Looks great!', time: 'Today' },
    ],
    'Jane Smith': [
      { sender: 'Jane Smith', text: 'Let\'s discuss the project', time: '2 days ago' },
      { sender: 'You', text: 'Sure, Jane! When would be a good time for you?', time: 'Yesterday' },
    ],
  });
  const [activeConversation, setActiveConversation] = useState(Object.keys(messages)[0]);
  const [activeConversationImage, setActiveConversationImage] = useState(`https://randomuser.me/api/portraits/${Math.floor(Math.random() * 2) === 0 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`);

  const handleConversationClick = (conversation) => {
    setActiveConversation(conversation);
    // Update the image URL based on the clicked conversation
    setActiveConversationImage(`https://randomuser.me/api/portraits/${Math.floor(Math.random() * 2) === 0 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`);
  };

  return (
    <div className="flex h-screen md:h-3/4 w-full overflow-hidden bg-[#1A1A1A] text-gray-50 mt-4">
      {/* Left Sidebar */}
      <div className="flex w-64 flex-col border-r border-gray-800 bg-[#1A1A1A] py-4 animate-fadeIn">
        {/* Conversation List */}
        <div className="flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold">Conversations</h2>
          <Button size="icon" variant="ghost">
            <PlusIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-4 flex-1 overflow-y-auto">
          <div className="space-y-2 px-4">
            {/* Sample Conversations */}
            {Object.keys(messages).map((conversation, index) => (
              <Link key={index} className="flex items-center gap-3 rounded-md bg-gray-800 p-3 hover:bg-gray-700" onClick={() => handleConversationClick(conversation)}>
                <Avatar>
                  <AvatarImage alt={conversation} src={`https://randomuser.me/api/portraits/${Math.floor(Math.random() * 2) === 0 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`} />
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-medium">{conversation}</h4>
                  <p className="text-sm text-gray-400">{messages[conversation][0].text}</p>
                </div>
                <div className="text-xs text-gray-400">{messages[conversation][0].time}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="flex flex-1 flex-col animate-fadeInlong">
        {/* Chat Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-800 px-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage alt={activeConversation} src={activeConversationImage} />
            </Avatar>
            <h3 className="font-medium">{activeConversation}</h3>
          </div>
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost">
              <SearchIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <DotIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {/* Display messages for active conversation */}
            {activeConversation && messages[activeConversation].map((message, index) => (
              <div key={index} className={`flex items-start gap-4 ${message.sender === 'You' ? 'justify-end' : ''}`}>
                {message.sender !== 'You' && (
                  <Avatar>
                    <AvatarImage alt={message.sender} src={`https://randomuser.me/api/portraits/${Math.floor(Math.random() * 2) === 0 ? 'women' : 'men'}/${Math.floor(Math.random() * 100)}.jpg`} />
                  </Avatar>
                )}
                <div className="flex-1">
                  <div className={`rounded-lg bg-gray-800 p-3 ${message.sender === 'You' ? 'bg-purple-600 text-white' : ''}`}>
                    <p>{message.text}</p>
                  </div>
                  <div className="mt-1 text-xs text-gray-400">{message.time}</div>
                </div>
                {message.sender === 'You' && (
                  <Avatar>
                    <AvatarImage alt={message.sender} src={`/46.jpg`} />
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-800 p-4">
          <div className="flex items-center gap-3">
            <Input className="flex-1 bg-gray-800 focus:bg-gray-700 py-2 px-2 rounded-lg" placeholder="Type your message..." type="text" />
            <Button size="icon" variant="ghost">
              <PaperclipIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <SmileIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <SendIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
  
function DotIcon(props) {
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
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function PaperclipIcon(props) {
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
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
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
  )
}


function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SmileIcon(props) {
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
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}

export default MessagingList;
