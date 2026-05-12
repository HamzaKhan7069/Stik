import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Game } from '../types';
import { motion } from 'motion/react';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-surface-container/50 border border-outline-variant hover:border-primary-container transition-all duration-300 rounded shadow-lg overflow-hidden"
    >
      <Link to={`/game/${game.id}`} className="block relative h-48 overflow-hidden">
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {game.emiStartsAt && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white tracking-widest uppercase">
            EMI Available
          </div>
        )}
      </Link>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary-container transition-colors">
          {game.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {game.genre.map((g) => (
            <span key={g} className="bg-surface-container-high text-gray-400 px-2 py-0.5 text-[9px] rounded font-bold uppercase tracking-tight">
              {g}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-widest">Starting from</p>
            <p className="text-xl font-bold text-primary-container">
              ${game.emiStartsAt.toFixed(2)}<span className="text-sm font-medium text-gray-500 italic ml-1">/mo</span>
            </p>
          </div>
          <button className="p-2 border border-outline-variant hover:bg-primary-container hover:text-white transition-all rounded active:scale-90">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
