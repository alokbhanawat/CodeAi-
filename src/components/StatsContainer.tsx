import React from 'react';
import { StatsCard } from './StatsCard';
import { CodeAntLogo } from './CodeAntLogo';

export function StatsContainer() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <CodeAntLogo size={24} />
        <h3 className="text-lg font-semibold">AI to Detect & Autofix Bad Code</h3>
      </div>
      <hr className="mb-6" /> {/* Add an HR here */}
      <div className="grid grid-cols-3 gap-8">
        <StatsCard number="30+" label="Language Support" />
        <StatsCard number="10K+" label="Developers" />
        <StatsCard number="100K+" label="Hours Saved" />
      </div>
    </div>
  );
}
