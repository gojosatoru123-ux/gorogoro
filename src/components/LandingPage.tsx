import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight
} from 'lucide-react';
import { GAMES } from '../data/games';
import GameCard from './ui/GameCard';
import AdSpace from './AdSpace';
import Marquee from './Marquee';
import SEO from './SEO';
import { cn } from '../lib/utils';

const TAGS = ['Game', 'Open-world', 'Explore', 'Sale', 'Adventure', 'Collection', 'Pokemon', 'Gaming', 'Pixel', 'Physics', 'Gravity', 'Simulation'];

const LandingPage = memo(() => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const physicsGames = GAMES.filter(g => g.category === 'WebCam').slice(0, 8);
  const trendingGames = GAMES.filter(g => g.category !== 'Physics').slice(0, 5);

  const filteredGames = GAMES.filter(g => {
    const matchesCategory = activeCategory === 'All' || g.category === activeCategory;
    return matchesCategory;
  });

  const categories = ['All', 'Physics', 'Arcade', 'Puzzle', 'Action'];

  // Find a good hero game
  const heroGame = GAMES.find(g => g.slug === 'word-ladder') || GAMES[0];

  return (
    <div className="min-h-screen bg-[#FDFDFD] overflow-x-hidden">
      <SEO />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="w-10 h-10 bg-[#FF6321] border-4 border-black shadow-[2px_2px_0px_black] rounded-lg flex items-center justify-center shrink-0 hover:-translate-y-0.5 transition-transform">
              <span className="text-xl">🍄</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6 font-black text-slate-900 uppercase tracking-tighter italic">
              <Link to="/about" className="hover:text-orange-500 transition-colors text-xl">About Us</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/games" className="px-6 py-2 bg-black text-white border-2 border-black shadow-[2px_2px_0px_#FF6321] rounded-lg text-xs font-black uppercase italic hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
              Play Now
            </Link>
          </div>
        </div>
      </header>

      <Marquee />

      <main className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-4 space-y-8">
        <AdSpace className="w-full h-[80px] mb-4" label="Top Header Ad" />
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
            <div className="flex-1">
              <div className="inline-block px-6 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-[0.3em] italic mb-8 shadow-[4px_4px_0px_#FF6321]">
                Welcome to the Future
              </div>
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.75] uppercase italic mb-10 relative">
                Goro <br /> <span className="text-stroke">Goro</span>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-300 rounded-2xl border-4 border-black rotate-12 animate-float flex items-center justify-center text-4xl shadow-[6px_6px_0px_black]">
                  🕹️
                </div>
              </h1>
              <p className="text-2xl font-medium text-slate-600 max-w-2xl leading-tight border-l-8 border-orange-500 pl-8">
                The world's most advanced playground for amazing browser games. <span className="text-black font-black">50+ simulations</span> ready to break the laws of nature.
              </p>
            </div>
            <div className="w-full lg:w-1/3 space-y-4">
              <div className="p-6 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_black] rounded-[2rem] rotate-1 hover:rotate-0 transition-transform">
                <h4 className="text-xl font-black uppercase italic mb-1">Daily Drop</h4>
                <p className="font-bold text-xs leading-tight">Tired of the same old loops? Break free with GOROGORO’s one-of-a-kind library.</p>
              </div>
              <AdSpace className="w-full h-[180px] brutal-border bg-white" label="Featured Sponsor" />
              <AdSpace className="w-full h-[100px] brutal-border bg-slate-50" label="Mini Hero Ad" />
            </div>
          </div>

          {/* Featured Game Hero */}
          <div className="relative mb-12 group">
            {/* BACKGROUND DECORATIVE OFFSET BLOCK */}
            <div className="absolute -inset-2 bg-black rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />

            <Link
              to={`/game/${heroGame.slug}`}
              className="relative block w-full aspect-[21/9] md:aspect-[21/7] rounded-[2.5rem] overflow-hidden border-4 border-black bg-zinc-900 shadow-[12px_12px_0px_#FF6321] transition-all"
            >
              {/* THE MAIN GAME IMAGE */}
              <div className="absolute inset-0 z-0">
                <img
                  src={heroGame.image}
                  alt={heroGame.title}
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>

              {/* CONTENT LAYER */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">

                {/* TOP SECTION: BADGE & ARROW */}
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="inline-block px-4 py-1 bg-orange-500 border-2 border-black text-white rounded-full text-[10px] font-black uppercase italic tracking-widest shadow-[4px_4px_0px_black]">
                      Game of the Week
                    </div>

                    {/* TITLE WITH KNOCKOUT HOVER */}
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.8] transition-all duration-300 drop-shadow-[3px_3px_0px_black] group-hover:[-webkit-text-stroke:2px_black]">
                      {heroGame.title}
                    </h2>
                  </div>

                  <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_black] group-hover:bg-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    <ArrowUpRight className="w-8 h-8 text-black" />
                  </div>
                </div>

                {/* BOTTOM SECTION: DESCRIPTION & THUMBNAIL */}
                <div className="flex items-end justify-between gap-8">
                  <div className="max-w-md">
                    <p className="text-xl md:text-2xl font-black text-white uppercase italic leading-tight drop-shadow-[2px_2px_0px_black]">
                      {heroGame.description || "Experience the ultimate physics-based challenge."}
                    </p>

                    {/* PLAY NOW BUTTON-STYLE DECORATION */}
                    <div className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-black font-black uppercase italic text-sm shadow-[4px_4px_0px_black]">
                      Play Now
                    </div>
                  </div>

                  {/* FLOATING EMOJI */}
                  <span className="text-[120px] md:text-[180px] leading-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 select-none">
                    {heroGame.thumbnail}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Marquee Break */}
        <div className="py-2">
          <AdSpace className="w-full h-[80px] mb-4" label="Top Banner" />
          <Marquee />
          <AdSpace className="w-full h-[80px] mt-4" label="Bottom Banner" />
        </div>

        <AdSpace className="w-full h-[120px]" label="Mid-Section Ad Break" />

        {/* Physics Section - Skewed */}
        <section className="skew-section bg-black text-white -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 py-12">
          <div className="skew-content">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-8">
              <div>
                <h3 className="text-6xl font-black uppercase italic mb-4">Vision Lab</h3>
                <p className="text-xl text-slate-400 max-w-xl">
                  Every pixel is a particle. Every interaction is calculated. Experience the most realistic webcam based games in the smallest packages.
                </p>
              </div>
              <Link to="/games" className="px-10 py-5 bg-white text-black rounded-full font-black uppercase italic hover:scale-110 transition-transform shrink-0">
                Enter the Lab
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {physicsGames.map((game) => {
                // Fallback if ID split fails
                const level = game.id.includes('-') ? game.id.split('-')[1] : '??';

                return (
                  <Link
                    key={game.id}
                    to={`/game/${game.slug}`}
                    className="group relative block aspect-[3/4] rounded-3xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.9)] hover:shadow-[14px_14px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 ease-out"
                  >
                    {/* GAME IMAGE BACKGROUND (Image First) */}
                    <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700">
                      <img
                        src={game.image}
                        alt={`${game.title} thumbnail`}
                        className="w-full h-full object-cover object-center transition-all duration-500"
                      />
                    </div>

                    {/* DYNAMIC VIBE OVERLAY - Uses game.color for the tint */}
                    <div
                      className={cn(
                        "absolute inset-0 z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500",
                        game.color,
                        "bg-gradient-to-t from-black via-black/30 to-transparent"
                      )}
                    />

                    {/* MAIN CONTENT CONTAINER */}
                    <div className="relative z-30 h-full p-5 flex flex-col justify-end">

                      {/* BOTTOM INFO SECTION */}
                      <div className="w-full">
                        <div className="flex justify-between items-center gap-3">
                          <div className="min-w-0">
                            <h4 className="text-2xl font-black text-white uppercase italic leading-none truncate mb-1 
                                     transition-all duration-300
                                     group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] drop-shadow-[3px_3px_0px_black]">
                              {game.title}
                            </h4>
                          </div>

                          {/* INTERACTIVE EMOJI/THUMBNAIL */}
                          <div className="relative flex-shrink-0">
                            {/* Radial Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-white/20 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <span className="relative text-5xl transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 block">
                              {game.thumbnail}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mid-Page Ad Break */}
        <section className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdSpace className="h-[150px] brutal-border bg-yellow-50" label="Sponsored Simulation" />
            <AdSpace className="h-[150px] brutal-border bg-blue-50" label="Gaming Gear" />
            <AdSpace className="h-[150px] brutal-border bg-green-50" label="Special Offer" />
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <AdSpace className="w-full h-[120px] mb-8 bg-slate-100" label="Trending Sponsor" />
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 flex-1 bg-black" />
            <h3 className="text-4xl font-black uppercase italic px-4">Trending Now</h3>
            <div className="h-1 flex-1 bg-black" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trendingGames.map((game, index) => {
              // Generate the correct image path (ensuring it's absolute for nested routes)
              const imageUrl = game.image?.startsWith('/') || game.image?.startsWith('http')
                ? game.image
                : `/${game.image}`;

              return (
                <Link
                  key={game.id}
                  to={`/game/${game.slug}`}
                  className="group relative overflow-hidden rounded-[2rem] brutal-border aspect-[3/4] hover:-translate-y-2 transition-all duration-300 shadow-[6px_6px_0px_black] hover:shadow-[12px_12px_0px_black]"
                >
                  <div className={cn("absolute inset-0 z-0", game.color || 'bg-zinc-800')} />
                  <div className="absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-110">
                    <img
                      src={imageUrl}
                      alt={`${game.title} background`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className={cn("absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-300", game.color)} />
                  </div>
                  <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.04] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-30">
                    <div className="flex justify-between items-start">
                      {/* Thumbnail/Emoji with 'aura' glow against darker BG */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400/20 blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative text-5xl transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 block">
                          {game.thumbnail}
                        </span>
                      </div>
                      <div className="w-8 h-8 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-yellow-400 group-hover:shadow-[2px_2px_0px_black] transition-all">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                      </div>
                    </div>

                    <div>
                      {/* <h4 className="text-2xl font-black uppercase italic mb-2 leading-none text-white drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] group-hover:text-yellow-400 transition-colors relative z-10">
                        {game.title}
                      </h4> */}
                      <div>
                        <h1
                          className="absolute -bottom-5 left-1 text-[300px] font-black leading-none select-none z-0
               bg-clip-text text-transparent 
               bg-cover bg-center
               transition-transform duration-500 group-hover:scale-105 []"
                          style={{
                            backgroundImage: `url(${game.image})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            // The stroke: width and color
                            WebkitTextStroke: '4px black',
                            // Ensures the stroke stays behind the image fill
                            paintOrder: 'stroke fill',
                            // Adds extra "punch" to the edges
                            filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1))'
                          }}
                        >
                          {index + 1}
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse All Section */}
        <section className="relative">
          <AdSpace className="w-full h-[100px] mb-8" label="Archive Partner" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h3 className="text-5xl font-black uppercase italic mb-1 tracking-tighter">The Archive</h3>
              <p className="text-slate-500 font-medium text-lg">Browse our complete collection of 50+ pixel masterpieces.</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-10 py-4 rounded-2xl text-base font-black uppercase italic transition-all shrink-0 border-4 border-black shadow-[4px_4px_0px_black]",
                    activeCategory === cat
                      ? "bg-[#FF6321] text-white -translate-y-1 shadow-[8px_8px_0px_black]"
                      : "bg-white text-slate-500 hover:bg-slate-50 hover:-translate-y-0.5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bento-grid">
            {filteredGames.slice(0, 36).map((game, index) => (
              <React.Fragment key={game.id}>
                <GameCard
                  game={{
                    ...game,
                    size: index % 9 === 0 ? 'large' : index % 4 === 0 ? 'tall' : index % 3 === 0 ? 'medium' : 'small'
                  }}
                />
                {index % 12 === 11 && (
                  <div className="col-span-12 md:col-span-4 row-span-2">
                    <AdSpace className="w-full h-full" label="Archive Grid Ad" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/games" className="group inline-block relative px-12 py-6 bg-black text-white border-4 border-black shadow-[8px_8px_0px_#FF6321] rounded-[1.5rem] font-black uppercase italic text-xl hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all overflow-hidden">
              <span className="relative z-10">Load More Games</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
          <AdSpace className="w-full h-[120px] mt-12" label="Post-Archive Ad" />
          <AdSpace className="w-full h-[80px] mt-4" label="Secondary Post-Archive Ad" />
        </section>

        {/* Final Ad Break */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AdSpace className="h-[150px] brutal-border bg-slate-50" label="Global Partner" />
            <AdSpace className="h-[150px] brutal-border bg-slate-100" label="Regional Partner" />
          </div>
        </section>

        {/* Footer Section */}
        <section className="pt-12 border-t-4 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase italic mb-8">
                Pixel <br /> <span className="text-stroke">Forever</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 bg-white border-2 border-black rounded-lg text-[10px] font-black uppercase italic text-slate-400 hover:text-black hover:border-orange-500 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <AdSpace className="h-[200px] brutal-border bg-white" label="Community Ad" />
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="bg-black py-12 px-4 md:px-8 lg:px-12 mt-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="w-12 h-12 bg-[#FF6321] border-4 border-white rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🍄</span>
              </div>
              <p className="text-slate-400 text-lg max-w-md leading-tight">
                Building the future of pixelated physics. One simulation at a time.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-white font-black uppercase italic text-sm">Explore</h5>
              <ul className="text-slate-500 space-y-1 font-medium text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Physics Lab</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Arcade Zone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Puzzle Palace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Action Arena</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-white font-black uppercase italic text-sm">Connect</h5>
              <ul className="text-slate-500 space-y-1 font-medium text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            <div className="flex items-center gap-4">
              <span>© 2026 GORO GORO - By CursorBits</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span>MADE WITH PASSION</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default LandingPage;
