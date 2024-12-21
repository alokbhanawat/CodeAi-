export interface Repository {
  name: string;
  language: string;
  size: string;
  updatedAt: string;
  isPrivate: boolean;
}

export const mockRepositories: Repository[] = [
  {
    name: 'design-system',
    language: 'React',
    size: '7320 KB',
    updatedAt: '1 day ago',
    isPrivate: false
  },
  {
    name: 'codeant-ci-app',
    language: 'Javascript',
    size: '5871 KB',
    updatedAt: '2 days ago',
    isPrivate: true
  },
  {
    name: 'analytics-dashboard',
    language: 'Python',
    size: '4521 KB',
    updatedAt: '5 days ago',
    isPrivate: true
  },
  {
    name: 'mobile-app',
    language: 'Swift',
    size: '3096 KB',
    updatedAt: '3 days ago',
    isPrivate: false
  },
  {
    name: 'e-commerce-platform',
    language: 'Java',
    size: '6210 KB',
    updatedAt: '6 days ago',
    isPrivate: true
  },
  {
    name: 'blog-website',
    language: 'HTML/CSS',
    size: '1876 KB',
    updatedAt: '4 days ago',
    isPrivate: false
  },
  {
    name: 'social-network',
    language: 'PHP',
    size: '5432 KB',
    updatedAt: '7 days ago',
    isPrivate: true
  }
];