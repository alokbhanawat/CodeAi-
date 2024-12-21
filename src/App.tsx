import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StatsContainer } from './components/StatsContainer';
import { IssuesCard } from './components/IssuesCard';
import { SignInSection } from './components/SignInSection';
import { BackgroundLogo } from './components/BackgroundLogo';
import { RepositoriesPage } from './pages/RepositoriesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50 flex">
            <div className="hidden lg:flex lg:w-1/2 bg-white p-12 flex-col relative">
              <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
                <StatsContainer />
                <IssuesCard />
              </div>
              <BackgroundLogo />
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
              <SignInSection />
            </div>
          </div>
        } />
        <Route path="/repositories" element={<RepositoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;