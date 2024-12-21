import React from 'react';
import { Repository } from './Repository';
import type { Repository as RepositoryType } from '../../data/mockRepositories';

interface RepositoryListProps {
  repositories: RepositoryType[];
}

export function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="space-y-4">
      {repositories.map((repo) => (
        <Repository key={repo.name} {...repo} />
      ))}
    </div>
  );
}