import React, { useState } from 'react';

const slides = [
    {
        title: "Revolutionize Your Workflow",
        description: "Streamline your team's processes with our all-in-one platform. Boost productivity and collaboration like never before.",
        imgSrc: "https://images.unsplash.com/photo-1567274333060-04b18e634717?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Unlock Your Team's Potential",
        description: "Our platform empowers your team to collaborate seamlessly, automate workflows, and scale with ease.",
        imgSrc: "https://images.unsplash.com/photo-1682618506692-9db3d6d47059?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpZGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Elevate Your Digital Presence",
        description: "Showcase your brand and connect with your audience through our powerful platform. Reach new heights with our cutting-edge tools.",
        imgSrc: "https://images.unsplash.com/photo-1525693183095-a0134eda619c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpZGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    }
];

export default function CarouselComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden mb-4">
            <div className="flex items-center justify-center space-x-4">
                {slides.map((slide, index) => {
                    const isActive = index === currentIndex;
                    const isPrev = index === (currentIndex - 1 + slides.length) % slides.length;
                    const isNext = index === (currentIndex + 1) % slides.length;

                    return (
                        <div
                            key={index}
                            className={`relative transition-opacity transition-transform duration-500 ${isActive ? 'w-3/4 opacity-100 transform-none z-20' : 'hidden sm:block w-1/4 opacity-50 transform scale-90'} ${isPrev ? 'sm:transform sm:-translate-x-full' : ''} ${isNext ? 'sm:transform sm:translate-x-full' : ''}`}
                        >
                            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                                <img
                                    alt={`Slide ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={slide.imgSrc}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
                            </div>
                            {isActive && (
                                <div className="absolute bottom-4 left-4 space-y-4 text-white transition-opacity">
                                    <h3 className="text-3xl font-bold">{slide.title}</h3>
                                    <p className="text-gray-300">{slide.description}</p>
                                    <div className="flex space-x-2">
                                        <button className="bg-gray-700 hover:bg-purple-600 text-white py-2 px-4 rounded">
                                            Read More
                                        </button>
                                        <div className="flex space-x-2">
                                            <button className="bg-transparent hover:bg-gray-800 text-purple-600 py-2 px-2 rounded" title="Like">
                                                <LikeIcon className="h-6 w-6" />
                                            </button>
                                            <button className="bg-transparent hover:bg-gray-800 text-purple-600 py-2 px-2 rounded" title="Comment">
                                                <CommentIcon className="h-6 w-6" />
                                            </button>
                                            <button className="bg-transparent hover:bg-gray-800 text-purple-600 py-2 px-2 rounded" title="Repost">
                                                <RepostIcon className="h-6 w-6" />
                                            </button>
                                            <button className="bg-transparent hover:bg-gray-800 text-purple-600 py-2 px-2 rounded" title="Share">
                                                <ShareIcon className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="absolute top-4 right-4">
                                <button className="bg-transparent hover:bg-gray-800 text-purple-600 py-2 px-2 rounded" title="More">
                                    <ThreeDotsIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={handlePrev}
                className="absolute left-12 transform -translate-x-full -translate-y-1/2 z-30 bg-transparent hover:bg-gray-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center top-1/2 mt-8"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-12 transform translate-x-full -translate-y-1/2 z-30 bg-transparent hover:bg-gray-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center top-1/2 mt-8"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>
        </div>
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
            className="text-white"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    );
}

function ChevronRightIcon(props) {
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
            className="text-white"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

function LikeIcon(props) {
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
            className="text-white"
        >
            <path d="M19 7.6C19 7.6 17.6667 6 12 6C6.33333 6 5 7.6 5 7.6C3.66667 8.2 3 9.6 3 11C3 13.2 4.33333 14 12 19C19.6667 14 21 13.2 21 11C21 9.6 20.3333 8.2 19 7.6Z" />
        </svg>
    );
}

function CommentIcon(props) {
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
            className="text-white"
        >
            <path d="M21 3H3V21L7 17H21V3Z" />
        </svg>
    );
}

function RepostIcon(props) {
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
            className="text-white"
        >
            <path d="M21 12H3M3 12L9 6M3 12L9 18" />
        </svg>
    );
}

function ShareIcon(props) {
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
            className="text-white"
        >
            <circle cx="18" cy="5.5" r="3" />
            <circle cx="6" cy="18.5" r="3" />
            <line x1="18" y1="8.5" x2="6" y2="15.5" />
            <line x1="18" y1="12" x2="6" y2="18" />
        </svg>
    );
}

function ThreeDotsIcon(props) {
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
            className="text-white"
        >
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19.5" cy="12" r="1.5" />
            <circle cx="4.5" cy="12" r="1.5" />
        </svg>
    );
}