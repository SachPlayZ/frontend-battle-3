import React, { useState, useEffect } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

const ConnectionList = () => {
  const [recommendedConnections, setRecommendedConnections] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);

  useEffect(() => {
    // Fetch recommended connections
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        const users = data.results.map(user => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          position: `${user.location.state}, ${user.location.country}`, // Placeholder Location
          avatar: user.picture.medium,
        }));
        setRecommendedConnections(users);
      })
      .catch(error => console.error('Error fetching data:', error));

    // Fetch connected users
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => {
        const users = data.results.map(user => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          position: `${user.location.city}, ${user.location.state}`,
          avatar: user.picture.medium,
        }));
        setConnectedUsers(users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddConnection = (user) => {
    setConnectedUsers(prevConnectedUsers => [...prevConnectedUsers, user]);
    setRecommendedConnections(prevRecommendedConnections =>
      prevRecommendedConnections.filter(connection => connection.id !== user.id)
    );
  };

  const handleRemoveConnection = (userId) => {
    setConnectedUsers(prevConnectedUsers =>
      prevConnectedUsers.filter(user => user.id !== userId)
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Your Connections</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {connectedUsers.map((user) => (
            <div
              key={user.id}
              className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 flex items-center animate-fadeIn"
            >
              <div className="flex-shrink-0 mr-4">
                <img
                  alt="User Avatar"
                  className="rounded-full"
                  height={48}
                  src={user.avatar}
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-50">{user.name}</h3>
                <p className="text-sm text-gray-400">{user.position}</p>
              </div>
              <div className="flex-shrink-0">
                <button
                  className="flex justify-center items-center gap-3 text-gray-400 border-2 rounded-lg p-2 hover:bg-red-600 hover:text-gray-50"
                  onClick={() => handleRemoveConnection(user.id)}
                >
                  <XMarkIcon className="h-4 w-4" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Recommended Connections</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {recommendedConnections.map((connection) => (
            <div
              key={connection.id}
              className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 flex items-center animate-fadeIn"
            >
              <div className="flex-shrink-0 mr-4">
                <img
                  alt="Connection Avatar"
                  className="rounded-full"
                  height={48}
                  src={connection.avatar}
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-50">{connection.name}</h3>
                <p className="text-sm text-gray-400">{connection.position}</p>
              </div>
              <div className="flex-shrink-0">
                <button
                  className="flex justify-center items-center gap-3 hover:bg-purple-600 text-gray-400 hover:text-gray-50 border-2 rounded-lg p-2"
                  onClick={() => handleAddConnection(connection)}
                >
                  <PlusIcon className="h-4 w-4" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionList;
