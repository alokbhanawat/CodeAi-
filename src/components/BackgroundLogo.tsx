import React from 'react';

export function BackgroundLogo() {
  return (
    <div className="fixed bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M200 40C240 40 280 80 320 160C360 240 360 280 320 320C280 360 240 360 200 320C160 280 120 240 80 160C40 80 80 40 120 40C160 40 180 60 200 40Z"
          fill="currentColor"
          className="text-gray-200"
        />
      </svg>
    </div>
  );
}