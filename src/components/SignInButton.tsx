import React from 'react';

interface SignInButtonProps {
  imageSrc: string; // Image source for the icon
  text: string;     // Text displayed on the button
  onClick: () => void; // Function to handle button click
  variant?: 'default' | 'outline'; // Button style variant
  imageAlt: string; // Alt text for the image
}

export function SignInButton({ 
  imageSrc, 
  text, 
  onClick, 
  variant = 'default',  // Default variant is 'default'
  imageAlt
}: SignInButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
        ${variant === 'default' 
          ? 'bg-white text-blue-600 border border-blue-600' // Default state: white background with blue text
          : 'border border-gray-300 text-gray-700'} // Outline variant for secondary buttons
      `}
    >
      {/* Image for the sign-in service */}
      <img src={imageSrc} alt={imageAlt} className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
}
