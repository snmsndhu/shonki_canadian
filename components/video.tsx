"use client";
import React, { useState, useEffect } from "react";

const YouTubeSlider = () => {
  // List of video IDs from YouTube
  const videos = [
    "Ntuj3ppPU0c?si=CYQc7XTYelW1CaeI", // Video 1
    "_OaHM_rr88Y?si=Kr_ZT85n_js52eRB", // Video 2
    "z9skuJZbh7M?si=3mPMgBqHTw_x9hwZ", // Video 3
    "RFEWlTcN7K8?si=Gamj1wgCTaYdzkED", // Video 4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Move to the next video
  const nextVideo = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsTransitioning(false);
    }, 800);
  };

  // Auto-scroll effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered && !isTransitioning) {
      interval = setInterval(() => {
        nextVideo();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, isTransitioning]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Video Slider */}
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* YouTube Embed */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-800 ease-in ${
              isTransitioning ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSlider;
