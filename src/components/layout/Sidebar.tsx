import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Code2, Cloud, HelpCircle, Settings, PhoneCall, LogOut, X } from 'lucide-react';
import { CodeAntLogo } from '../CodeAntLogo';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Repositories', path: '/repositories' },
    { icon: Code2, label: 'AI Code Review', path: '/code-review' },
    { icon: Cloud, label: 'Cloud Security', path: '/security' },
    { icon: HelpCircle, label: 'How to Use', path: '/help' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const bottomMenuItems = [
    { icon: PhoneCall, label: 'Support', path: '/support' },
    { icon: LogOut, label: 'Logout', path: '/logout' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Header */}
      <div className="absolute top-0 right-0 p-4 bg-white border-b border-gray-200 lg:hidden w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CodeAntLogo size={32} />
            <span className="font-semibold text-lg">CodeAnt AI</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu - Slides from top */}
      <div className={`
        fixed inset-x-0 top-0 h-screen bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <div className="h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <CodeAntLogo size={32} />
              <span className="font-semibold text-lg">CodeAnt AI</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>

          {/* User Selector */}
          <div className="p-4 border-b border-gray-200">
            <select className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
              <option>UtkarshDhairyaPanwar</option>
            </select>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${isActive(item.path)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Menu Items */}
          <div className="mt-auto p-4 border-t border-gray-200">
            <ul className="space-y-2">
              {bottomMenuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <CodeAntLogo size={32} />
            <span className="font-semibold text-lg">CodeAnt AI</span>
          </div>
          <div className="mt-4">
            <select className="w-full p-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
              <option>UtkarshDhairyaPanwar</option>
            </select>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <ul className="space-y-2">
            {bottomMenuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
