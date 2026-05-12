import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Gamepad2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Store', path: '/' },
    { name: 'Browse', path: '/browse' },
    { name: 'Deals', path: '/deals' },
    { name: 'EMI Plans', path: '/plans' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl h-[80px] border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
               <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
                 <div className="w-1 h-8 bg-red-500 rounded-full" />
                 <div className="absolute w-6 h-6 border-2 border-red-400 rounded-full opacity-50" />
               </div>
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">Stik</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary-container",
                  location.pathname === link.path ? "text-primary-container border-b-2 border-primary-container pb-1" : "text-gray-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search games..."
              className="bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 text-sm w-[280px] focus:ring-1 focus:ring-primary-container transition-all outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-primary-container transition-all">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <Link to="/dashboard" className="h-10 w-10 rounded-full border-2 border-primary-container overflow-hidden active:opacity-80 active:scale-95 transition-all">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH87hbWpiqrHlKhKCbA_usaMB1TdLiW3xTZKs7wlFgD4Z0lGMDpA_Ul18E2GP_3Yok5bIa55rHC6UY-KpXkHI9mm57_7M4A5lVkV5wrM5Ob3VKed3SmlA5Gt6kK2_dYYsb_iL0RtwClXURoJxusi5ajsj2yEV8mhktxdyU9w8aC2JWU_IeDrhyfdOjig4zNIwJx14qD-H1epiTWIiiRtribmlqdPr8VInN1Bhs2x0dWbjwXKgBxbG1tyXot67hfNiP9K1ctXE4-kjZ"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
