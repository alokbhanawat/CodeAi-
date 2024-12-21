import React from 'react';
import logo from '../assets/log.png'; // Import the logo image

interface CodeAntLogoProps {
  size?: number;
}

export function CodeAntLogo({ size = 24 }: CodeAntLogoProps) {
  return (
    <img 
      src={logo} // Use the imported logo image here
      alt="CodeAnt Logo" 
      style={{
        width: `${size}px`, 
        height: `${size}px`,
        filter: 'invert(29%) sepia(15%) saturate(136%) hue-rotate(210deg) brightness(49%) contrast(94%)', // Filter for #181D27 color
      }}
      className="dark:invert"
    />
  );
}
