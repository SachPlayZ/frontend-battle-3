import React from 'react';

const LinkedInPostcard = ({ posts }) => {
  return (
    <div className="flex flex-col space-y-6">
      {posts.map((post, index) => (
        <div key={index} className="bg-[#1A1A1A] rounded-lg p-6 flex flex-col space-y-4 mx-8 md:mx-0">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 flex-shrink-0">
              <img src={post.profile_picture} alt="Profile" className="w-full h-full rounded-full" />
            </div>
            <div className="flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-white">{post.name}</h2>
              <p className="text-gray-400">{post.position}</p>
              <p className="text-gray-400">{post.time}</p>
              <p className="text-gray-300 mt-2">{post.post_content}</p>
              {post.picture && (
                <div className="mt-4">
                  <img src={post.picture} alt="Post" className="w-full rounded-lg" />
                </div>
              )}
            </div>
          </div>
          <div className="flex mt-4 space-x-4">
            <button className="flex items-center space-x-2 text-gray-300 hover:bg-gray-600 p-2 rounded-lg">
              <i className="far fa-thumbs-up"></i> <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-300 hover:bg-gray-600 p-2 rounded-lg">
              <i className="far fa-comment"></i> <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-300 hover:bg-gray-600 p-2 rounded-lg">
              <i className="far fa-share-square"></i> <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkedInPostcard;
