import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import ReactPlayer from 'react-player';

export default function Player() {
    const location = useLocation();
    const navigate = useNavigate();
  
    return (
      <div className="w-11/12 h-screen flex flex-col items-center justify-center bg-black">
        <button
          onClick={() => navigate('/')}
          className="mb-4 px-4 py-2 bg-white text-black rounded-lg"
        >
          Back
        </button>
        <ReactPlayer
          url="https://www.example.com/video.mp4"
          playing
          controls
          width="100%"
          height="80%"
          style={{ maxHeight: '100%' }}
        />
        <div className="text-white mt-4 absolute bottom-4">
          {location.state?.selectedContent?.text || 'No content selected'}
        </div>
      </div>
    );
}
