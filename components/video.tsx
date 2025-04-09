"use client";
import React, { useState } from "react";

const YouTubeSlider = () => {
  // List of video IDs from YouTube
  const videos = [
    "Ntuj3ppPU0c?si=CYQc7XTYelW1CaeI", // Video 1
    "_OaHM_rr88Y?si=Kr_ZT85n_js52eRB", // Video 2
    "z9skuJZbh7M?si=3mPMgBqHTw_x9hwZ", // Video 3
    "RFEWlTcN7K8?si=Gamj1wgCTaYdzkED", // Video 4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  // Move to the next video
  const nextVideo = () => {
    if (isTransitioning) return;
    setSlideDirection("right");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsTransitioning(false);
    }, 500);
  };

  // Move to the previous video
  const prevVideo = () => {
    if (isTransitioning) return;
    setSlideDirection("left");
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Video Slider */}
      <div className="relative overflow-hidden w-full">
        {/* YouTube Embed */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-out ${
              isTransitioning
                ? slideDirection === "right"
                  ? "-translate-x-full"
                  : "translate-x-full"
                : "translate-x-0"
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

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevVideo}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            aria-label="Previous video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextVideo}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            aria-label="Next video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSlider;
