import React, { useEffect, useRef, useState, memo } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const PhysicsGameContainer = memo(({ title }: { title: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [particleCount, setParticleCount] = useState(0);
  const requestRef = useRef<number>();

  const COLORS = ['#FF6321', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const addParticle = (x: number, y: number) => {
    const newParticle: Particle = {
      x,
      y,
      vx: (Math.random() - 0.5) * 10,
      vy: (Math.random() - 0.5) * 10,
      radius: 5 + Math.random() * 15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
    
    particlesRef.current = [...particlesRef.current.slice(-49), newParticle];
    setParticleCount(particlesRef.current.length);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      // Gravity
      p.vy += 0.2;

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off walls
      if (p.x + p.radius > canvas.width) {
        p.x = canvas.width - p.radius;
        p.vx *= -0.7;
      } else if (p.x - p.radius < 0) {
        p.x = p.radius;
        p.vx *= -0.7;
      }

      if (p.y + p.radius > canvas.height) {
        p.y = canvas.height - p.radius;
        p.vy *= -0.7;
        p.vx *= 0.98; // Friction
      } else if (p.y - p.radius < 0) {
        p.y = p.radius;
        p.vy *= -0.7;
      }

      // Draw
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addParticle(x, y);
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-900 text-white rounded-[2rem] overflow-hidden relative border-4 border-black shadow-[8px_8px_0px_black]">
      <div className="p-4 bg-black/50 border-b-2 border-black flex justify-between items-center z-10">
        <h2 className="text-lg font-black uppercase italic tracking-tighter">{title}</h2>
        <span className="text-[10px] font-mono opacity-50">Particles: {particleCount}/50</span>
      </div>
      
      <div className="flex-1 relative cursor-crosshair">
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="w-full h-full bg-slate-800"
          onClick={handleCanvasClick}
        />
        
        {particleCount === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center animate-float">
              <div className="text-6xl mb-4">🖱️</div>
              <p className="text-xl font-black uppercase italic text-white/20">Click to spawn particles</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-2 bg-black/30 text-[8px] uppercase tracking-widest text-center opacity-30 z-10">
        Interactive Physics Simulation v1.1.0 • Matter-less Engine
      </div>
    </div>
  );
});

export default PhysicsGameContainer;
