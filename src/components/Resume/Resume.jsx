import React from 'react'
import "./Resume.module.css";

export const Resume = () => {
  return (
    <div className="loading">
    <style>
      {`
        @keyframes dash_682 {
          72.5% {
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}
    </style>
    <svg height="48px" width="64px">
      <polyline id="back" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
        style={{
          fill: 'none',
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          stroke: '#ff4d5033' // Styling for polyline#back
        }}
      ></polyline>
      <polyline id="front" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
        style={{
          fill: 'none',
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          stroke: '#00ffff', // Styling for polyline#front
          strokeDasharray: '48, 144',
          strokeDashoffset: 192,
          animation: 'dash_682 2s linear infinite',
          animationDelay: '0s'
        }}
      ></polyline>
      <polyline id="front2" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
        style={{
          fill: 'none',
          strokeWidth: 3,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          stroke: '#00ffff', // Styling for polyline#front2
          strokeDasharray: '48, 144',
          strokeDashoffset: 192,
          animation: 'dash_682 2s linear infinite',
          animationDelay: '1s'
        }}
      ></polyline>
    </svg>
  </div>

  
  )
}
export default Resume;