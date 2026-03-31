import React, { useState, useEffect, memo } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

const EMOJIS = ['🎮', '🕹️', '👾', '🍄', '⭐', '🔥', '💎', '🌈'];

const MemoryMatch = memo(({ onGameOver }: { onGameOver?: (score: number) => void }) => {
  const [cards, setCards] = useState<{ id: number; emoji: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const initGame = () => {
    const deck = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, isFlipped: false, isMatched: false }));
    setCards(deck);
    setFlippedIndices([]);
    setMoves(0);
    setGameStarted(true);
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[first].isMatched = true;
          matchedCards[second].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);
          
          if (matchedCards.every(c => c.isMatched)) {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
            onGameOver?.(moves);
          }
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = [...newCards];
          resetCards[first].isFlipped = false;
          resetCards[second].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-emerald-50 rounded-xl p-4">
      {!gameStarted ? (
        <button 
          onClick={initGame}
          className="px-6 py-3 bg-emerald-600 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
        >
          START MEMORY
        </button>
      ) : (
        <>
          <div className="mb-4 font-mono text-emerald-800">MOVES: {moves}</div>
          <div className="grid grid-cols-4 gap-2 w-full max-w-[300px]">
            {cards.map((card, idx) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(idx)}
                className={`aspect-square rounded-lg flex items-center justify-center text-2xl cursor-pointer transition-colors shadow-sm ${
                  card.isFlipped || card.isMatched ? 'bg-white border-2 border-emerald-200' : 'bg-emerald-400'
                }`}
              >
                {(card.isFlipped || card.isMatched) ? card.emoji : '?'}
              </motion.div>
            ))}
          </div>
          {cards.every(c => c.isMatched) && cards.length > 0 && (
            <button 
              onClick={initGame}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-bold"
            >
              PLAY AGAIN
            </button>
          )}
        </>
      )}
    </div>
  );
});

export default MemoryMatch;
