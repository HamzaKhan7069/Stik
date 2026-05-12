import React, { useState } from 'react';
import { GameCard } from '../components/GameCard';
import { GAMES } from '../data/mockData';
import { motion } from 'motion/react';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

export const BrowsePage: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', 'Action', 'RPG', 'Racing', 'FPS', 'Horror', 'Sci-Fi'];

  const filteredGames = selectedGenre === 'All Genres' 
    ? GAMES 
    : GAMES.filter(game => game.genre.includes(selectedGenre));

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-6xl font-black text-white mb-2 tracking-tight">Explore the Store</h1>
          <p className="text-gray-400 font-medium text-lg">Premium titles. Flexible payments. Zero friction.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Genre</label>
             <div className="relative">
                <select 
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="bg-surface-container border border-outline-variant rounded px-4 py-3 text-xs font-bold text-gray-300 focus:ring-1 focus:ring-primary-container outline-none appearance-none pr-10 min-w-[160px] cursor-pointer"
                >
                  {genres.map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
             </div>
          </div>

          <div className="flex flex-col gap-2">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">EMI Tenure</label>
             <div className="relative">
                <select className="bg-surface-container border border-outline-variant rounded px-4 py-3 text-xs font-bold text-gray-300 focus:ring-1 focus:ring-primary-container outline-none appearance-none pr-10 min-w-[160px] cursor-pointer">
                  <option>Up to 24 Months</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
             </div>
          </div>

          <div className="flex flex-col gap-2">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Price Range</label>
             <div className="relative">
                <select className="bg-surface-container border border-outline-variant rounded px-4 py-3 text-xs font-bold text-gray-300 focus:ring-1 focus:ring-primary-container outline-none appearance-none pr-10 min-w-[160px] cursor-pointer">
                  <option>Any Price</option>
                  <option>Under $30</option>
                  <option>$30 - $60</option>
                  <option>$60+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredGames.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <GameCard game={game} />
          </motion.div>
        ))}
      </div>
      
      {filteredGames.length === 0 && (
        <div className="text-center py-48">
          <Gamepad2 className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-500">No games found for this selection.</h3>
        </div>
      )}
    </div>
  );
};
