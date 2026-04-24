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
    large: 'col-span-12 md:col-span-7 row-span-6',
    medium: 'col-span-12 md:col-span-7 row-span-4',
    small: 'col-span-12 md:col-span-3 row-span-3',
    tall: 'col-span-12 md:col-span-2 row-span-4',
  };

  /**
   * Third-party Screenshot Logic (Microlink)
   * This takes the game.url and returns a live screenshot.
   * We add filters like 'quality: 80' and 'screenshot: true'
   */
  const screenshotUrl = game.image || `https://i.microlink.io/${encodeURIComponent(
    `https://api.microlink.io/?url=${game.url}&screenshot=true&meta=false&embed=screenshot.url`
  )}`;

  return (
    <Link to={`/game/${game.slug}`} className={cn(sizeClasses[game.size])}>
      <motion.div
        layoutId={game.id}
        whileHover={{ scale: 1.01, rotate: -0.2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative h-full rounded-[1.5rem] p-4 cursor-pointer overflow-hidden border-2 border-black group transition-all duration-300",
          game.color || "bg-zinc-800",
          "shadow-[6px_6px_0px_black] hover:shadow-[12px_12px_0px_black] hover:-translate-y-2"
        )}
      >
        {/* Screenshot Background Layer */}
        <div className="absolute inset-0 z-0 bg-zinc-900">
          <img 
            src={screenshotUrl} 
            alt={`${game.title} preview`} 
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 group-hover:opacity-70 filter contrast-[1.1] brightness-[0.8]"
          />
          {/* Gradient Overlay for Legibility
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" /> */}
        </div>

        {/* Retro Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" 
             style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))', backgroundSize: '100% 2px, 2px 100%' }} />

        {/* UI Content Layer */}
        <div className="relative z-30 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="max-w-[80%]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] font-mono font-black bg-white text-black px-1.5 py-0.5 rounded uppercase tracking-widest shadow-[2px_2px_0px_black]">
                  #{game.id.split('-')[1]}
                </span>
                <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-white">Live</span>
                </div>
              </div>
              <h3 className="text-2xl font-black tracking-tighter uppercase italic leading-none mb-2 text-white group-hover:text-yellow-400 transition-colors drop-shadow-[3px_3px_0px_black]">
                {game.title}
              </h3>
            </div>
            
            <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_black] group-hover:bg-yellow-400 group-hover:shadow-[4px_4px_0px_black] transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-6 h-6 stroke-[3]" />
            </div>
          </div>

          <div className="flex items-end justify-between mt-4">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1 max-w-[120px]">
                {game.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-tighter bg-black border-2 border-white/20 text-white px-2 py-0.5 rounded shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-1 w-8 bg-yellow-400 group-hover:w-16 transition-all duration-500 shadow-[2px_2px_0px_black]" />
            </div>
            
            <div className="relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full scale-150 group-hover:bg-yellow-400/40 transition-colors" />
              <span className="relative text-[64px] leading-none drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 block select-none">
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