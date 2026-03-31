import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Game } from '../../types/game';

interface GameCardProps {
  game: Game;
  key?: string;
}

const GameCard = React.memo(({ game }: GameCardProps) => {
  const sizeClasses = {
    large: 'col-span-12 md:col-span-6 row-span-4',
    medium: 'col-span-12 md:col-span-3 row-span-2',
    small: 'col-span-12 md:col-span-2 row-span-2',
    tall: 'col-span-12 md:col-span-3 row-span-4',
  };

  return (
    <Link to={`/game/${game.slug}`} className={cn(sizeClasses[game.size])}>
      <motion.div
        layoutId={game.id}
        whileHover={{ scale: 1.01, rotate: -0.2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative h-full rounded-[1.5rem] p-4 cursor-pointer overflow-hidden border-2 border-black group transition-all duration-300",
          game.color,
          "shadow-[6px_6px_0px_black] hover:shadow-[12px_12px_0px_black] hover:-translate-y-2"
        )}
      >
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" 
             style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 2px, 2px 100%' }} />

        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="max-w-[80%]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] font-mono font-black bg-black text-white px-1.5 py-0.5 rounded uppercase tracking-widest">
                  #{game.id.split('-')[1]}
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-widest opacity-40">Live</span>
                </div>
              </div>
              <h3 className="text-2xl font-black tracking-tighter uppercase italic leading-none mb-2 group-hover:text-black transition-colors">
                {game.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-[4px_4px_0px_white] group-hover:bg-white group-hover:text-black group-hover:shadow-[4px_4px_0px_black] transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>

          <div className="flex items-end justify-between mt-4">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1 max-w-[120px]">
                {game.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[8px] font-black uppercase tracking-tighter border-2 border-black/10 group-hover:border-black/20 px-1.5 py-0.5 rounded transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-0.5 w-8 bg-black/10 group-hover:w-16 group-hover:bg-black/20 transition-all duration-500" />
            </div>
            
            <div className="relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-125 group-hover:bg-white/40 transition-colors" />
              <span className="relative text-[60px] leading-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)] transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 block select-none">
                {game.thumbnail}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});

export default GameCard;
