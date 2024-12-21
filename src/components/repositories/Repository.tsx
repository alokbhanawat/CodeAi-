import React from 'react';
import type { Repository as RepositoryType } from '../../data/mockRepositories';

export function Repository({ name, language, size, updatedAt, isPrivate }: RepositoryType) {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium text-blue-600">{name}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              isPrivate ? 'bg-gray-100' : 'bg-blue-50 text-blue-600'
            }`}>
              {isPrivate ? 'Private' : 'Public'}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              {language}
              <span className="w-2 h-2 rounded-full bg-current"></span>
            </div>
            <div> {size}</div>
            <div>Updated {updatedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}