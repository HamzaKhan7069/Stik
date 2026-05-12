import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { GameCard } from '../components/GameCard';
import { GAMES } from '../data/mockData';
import { Gamepad2, PlayCircle, Star, TrendingUp, ShieldCheck, Wallet } from 'lucide-react';

export const HomePage: React.FC = () => {
  const featuredGame = GAMES.find(g => g.id === 're9-requiem') || GAMES[0];
  const trendingDeals = GAMES.slice(1, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${featuredGame.coverImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-primary-container text-white px-3 py-1 rounded-sm text-xs font-bold mb-4 tracking-widest uppercase shadow-lg wine-glow">
              Premier Epic
            </span>
            <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter">
              {featuredGame.title.toUpperCase()}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg font-medium leading-relaxed">
              {featuredGame.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to={`/game/${featuredGame.id}`} className="bg-primary-container text-white px-10 py-5 rounded font-black text-sm wine-glow hover:brightness-110 transition-all active:scale-95 uppercase tracking-widest">
                Get it with EMI — ${featuredGame.emiStartsAt.toFixed(2)}/mo
              </Link>
              <button className="border border-white/20 backdrop-blur-md text-white px-10 py-5 rounded font-black text-sm hover:bg-white/5 transition-all uppercase tracking-widest">
                Full Purchase
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Deals */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-9">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2 text-primary-container">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Live Market</span>
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Trending EMI Deals</h2>
                <p className="text-gray-500 font-medium mt-2">Premium titles optimized for flexible monthly installments.</p>
              </div>
              <Link to="/browse" className="text-primary-container font-black text-sm hover:underline tracking-widest uppercase">
                View All Catalog
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingDeals.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>

            {/* Bento Highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-surface-container-high p-10 flex flex-col justify-end min-h-[350px] border border-outline-variant wine-glow relative overflow-hidden rounded group"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                    <ShieldCheck className="w-48 h-48 text-primary-container" />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-3 text-white tracking-tight">0% Interest EMI</h3>
                    <p className="text-gray-400 mb-8 max-w-sm font-medium">Own any title today and pay over 12 months with zero interest. Exclusive for Pro members.</p>
                    <button className="bg-white text-black px-8 py-3 rounded font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">
                      Upgrade to Pro
                    </button>
                 </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-primary-container p-10 flex flex-col justify-end min-h-[350px] border border-primary relative overflow-hidden rounded group"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                    <Wallet className="w-48 h-48 text-white" />
                 </div>
                 <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-3 text-white tracking-tight">Stik Rewards</h3>
                    <p className="text-white/80 mb-8 max-w-sm font-medium">Earn point on every installment payment. Redeem for DLCs, skins, or your next game purchase.</p>
                    <button className="bg-black text-white px-8 py-3 rounded font-black text-xs uppercase tracking-widest hover:bg-black/80 transition-all">
                      Join Rewards
                    </button>
                 </div>
               </motion.div>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-3 space-y-8">
            <div className="glass-panel border-outline-variant p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-white">Sync Your Library</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">Link your Steam, Epic, or GOG accounts to unlock better EMI terms based on your gaming history.</p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between bg-surface-container-high hover:bg-surface-container-highest p-4 rounded transition-all border border-outline-variant/30 group">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">Steam</span>
                  <span className="text-[10px] font-bold text-primary-container uppercase tracking-tight">Connect</span>
                </button>
                <button className="w-full flex items-center justify-between bg-surface-container-high hover:bg-surface-container-highest p-4 rounded transition-all border border-outline-variant/30 group">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">Epic Games</span>
                  <span className="text-[10px] font-bold text-primary-container uppercase tracking-tight">Connect</span>
                </button>
              </div>
            </div>

            <div className="bg-surface-container/30 border border-outline-variant p-8 rounded">
               <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Market Stats</h3>
               <div className="space-y-6">
                 <div className="flex justify-between items-center">
                   <span className="text-xs font-bold text-gray-400 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500" /> Catalog Avg.
                   </span>
                   <span className="text-sm font-black text-white">-$12.00</span>
                 </div>
                 <div className="h-32 flex items-end gap-1 px-2">
                   {[40, 60, 45, 80, 70, 95, 85].map((h, i) => (
                     <div 
                        key={i} 
                        className="bg-primary-container/80 w-full rounded-t-sm" 
                        style={{ height: `${h}%` }} 
                     />
                   ))}
                 </div>
               </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
