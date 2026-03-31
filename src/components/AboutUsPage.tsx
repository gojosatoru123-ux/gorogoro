import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Zap, Globe, Heart, Shield, Sparkles } from 'lucide-react';
import AdSpace from './AdSpace';
import Marquee from './Marquee';
import SEO from './SEO';

const AboutUsPage = memo(() => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] overflow-x-hidden">
      <SEO 
        title="About Us | Pixel Paradise" 
        description="Learn more about the team behind Pixel Paradise and our mission to build the most immersive pixel-based simulations on the web."
        canonical="https://ais-pre-zg3qzj4qo7vn7aj2mmmoo3-293044114194.asia-east1.run.app/about"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="w-10 h-10 bg-[#FF6321] border-4 border-black shadow-[2px_2px_0px_black] rounded-lg flex items-center justify-center shrink-0 hover:-translate-y-0.5 transition-transform">
              <ArrowLeft className="w-6 h-6 text-white" />
            </Link>
            <h1 className="text-2xl font-black uppercase italic tracking-tighter">About Us</h1>
          </div>
        </div>
      </header>

      <Marquee />

      <main className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-4 space-y-8">
        <AdSpace className="w-full h-[80px] mb-4" label="About Us Top Banner" />
        {/* Hero Section */}
        <section className="relative flex flex-col items-center text-center max-w-4xl mx-auto py-8">
          <div className="absolute -top-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
          
          <div className="inline-block px-6 py-2 bg-black text-white rounded-full text-xs font-black uppercase tracking-[0.3em] italic mb-8 shadow-[4px_4px_0px_#FF6321]">
            Our Story
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic mb-8">
            We Build <span className="text-orange-500">Digital</span> <br /> Playgrounds
          </h2>
          <p className="text-2xl font-medium text-slate-600 leading-tight">
            Pixel Paradise was born from a simple idea: <span className="text-black font-black">physics should be fun.</span> We're a team of designers, engineers, and dreamers dedicated to creating the most immersive pixel-based simulations on the web.
          </p>
        </section>

        {/* Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AdSpace className="col-span-full h-[120px] mb-4" label="Values Sponsor" />
          <div className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_black] rounded-[2.5rem] group hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 border-2 border-black group-hover:bg-blue-200 transition-colors">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-4">Innovation</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Pushing the boundaries of what's possible in a browser. Our physics engine is custom-built for speed and accuracy.
            </p>
          </div>

          <div className="p-10 bg-white border-4 border-black shadow-[12px_12px_0px_black] rounded-[3rem] group hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 border-2 border-black group-hover:bg-orange-200 transition-colors">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-4">Community</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Built by players, for players. We listen to our community to shape the future of Pixel Paradise.
            </p>
          </div>

          <div className="p-10 bg-white border-4 border-black shadow-[12px_12px_0px_black] rounded-[3rem] group hover:-translate-y-2 transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 border-2 border-black group-hover:bg-green-200 transition-colors">
              <Globe className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-4">Accessibility</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Gaming should be for everyone. We ensure our platform works seamlessly across all devices and connections.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-black rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-orange-500 mb-1">200+</div>
              <div className="text-lg font-black uppercase italic tracking-widest opacity-60">Simulations</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-blue-500 mb-1">1M+</div>
              <div className="text-lg font-black uppercase italic tracking-widest opacity-60">Players</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-black italic tracking-tighter text-yellow-400 mb-1">24/7</div>
              <div className="text-lg font-black uppercase italic tracking-widest opacity-60">Uptime</div>
            </div>
          </div>
        </section>

        <AdSpace className="w-full h-[100px]" label="Mid-About Ad Break" />

        {/* Team Section */}
        <section className="space-y-8">
          <AdSpace className="w-full h-[100px] mb-4" label="Team Partner" />
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-2">The Creators</h2>
            <p className="text-lg font-medium text-slate-500">The minds behind the pixels.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-slate-100 border-4 border-black rounded-[2.5rem] mb-6 overflow-hidden relative shadow-[8px_8px_0px_black] group-hover:shadow-[12px_12px_0px_#FF6321] transition-all group-hover:-translate-y-2 flex items-center justify-center">
                  <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Users className="w-12 h-12 text-black/20 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" 
                       style={{ backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
                </div>
                <h4 className="text-2xl font-black uppercase italic">Pixel Master {i}</h4>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Lead Simulationist</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-300 border-4 border-black shadow-[12px_12px_0px_black] rounded-[3rem] p-8 md:p-12 text-center space-y-6">
          <AdSpace className="w-full h-[80px] mb-4 bg-white/50" label="Final Call Ad" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
            Ready to break <br /> some physics?
          </h2>
          <Link to="/games" className="inline-block px-10 py-5 bg-black text-white border-4 border-black shadow-[6px_6px_0px_white] rounded-2xl font-black uppercase italic text-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Explore the Archive
          </Link>
          <AdSpace className="w-full h-[120px] mt-8" label="Bottom About Banner" />
          <AdSpace className="w-full h-[80px] mt-4" label="Final About Ad" />
        </section>
      </main>

      <footer className="bg-black py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © 2026 PIXEL PARADISE • BUILT WITH PASSION
          </p>
        </div>
      </footer>
    </div>
  );
});

export default AboutUsPage;
