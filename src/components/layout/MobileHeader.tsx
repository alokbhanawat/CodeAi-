import React from 'react';
import { Menu, X } from 'lucide-react';
import { CodeAntLogo } from '../CodeAntLogo';

interface MobileHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileHeader({ isOpen, onToggle }: MobileHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
      <div className="flex items-center gap-2">
        <CodeAntLogo size={32} />
        <span className="font-semibold text-lg">CodeAnt AI</span>
      </div>
      <button onClick={onToggle} className="lg:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}