import React, { useEffect, useRef, useState, memo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Heart, Info, Play, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { GAMES } from '../data/games';
import GameCard from './ui/GameCard';
import AdSpace from '../components/AdSpace';
import Marquee from './Marquee';
import SEO from './SEO';
import { cn } from '../lib/utils';

const GamePage = memo(() => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const game = GAMES.find(g => g.slug === slug);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setLoadError(false);

    // If the game has a URL, set a timeout to check if it's stuck
    let timer: NodeJS.Timeout;
    if (game.url) {
      timer = setTimeout(() => {
        // If still loading after 10 seconds, it might be blocked
        // We don't force error state, but we can provide a manual override
      }, 10000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [slug, game.url]);

  const toggleFullscreen = () => {
    if (!gameContainerRef.current) return;

    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#FDFDFD]">
        <h1 className="text-6xl font-black uppercase italic mb-8">Game Not Found</h1>
        <Link to="/" className="px-8 py-4 bg-black text-white border-2 border-black shadow-[4px_4px_0px_#FF6321] rounded-xl font-black uppercase italic flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Paradise
        </Link>
      </div>
    );
  }

  const sidebarRelated = GAMES
    .filter(g => g.id !== game.id && g.category === game.category)
    .slice(0, 3);

  const moreSimilarGames = GAMES
    .filter(g => g.id !== game.id && (g.category === game.category || g.tags.some(t => game.tags.includes(t))))
    .slice(3, 15);

  return (
    <div className="min-h-screen bg-[#FDFDFD] overflow-x-hidden">
      {game && (
        <SEO 
          title={`${game.title} | GORO GORO`}
          description={game.description}
          canonical={`https://ais-pre-zg3qzj4qo7vn7aj2mmmoo3-293044114194.asia-east1.run.app/game/${game.slug}`}
          ogImage={game.image || `https://picsum.photos/seed/${game.slug}/1200/630`}
          ogType="game"
          gameData={{
            name: game.title,
            description: game.description,
            genre: game.category,
            image: game.image || `https://picsum.photos/seed/${game.slug}/1200/630`
          }}
        />
      )}
      {/* Game Header / Nav */}
      <header className="p-4 md:p-8 flex items-center justify-between border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 bg-slate-100 border-2 border-black rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{game.thumbnail}</span>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">{game.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 border-2 border-black rounded-xl flex items-center justify-center hover:bg-slate-100 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 border-2 border-black rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </header>

      <Marquee />

      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 space-y-12">
        <AdSpace className="w-full h-[100px] mb-8" label="Top Game Banner" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Game Area & Description (9 cols) */}
          <div className="lg:col-span-9 space-y-12">
            {/* Main Game Section */}
            <section 
              ref={gameContainerRef}
              className={cn(
                "w-full aspect-video rounded-[3rem] overflow-hidden shadow-[16px_16px_0px_black] relative border-4 border-black group/game",
                game.color,
                isFullscreen && "rounded-none border-0 shadow-none"
              )}
            >
              <div className="absolute inset-0 bg-white">
                {game.url ? (
                  <div className="relative w-full h-full">
                    {isLoading && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50">
                        <div className="w-24 h-24 border-8 border-slate-200 border-t-orange-500 rounded-full animate-spin mb-8" />
                        <h2 className="text-3xl font-black uppercase italic animate-pulse">Loading Simulation...</h2>
                        <p className="text-slate-400 font-bold mt-4 uppercase tracking-widest">Connecting to {new URL(game.url).hostname}</p>
                        
                        <div className="mt-12 flex flex-col items-center gap-4">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Taking too long?</p>
                          <button 
                            onClick={() => setLoadError(true)}
                            className="px-6 py-2 bg-white border-2 border-black rounded-lg text-[10px] font-black uppercase italic hover:bg-slate-100 transition-colors"
                          >
                            Show Fallback Options
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {loadError && (
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white p-12 text-center">
                        <span className="text-8xl mb-8">⚠️</span>
                        <h2 className="text-4xl font-black uppercase italic mb-4 text-red-500">Connection Blocked</h2>
                        <p className="text-xl font-medium text-slate-600 max-w-md mb-8">
                          This game's security settings prevent it from being played directly inside our paradise window.
                        </p>
                        <a 
                          href={game.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-10 py-5 bg-black text-white border-4 border-black shadow-[8px_8px_0px_#FF6321] rounded-2xl font-black uppercase italic hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        >
                          Play in New Tab
                        </a>
                      </div>
                    )}

                    <iframe 
                      src={game.url} 
                      className={cn("w-full h-full border-0 transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100")}
                      title={game.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                      onLoad={() => setIsLoading(false)}
                      onError={() => {
                        setIsLoading(false);
                        setLoadError(true);
                      }}
                    />
                  </div>
                ) : game.component ? (
                  <game.component onGameOver={(score) => console.log('Game Over! Score:', score)} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100">
                    <p className="text-xl font-black uppercase italic">Game content unavailable</p>
                  </div>
                )}
              </div>

              {/* Fullscreen Toggle Button */}
              <button 
                onClick={toggleFullscreen}
                className="absolute bottom-8 right-8 px-6 h-14 bg-black text-white border-2 border-white rounded-2xl flex items-center gap-3 opacity-0 group-hover/game:opacity-100 transition-all shadow-[4px_4px_0px_white] hover:scale-105 active:scale-95 z-20 font-black uppercase italic text-sm"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                <span className="hidden md:block">{isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode"}</span>
                {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
              </button>
            </section>

            {/* Game Info & Ads */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white p-8 rounded-[3rem] border-4 border-black shadow-[8px_8px_0px_black]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-5 py-2 bg-black text-white rounded-lg text-xs font-black uppercase italic tracking-widest">
                      {game.category}
                    </span>
                    <span className="text-slate-400 text-xs font-mono font-bold">#{game.id}</span>
                  </div>
                  <h2 className="text-5xl font-black uppercase italic mb-6">About the Game</h2>
                  <p className="text-xl font-medium text-slate-600 leading-tight mb-8">
                    {game.longDescription || game.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {game.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 bg-slate-100 border-2 border-black rounded-lg text-[10px] font-black uppercase italic text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* In-content Ads */}
                <AdSpace className="w-full h-[200px] brutal-border bg-slate-50" label="In-Game Advertisement" />
              </div>

              <div className="space-y-8">
                <AdSpace className="w-full h-[350px] brutal-border bg-white" label="Sidebar Ad" />
                <div className="bg-orange-500 p-8 rounded-[2.5rem] border-4 border-black shadow-[8px_8px_0px_black]">
                  <h4 className="text-2xl font-black uppercase italic mb-4 flex items-center gap-2">
                    <Info className="w-6 h-6" /> Pro Tip
                  </h4>
                  <p className="font-bold text-black leading-tight">
                    Master the physics engine by observing how gravity affects different materials. 
                    Heavier objects have more momentum but are harder to stop!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar & Related Games (3 cols) */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="sticky top-32 space-y-8">
              <AdSpace className="h-[250px] brutal-border bg-white" label="Premium Sponsor" />
              <AdSpace className="h-[100px] brutal-border bg-orange-50" label="Quick Ad" />
              
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase italic px-2 flex items-center justify-between">
                  Quick Picks
                  <Link to="/games" className="text-xs text-orange-500 hover:underline">View All</Link>
                </h3>
                <div className="space-y-4">
                  {sidebarRelated.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/game/${related.slug}`}
                      className="flex items-center gap-6 p-6 bg-white rounded-3xl border-4 border-black shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
                    >
                      <div className={cn("w-20 h-20 rounded-2xl border-2 border-black flex items-center justify-center text-4xl shrink-0", related.color)}>
                        {related.thumbnail}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-black uppercase italic truncate group-hover:text-orange-500 transition-colors">{related.title}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{related.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <AdSpace className="h-[350px] brutal-border bg-slate-50" label="Vertical Skyscraper" />
              <AdSpace className="h-[150px] brutal-border bg-blue-50" label="Bottom Sidebar Ad" />
            </div>
          </aside>
        </div>

        {/* Expanded Related Games Section */}
        <section className="space-y-8">
          <AdSpace className="w-full h-[120px] mb-8" label="Related Games Header Ad" />
          <div className="flex items-center gap-6">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">More Like This</h2>
            <div className="h-2 flex-1 bg-black" />
            <div className="w-12 h-12 bg-[#FF6321] border-4 border-black rounded-xl rotate-45" />
          </div>

          <div className="bento-grid">
            {moreSimilarGames.map((similar, index) => (
              <React.Fragment key={similar.id}>
                <GameCard 
                  game={{
                    ...similar,
                    size: index % 5 === 0 ? 'large' : index % 3 === 0 ? 'tall' : 'medium'
                  }} 
                />
                {index === 5 && (
                  <div className="col-span-12 md:col-span-4 row-span-2">
                    <AdSpace className="w-full h-full" label="Related Grid Ad" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Footer Ad */}
        <div className="max-w-[1600px] mx-auto space-y-4">
          <AdSpace className="w-full h-[150px] brutal-border bg-white" label="Bottom Banner Ad 1" />
          <AdSpace className="w-full h-[100px] brutal-border bg-slate-100" label="Bottom Banner Ad 2" />
        </div>
      </main>
    </div>
  );
});

export default GamePage;
