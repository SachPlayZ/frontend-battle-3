import React from 'react';

const NotificationList = () => {
  // Dummy notifications
  const notifications = [
    {
      id: '1',
      user: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      message: 'Liked your post',
      time: '2 hours ago',
    },
    {
      id: '2',
      user: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      message: 'Commented on your post',
      time: '3 hours ago',
    },
    {
      id: '3',
      user: 'Sam Smith',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      message: 'Followed you',
      time: '5 hours ago',
    },
    {
      id: '4',
      user: 'Emily Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      message: 'Shared your post',
      time: '1 day ago',
    },
    {
      id: '5',
      user: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      message: 'Liked your comment',
      time: '2 days ago',
    },
    {
      id: '6',
      user: 'Alice Williams',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      message: 'Reposted a photo',
      time: '3 days ago',
    },
    {
      id: '7',
      user: 'Robert Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      message: 'Viewed your profile',
      time: '4 days ago',
    },
    {
      id: '8',
      user: 'Sophia Lee',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      message: 'Congratulations on starting an additional position!',
      time: '5 days ago',
    },
    {
      id: '9',
      user: 'Chris Evans',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      message: 'Reacted to your story',
      time: '6 days ago',
    },
    {
      id: '10',
      user: 'Olivia Taylor',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      message: 'Sent you a message',
      time: '1 week ago',
    },
    {
      id: '11',
      user: 'Daniel Brown',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      message: 'Tagged you in a post',
      time: '2 weeks ago',
    },
    {
      id: '12',
      user: 'Ella Davis',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      message: 'Invited you to an event',
      time: '3 weeks ago',
    },
  ];
  
  return (
    <div className="container mx-auto py-4">
      <div className="bg-[gray-900] dark:bg-[#1A1A1A] shadow-md rounded-lg py-6">
        <h1 className="text-2xl font-bold text-gray-50 ps-6">Notifications</h1>
        <div className="mt-4">
          {notifications.map((notification, index) => (
            <div key={notification.id} className={`px-6 flex animate-fadeIn items-center justify-between py-2 ${index === notifications.length - 1 ? '' : 'border-b border-gray-700'} hover:bg-gray-800 rounded`}>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full" src={notification.avatar} alt="User Avatar" />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-50">{notification.user}</p>
                  <p className="text-sm text-gray-400">{notification.message}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">{notification.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationList;