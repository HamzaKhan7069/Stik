import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GAMES } from '../data/mockData';
import { motion } from 'motion/react';
import { ShoppingBag, ChevronLeft, Calendar, Tag, Monitor, Cpu, HardDrive, ShieldCheck, Check } from 'lucide-react';
import { cn } from '../lib/utils';

export const GameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const game = GAMES.find(g => g.id === id);
  const [selectedPlan, setSelectedGenre] = useState('flex');

  if (!game) return <div>Game not found</div>;

  return (
    <div className="pt-[80px]">
      {/* Backdrop Hero */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[0.3] brightness-[0.4]"
          style={{ backgroundImage: `url('${game.coverImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end px-6 pb-16 max-w-7xl mx-auto">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
           >
            <Link to="/browse" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
              <ChevronLeft className="w-4 h-4" /> Back to Store
            </Link>
            <h1 className="text-6xl font-black text-white mb-4 tracking-tighter uppercase">{game.title}</h1>
            <p className="text-xl text-gray-300 max-w-xl font-medium leading-relaxed mb-8">
              {game.description.split('.')[0]}. Experience it today with Stik EMI.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <div className="bg-surface-container-high px-8 py-6 rounded border border-outline-variant wine-glow flex flex-col items-start gap-1">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Starting At</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">${game.emiStartsAt.toFixed(2)}</span>
                  <span className="text-primary-container font-black text-lg italic">/mo</span>
                </div>
              </div>

               <div className="flex gap-4">
                  <button className="bg-primary-container text-white px-10 py-5 rounded font-black text-sm wine-glow hover:brightness-110 transition-all flex items-center gap-3 active:scale-95 uppercase tracking-widest">
                    <ShoppingBag className="w-5 h-5" /> Get it with EMI
                  </button>
                  <button className="border border-white/20 text-white px-10 py-5 rounded font-black text-sm hover:bg-white/5 transition-all uppercase tracking-widest">
                    Full Purchase — ${game.price}
                  </button>
               </div>
            </div>
           </motion.div>
        </div>
      </section>

      {/* Main Info */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-12 gap-gutter">
        <div className="col-span-12 lg:col-span-8 space-y-16">
          {/* Screenshots */}
          {game.screenshots.length > 0 && (
            <div className="grid grid-cols-2 gap-4 aspect-[16/9]">
              <div className="col-span-1">
                <img src={game.screenshots[0]} alt="Screenshot" className="w-full h-full object-cover rounded border border-outline-variant hover:border-primary-container transition-all" />
              </div>
              <div className="col-span-1 grid grid-rows-2 gap-4">
                <img src={game.screenshots[1]} alt="Screenshot" className="w-full h-full object-cover rounded border border-outline-variant hover:border-primary-container transition-all" />
                <img src={game.screenshots[2]} alt="Screenshot" className="w-full h-full object-cover rounded border border-outline-variant hover:border-primary-container transition-all" />
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">About the Game</h2>
            <div className="text-gray-400 text-lg leading-relaxed font-medium space-y-4">
              <p>{game.description}</p>
              <p>With Stik's exclusive EMI plans, the latest gaming experiences are more accessible than ever. Don't wait for the next sale—start your journey tonight for the price of a coffee per week.</p>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-surface-container/50 border border-outline-variant p-10 rounded-lg">
             <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-wider">
               <Monitor className="w-6 h-6 text-primary-container" /> System Requirements
             </h3>
             <div className="grid md:grid-cols-2 gap-12">
               <div>
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] block mb-4">Minimum</span>
                 <ul className="space-y-3 text-sm text-gray-400 font-medium">
                   {game.systemRequirements.minimum.map((req, i) => <li key={i}>{req}</li>)}
                 </ul>
               </div>
               <div>
                  <span className="text-[10px] font-black text-primary-container uppercase tracking-[0.2em] block mb-4">Recommended</span>
                  <ul className="space-y-3 text-sm text-gray-400 font-medium">
                   {game.systemRequirements.recommended.map((req, i) => <li key={i}>{req}</li>)}
                 </ul>
               </div>
             </div>
          </div>
        </div>

        {/* Action Sidebar */}
        <aside className="col-span-12 lg:col-span-4 space-y-8">
           <div className="bg-surface-container-high border border-outline-variant p-8 rounded wine-glow sticky top-28">
             <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">Choose Your Plan</h3>
             
             <div className="space-y-4">
                <div 
                  onClick={() => setSelectedGenre('flex')}
                  className={cn(
                    "p-5 rounded border-2 transition-all cursor-pointer group",
                    selectedPlan === 'flex' ? "border-primary-container bg-primary-container/10" : "border-outline-variant bg-surface-container hover:border-gray-500"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={cn("text-xs font-black uppercase tracking-widest", selectedPlan === 'flex' ? "text-primary-container" : "text-gray-400")}>Stik EMI Flex</span>
                    {selectedPlan === 'flex' && <Check className="w-4 h-4 text-primary-container" />}
                  </div>
                  <div className="text-2xl font-black text-white">${game.emiStartsAt.toFixed(2)} /mo</div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">12 Months Installment Plan</p>
                </div>

                <div 
                  onClick={() => setSelectedGenre('std')}
                  className={cn(
                    "p-5 rounded border-2 transition-all cursor-pointer group",
                    selectedPlan === 'std' ? "border-primary-container bg-primary-container/10" : "border-outline-variant bg-surface-container hover:border-gray-500"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={cn("text-xs font-black uppercase tracking-widest", selectedPlan === 'std' ? "text-primary-container" : "text-gray-400")}>Standard EMI</span>
                    {selectedPlan === 'std' && <Check className="w-4 h-4 text-primary-container" />}
                  </div>
                  <div className="text-2xl font-black text-white">${(game.emiStartsAt * 1.5).toFixed(2)} /mo</div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">6 Months Installment Plan</p>
                </div>

                <div 
                  onClick={() => setSelectedGenre('full')}
                  className={cn(
                    "p-5 rounded border-2 transition-all cursor-pointer group",
                    selectedPlan === 'full' ? "border-primary-container bg-primary-container/10" : "border-outline-variant bg-surface-container hover:border-gray-500"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={cn("text-xs font-black uppercase tracking-widest", selectedPlan === 'full' ? "text-primary-container" : "text-gray-400")}>Full Purchase</span>
                    {selectedPlan === 'full' && <Check className="w-4 h-4 text-primary-container" />}
                  </div>
                  <div className="text-2xl font-black text-white">${game.price}</div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">One-time payment</p>
                </div>
             </div>

             <button className="w-full bg-white text-black py-5 rounded font-black text-sm uppercase tracking-[0.2em] mt-8 hover:bg-gray-200 transition-all active:scale-[0.98]">
               Proceed to Checkout
             </button>

             <div className="flex items-center justify-center gap-3 mt-12 py-8 border-y border-outline-variant/30">
               <div className="flex flex-col items-center gap-1 group cursor-default">
                  <Calendar className="w-5 h-5 text-primary-container group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Released {game.releaseDate}</span>
               </div>
               <div className="w-[1px] h-8 bg-outline-variant/30 mx-2" />
               <div className="flex flex-col items-center gap-1 group cursor-default">
                  <Tag className="w-5 h-5 text-primary-container group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{game.genre.join(', ')}</span>
               </div>
             </div>
           </div>

           <div className="bg-gradient-to-br from-primary-container/30 to-background border border-outline-variant p-8 rounded relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-lg font-black text-white mb-2 tracking-tight">The Stik Advantage</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">0% interest on all EMI plans for first-time premium subscribers including {game.title}.</p>
              </div>
              <ShieldCheck className="absolute -bottom-4 -right-4 w-24 h-24 text-white opacity-5 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
           </div>
        </aside>
      </section>
    </div>
  );
};
