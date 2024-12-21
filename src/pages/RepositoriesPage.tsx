import React, { useState } from 'react';
import { RepositoryList } from '../components/repositories/RepositoryList';
import { Search, RefreshCw, Plus } from 'lucide-react';
import { Sidebar } from '../components/layout/Sidebar';
import { mockRepositories } from '../data/mockRepositories';

export function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main content - Add left margin for desktop sidebar */}
      <div className="flex-1 lg:ml-64">
        <main className="max-w-6xl mx-auto px-4 lg:px-8 py-4 lg:py-8">
          {/* Stack the heading and paragraph above the buttons on mobile */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            {/* Heading and paragraph */}
            <div className="flex flex-col gap-2 mt-16 lg:mt-0"> {/* Increased margin-top to mt-16 for more downward space */}
              <h1 className="text-2xl font-bold mb-1">Repositories</h1>
              <p className="text-gray-600">33 total repositories</p>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-2 mt-4 lg:mt-0">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                <RefreshCw size={16} />
                <span>Refresh All</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                <Plus size={16} />
                <span>Add Repository</span>
              </button>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Repositories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Repository List */}
          <RepositoryList repositories={mockRepositories} />
        </main>
      </div>
    </div>
  );
}
