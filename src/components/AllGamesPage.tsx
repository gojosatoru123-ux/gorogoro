import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, Filter } from 'lucide-react';
import { GAMES } from '../data/games';
import GameCard from './ui/GameCard';
import AdSpace from './AdSpace';
import Marquee from './Marquee';
import SEO from './SEO';
import { cn } from '../lib/utils';

const ITEMS_PER_PAGE = 24;

const AllGamesPage = memo(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const loaderRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Physics', 'Arcade', 'Puzzle', 'Action'];

  const filteredGames = useMemo(() => {
    return GAMES.filter(g => {
      const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || g.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const visibleGames = filteredGames.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredGames.length) {
          setVisibleCount(prev => prev + ITEMS_PER_PAGE);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, filteredGames.length]);

  // Reset count when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
    window.scrollTo(0, 0);
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <SEO 
        title="All Games | GORO GORO" 
        description="Browse our complete archive of pixel-perfect games and physics simulations. From Wordle to Tetris, find your next favorite game."
        canonical="https://ais-pre-zg3qzj4qo7vn7aj2mmmoo3-293044114194.asia-east1.run.app/games"
      />
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="w-10 h-10 bg-black border-4 border-black shadow-[2px_2px_0px_#FF6321] rounded-lg flex items-center justify-center shrink-0 hover:-translate-y-0.5 transition-transform">
              <ArrowLeft className="w-6 h-6 text-white" />
            </Link>
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">The Archive</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="SEARCH 200+ SIMULATIONS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-2 border-black rounded-lg text-xs font-bold focus:outline-none focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase italic text-slate-400">
              {filteredGames.length} Games Found
            </span>
          </div>
        </div>
      </header>

      <Marquee />

      <main className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-4 space-y-4">
        <AdSpace className="w-full h-[80px] mb-4" label="Top Archive Banner" />
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-xs font-black uppercase italic">
            <Filter className="w-4 h-4" /> Filter By:
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-xl text-xs font-black uppercase italic transition-all border-2 border-black shadow-[4px_4px_0px_black]",
                activeCategory === cat 
                  ? "bg-[#FF6321] text-white -translate-y-1 shadow-[6px_6px_0px_black]" 
                  : "bg-white text-slate-500 hover:bg-slate-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="bento-grid">
          {visibleGames.map((game, index) => (
            <React.Fragment key={game.id}>
              <GameCard 
                game={{
                  ...game,
                  // Dynamic sizing for a "amazing" look
                  size: index % 12 === 0 ? 'large' : index % 7 === 0 ? 'tall' : index % 4 === 0 ? 'medium' : 'small'
                }} 
              />
              {index % 12 === 11 && (
                <div className="col-span-12 md:col-span-4 row-span-2">
                  <AdSpace className="w-full h-full" label="In-Grid Ad" />
                </div>
              )}
              {index % 20 === 19 && (
                <div className="col-span-12">
                  <AdSpace className="w-full h-[100px]" label="Horizontal Grid Ad" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Infinite Scroll Loader */}
        <div 
          ref={loaderRef} 
          className="py-12 flex flex-col items-center justify-center gap-4"
        >
          {visibleCount < filteredGames.length ? (
            <>
              <div className="w-12 h-12 border-4 border-slate-200 border-t-orange-500 rounded-full animate-spin" />
              <p className="text-xs font-black uppercase italic text-slate-400 animate-pulse">Loading More Pixels...</p>
            </>
          ) : (
            <div className="text-center space-y-4">
              <span className="text-4xl">🏁</span>
              <p className="text-xl font-black uppercase italic text-slate-400">You've reached the end of the paradise.</p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-3 bg-black text-white rounded-xl font-black uppercase italic hover:bg-orange-500 transition-colors"
              >
                Back to Top
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-black py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © 2026 GORO GORO • THE ULTIMATE ARCHIVE
          </p>
        </div>
      </footer>
    </div>
  );
});

export default AllGamesPage;
