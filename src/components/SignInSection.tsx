import React, { useState } from 'react';
import { SignInButton } from './SignInButton';
import { Logo } from './Logo';
import { HostingToggle } from './HostingToggle';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo
import a from '../assets/github.png'; // Import the images
import b from '../assets/b.png';
import c from '../assets/c.png';
import d from '../assets/d.png';

export function SignInSection() {
  const [hostingType, setHostingType] = useState<'saas' | 'self-hosted'>('saas');
  const navigate = useNavigate();

  const handleSignIn = (provider: string) => {
    if (provider === 'Github') {
      navigate('/repositories');
    } else {
      console.log(`Signing in with ${provider}`);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      {/* Logo with margin */}
      <div className="flex items-center justify-center mb-6">
        <img src={logo} alt="CodeAnt AI Logo" className="w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold">CodeAnt AI</h1>
      </div>

      <HostingToggle selected={hostingType} onSelect={setHostingType} />

      <div className="space-y-3">
        {hostingType === 'saas' ? (
          <>
            <SignInButton
              imageSrc={a} // GitHub image
              text="Sign in with Github"
              onClick={() => handleSignIn('Github')}
              imageAlt="GitHub Logo"
              variant="outline"
            />
            <SignInButton
              imageSrc={b} // Bitbucket image
              text="Sign in with Bitbucket"
              onClick={() => handleSignIn('Bitbucket')}
              imageAlt="Bitbucket Logo"
              variant="outline"
            />
            <SignInButton
              imageSrc={c} // Azure DevOps image
              text="Sign in with Azure Devops"
              onClick={() => handleSignIn('Azure')}
              imageAlt="Azure DevOps Logo"
              variant="outline"
            />
            <SignInButton
              imageSrc={d} // GitLab image
              text="Sign in with GitLab"
              onClick={() => handleSignIn('GitLab')}
              imageAlt="GitLab Logo"
              variant="outline"
            />
          </>
        ) : (
          <>
            <SignInButton
              imageSrc={d} // Self-hosted GitLab image
              text="Self Hosted GitLab"
              onClick={() => handleSignIn('Self-Hosted-GitLab')}
              imageAlt="GitLab Logo"
              variant="outline"
            />
            <SignInButton
              imageSrc={c} // SSO image
              text="Sign in with SSO"
              onClick={() => handleSignIn('SSO')}
              imageAlt="SSO Logo"
              variant="outline"
            />
          </>
        )}
      </div>

      <p className="text-center text-sm text-gray-600 mt-6">
        By signing up you agree to the{' '}
        <a href="#" className="text-black hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
