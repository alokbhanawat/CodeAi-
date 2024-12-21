import React from 'react';
import { MoveUp } from 'lucide-react';
import grpImage from '../assets/Grp.png'; // Import the image

export function IssuesCard() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 relative z-20 -mt-4 mx-auto max-w-sm" style={{ marginLeft: '53px', marginRight: '-230px', marginTop: '-3rem' }}>
      <div className="flex items-center justify-between mb-6">
        <div className="bg-white p-3 rounded-full">
          {/* Use the imported image and apply custom height and width */}
          <img 
            src={grpImage} 
            alt="Group" 
            className="w-14 h-14" // Increased width and height to 3.5rem (w-14, h-14)
          />
        </div>
        <div className="flex flex-col items-center text-blue-600 bg-white px-3 py-1 rounded-full text-sm">
          <div className="flex items-center">
            <MoveUp className="w-5 h-5 mr-1 text-blue-800" strokeWidth={3} />  {/* Increased strokeWidth to make the icon bold */}
            <span className="mr-1 font-bold text-blue-800">14%</span>
          </div>
          <span className="text-xs text-blue-800">This week</span>  {/* Placed "This week" below 14% */}
        </div>
      </div>
      <div className="mt-0"> {/* Adjusted margin-top to remove space between sections */}
        <div className="text-sm text-gray-600 mb-2">Issues Fixed</div>
        <div className="text-4xl font-bold">500K+</div>
      </div>
    </div>
  );
}
