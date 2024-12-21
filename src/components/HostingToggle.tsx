import React from 'react';

interface HostingToggleProps {
  selected: 'saas' | 'self-hosted';
  onSelect: (type: 'saas' | 'self-hosted') => void;
}

export function HostingToggle({ selected, onSelect }: HostingToggleProps) {
  return (
    <div className="flex flex-col gap-4 mb-8 p-1 bg-gray-50 rounded-lg">
      <div className="flex gap-4">
        <button
          onClick={() => onSelect('saas')}
          className={`flex-1 py-2 px-4 rounded-md transition-all ${
            selected === 'saas'
              ? 'bg-blue-600 text-white' // Active (selected) button is blue
              : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white' // Unselected button
          }`}
        >
          SAAS
        </button>
        <button
          onClick={() => onSelect('self-hosted')}
          className={`flex-1 py-2 px-4 rounded-md transition-all ${
            selected === 'self-hosted'
              ? 'bg-blue-600 text-white' // Active (selected) button is blue
              : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white' // Unselected button
          }`}
        >
          Self Hosted
        </button>
      </div>
      {/* Horizontal line */}
      <hr className="mt-2 border-t border-gray-300" />
    </div>
  );
}
