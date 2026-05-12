import React from 'react';
import { Globe, Share2, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-outline-variant/30 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-2xl font-black text-white">Stik</span>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left font-medium">
            Stik: Play Now, Pay Later. Elevate your gaming experience with premium installment plans and ultra-high fidelity selections.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-primary-container transition-all">About Us</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-primary-container transition-all">Support</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-primary-container transition-all">Privacy Policy</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-primary-container transition-all">Terms of Service</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-primary-container transition-all">FAQ</a>
        </div>

        <div className="flex gap-4">
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary-container hover:text-primary-container transition-all text-gray-400">
            <Globe className="w-5 h-5" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary-container hover:text-primary-container transition-all text-gray-400">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary-container hover:text-primary-container transition-all text-gray-400">
            <Youtube className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-outline-variant/10 text-center text-xs text-gray-500 font-mono italic">
        © 2023 STIK MARKETPLACE. PROFESSIONAL GRADE GAMING FINANCE.
      </div>
    </footer>
  );
};
