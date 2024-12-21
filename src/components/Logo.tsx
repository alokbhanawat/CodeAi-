import React from 'react';
import { Bot } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <Bot className="w-8 h-8" />
      <span className="text-2xl font-semibold">CodeAnt AI</span>
    </div>
  );
}