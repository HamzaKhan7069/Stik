import React from 'react';
import { motion } from 'motion/react';
import { INSTALLMENTS, ACTIVITIES, WISHLIST } from '../data/mockData';
import { Wallet, History, Smartphone, LayoutGrid, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-screen">
      <header className="mb-12">
        <h1 className="text-6xl font-black text-white tracking-tight uppercase">Command Center</h1>
        <p className="text-gray-400 font-medium text-lg mt-2 tracking-wide">Manage your high-fidelity library and financial commitments.</p>
      </header>

      <div className="grid grid-cols-12 gap-gutter">
        {/* Main Section */}
        <div className="col-span-12 lg:col-span-8 space-y-gutter">
          {/* Installments Table */}
          <section className="glass-panel p-10 rounded-xl wine-glow">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight uppercase">My Installments</h2>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-2">Active Payment Plans</p>
              </div>
              <button className="bg-primary-container text-white px-8 py-3 rounded font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2">
                <Wallet className="w-4 h-4" /> Pay Dues
              </button>
            </div>

            <div className="space-y-6">
              {INSTALLMENTS.map((inst) => (
                <div key={inst.id} className="bg-surface-container-high/50 border border-outline-variant/30 p-6 rounded group hover:border-primary-container/50 transition-all">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-20 h-28 bg-surface-container-highest rounded overflow-hidden flex-shrink-0 grayscale-[0.5] group-hover:grayscale-0 transition-all">
                       <div className="w-full h-full bg-primary-container/20 flex items-center justify-center">
                          <LayoutGrid className="w-8 h-8 text-white opacity-20" />
                       </div>
                    </div>
                    
                    <div className="flex-grow w-full">
                      <div className="flex justify-between items-start mb-3">
                         <h3 className="text-xl font-black text-white uppercase tracking-tight">{inst.gameTitle}</h3>
                         <div className="text-right">
                            <span className="text-2xl font-black text-white">${inst.monthlyAmount}</span>
                            <span className="text-xs font-bold text-gray-500 italic ml-1">/mo</span>
                         </div>
                      </div>
                      
                      <div className="w-full bg-surface-container rounded-full h-1.5 mb-4 group-hover:h-2 transition-all overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${(inst.paidInstallments / inst.totalInstallments) * 100}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="bg-primary-container h-full rounded-full wine-glow" 
                        />
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                        <span>Progress: {inst.paidInstallments} of {inst.totalInstallments} Months</span>
                        <span className="flex items-center gap-2">
                           <Clock className="w-3 h-3" /> Next Due: {inst.nextDueDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Activity Grid */}
          <section className="glass-panel p-10 rounded-xl">
             <h2 className="text-xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
               <History className="w-6 h-6 text-primary-container" /> Recent Activity
             </h2>
             <div className="grid md:grid-cols-2 gap-4">
                {ACTIVITIES.map((act) => (
                  <div key={act.id} className="flex items-center gap-5 p-5 border border-outline-variant/20 bg-surface-container-high/20 rounded hover:bg-surface-container-high/40 transition-colors cursor-default">
                    <div className="bg-surface-container-highest p-3 rounded">
                      {act.type === 'payment' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      {act.type === 'wishlist' && <LayoutGrid className="w-5 h-5 text-primary-container" />}
                      {act.type === 'sync' && <Smartphone className="w-5 h-5 text-blue-500" />}
                      {act.type === 'login' && <ShieldCheck className="w-5 h-5 text-gray-400" />}
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{act.title}</p>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mt-1">{act.timestamp} • {act.details}</p>
                    </div>
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-4 space-y-gutter">
           <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-8">Linked Services</h3>
              <div className="space-y-4">
                 {['Steam', 'Epic Games', 'GOG.com'].map((service, i) => (
                   <div key={service} className="p-4 rounded bg-surface-container border border-outline-variant/30 flex items-center justify-between group hover:border-primary-container transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-black flex items-center justify-center border border-white/5">
                           <LayoutGrid className="w-4 h-4 text-white opacity-50" />
                        </div>
                        <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{service}</span>
                      </div>
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-tighter transition-all",
                        i !== 1 ? "text-primary-container" : "text-gray-600 group-hover:text-gray-400"
                      )}>
                        {i !== 1 ? 'Connected' : 'Link Account'}
                      </span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-panel p-8 rounded-xl flex flex-col min-h-full">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Wishlist</h3>
                <span className="text-[10px] bg-primary-container px-2 py-0.5 rounded font-black">12 ITEMS</span>
              </div>
              
              <div className="space-y-8 flex-grow">
                 {WISHLIST.map((item) => (
                    <div key={item.id} className="flex gap-4 group cursor-pointer">
                      <div className="w-16 h-20 bg-surface-container-high rounded overflow-hidden flex-shrink-0 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105 transition-all">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-sm font-black text-white group-hover:text-primary-container transition-colors tracking-tight">{item.title}</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase mt-1 tracking-tighter font-mono">
                           ${item.price} or ${item.monthlyPrice}/mo
                        </p>
                      </div>
                    </div>
                 ))}
              </div>

              <button className="w-full mt-12 py-3 border border-outline-variant hover:bg-surface-container-high hover:border-gray-500 text-xs font-black text-gray-400 uppercase tracking-widest transition-all rounded active:scale-[0.98]">
                 View Full List
              </button>
           </div>
        </aside>
      </div>
    </div>
  );
};
