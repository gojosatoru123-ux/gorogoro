import React, { useState, useEffect, useRef, memo } from 'react';
import confetti from 'canvas-confetti';

const PixelRunner = memo(({ onGameOver }: { onGameOver?: (score: number) => void }) => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreRef = useRef(0);
  const isGameOverRef = useRef(false);

  useEffect(() => {
    if (!gameStarted || isGameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let playerY = canvas.height - 30;
    let playerVelocityY = 0;
    let isJumping = false;
    const gravity = 0.6;
    const jumpStrength = -10;

    let obstacles: { x: number; width: number; height: number }[] = [];
    let frameCount = 0;
    scoreRef.current = 0;
    isGameOverRef.current = false;

    const gameLoop = () => {
      if (isGameOverRef.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Player
      playerVelocityY += gravity;
      playerY += playerVelocityY;

      if (playerY > canvas.height - 30) {
        playerY = canvas.height - 30;
        playerVelocityY = 0;
        isJumping = false;
      }

      ctx.fillStyle = '#FF6321';
      ctx.fillRect(50, playerY, 20, 20);

      // Obstacles
      if (frameCount % 100 === 0) {
        obstacles.push({ x: canvas.width, width: 20, height: 20 + Math.random() * 20 });
      }

      ctx.fillStyle = '#141414';
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= 5;
        ctx.fillRect(obs.x, canvas.height - obs.height, obs.width, obs.height);

        // Collision
        if (
          50 < obs.x + obs.width &&
          50 + 20 > obs.x &&
          playerY + 20 > canvas.height - obs.height
        ) {
          isGameOverRef.current = true;
          setIsGameOver(true);
          if (scoreRef.current > 10) {
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 }
            });
          }
          onGameOver?.(scoreRef.current);
          return;
        }

        if (obs.x < -20) {
          obstacles.splice(i, 1);
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }
      }

      frameCount++;
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isJumping) {
        playerVelocityY = jumpStrength;
        isJumping = true;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    gameLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted, isGameOver, onGameOver]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-100 rounded-xl p-4 overflow-hidden relative">
      {!gameStarted ? (
        <button 
          onClick={() => setGameStarted(true)}
          className="px-6 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          START RUNNER
        </button>
      ) : isGameOver ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">GAME OVER</h3>
          <p className="mb-4">Score: {score}</p>
          <button 
            onClick={() => {
              setIsGameOver(false);
              setScore(0);
            }}
            className="px-6 py-3 bg-black text-white rounded-full font-bold"
          >
            RETRY
          </button>
        </div>
      ) : (
        <>
          <div className="absolute top-4 right-4 font-mono text-xl">SCORE: {score}</div>
          <canvas 
            ref={canvasRef} 
            width={400} 
            height={200} 
            className="w-full h-auto border-b-4 border-black bg-white"
            onClick={() => {
              // Mobile jump
              const event = new KeyboardEvent('keydown', { code: 'Space' });
              window.dispatchEvent(event);
            }}
          />
          <p className="mt-4 text-sm opacity-50">Press SPACE or TAP to jump</p>
        </>
      )}
    </div>
  );
});

export default PixelRunner;
