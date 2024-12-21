import React from 'react';

interface StatsCardProps {
  number: string;
  label: string;
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="text-xl font-semibold">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}