import { Game } from '../types/game';
import PixelRunner from '../components/games/PixelRunner';
import MemoryMatch from '../components/games/MemoryMatch';
import PhysicsGameContainer from '../components/games/PhysicsGameContainer';

const COLORS = [
  'bg-[#E3F2FD]', // Blue
  'bg-[#E8F5E9]', // Green
  'bg-[#FFF9C4]', // Yellow
  'bg-[#FCE4EC]', // Rose
  'bg-[#F3E5F5]', // Purple
  'bg-[#EFEBE9]', // Brown
  'bg-[#E0F2F1]', // Mint
  'bg-[#FFF3E0]', // Orange
];

const PHYSICS_EMOJIS = ['⚙️', '🏗️', '🧱', '⚖️', '🧲', '🧨', '🔭', '🧪', '🧬', '🔋', '🔌', '📡', '🛰️', '🛸', '🚀', '🛸', '🛰️', '📡', '🔌', '🔋', '🧬', '🧪', '🔭', '🧨', '🧲', '⚖️', '🧱', '🏗️', '⚙️'];

const generatePhysicsGames = (count: number): Game[] => {
  const games: Game[] = [];
  
  // Add existing games first
  games.push({
    id: 'game-1',
    slug: 'cursor-drift',
    title: 'Cursor Drift',
    description: 'Navigate the pixelated world while battling against the forces of cursor drift.',
    thumbnail: '🦖',
    category: 'Physics',
    url: 'https://game-01-cursordrift-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E3F2FD]',
    size: 'large',
    tags: ['Arcade', 'Runner', 'Pixel'],
  });

  games.push({
    id: 'game-2',
    slug: 'bubble-sling',
    title: 'Bubble Sling',
    description: 'Guide the pearl to its destination.',
    thumbnail: '🧠',
    category: 'Physics',
    url: 'https://game-02-bubblesling-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E8F5E9]',
    size: 'tall',
    tags: ['Puzzle', 'Memory', 'Casual'],
  });

  // Add some URL-based games
  games.push({
    id: 'game-3',
    slug: 'flappy-bubble',
    title: 'Flappy Bubble',
    description: 'Flap your bubble and navigate through the obstacles.',
    thumbnail: '🔢',
    category: 'Physics',
    url: 'https://game-03-flappybubble-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FFF9C4]',
    size: 'medium',
    tags: ['Puzzle', 'Numbers', 'Classic', 'Physics'],
  });

  games.push({
    id: 'game-4',
    slug: 'aura-ball-collision',
    title: 'Aura Ball Collision',
    description: 'Pulse the space around you navigate and collect fragments.',
    thumbnail: '🐦',
    category: 'Physics',
    url: 'https://game-04-ballcollision-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FCE4EC]',
    size: 'medium',
    tags: ['Arcade', 'Hard', 'Classic', 'Physics'],
  });

  games.push({
    id: 'game-5',
    slug: 'ball-jump',
    title: 'Ball Jump',
    description: 'Jump the stacks.',
    thumbnail: '🧱',
    category: 'Physics',
    url: 'https://game-05-balljump-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#F3E5F5]',
    size: 'large',
    tags: ['Puzzle', 'Classic', 'Retro', 'Physics'],
  });

  games.push({
    id: 'game-6',
    slug: 'wordle',
    title: 'Wordle',
    description: 'Guess the hidden word in 6 tries.',
    thumbnail: '📝',
    category: 'Puzzle',
    url: 'https://www.nytimes.com/games/wordle/index.html',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Puzzle', 'Word', 'Daily'],
  });

  games.push({
    id: 'game-7',
    slug: 'pacman',
    title: 'Pac-Man',
    description: 'The legendary arcade game. Eat dots, avoid ghosts!',
    thumbnail: '🟡',
    category: 'Arcade',
    url: 'https://www.google.com/logos/2010/pacman10-i.html',
    color: 'bg-[#FFF9C4]',
    size: 'medium',
    tags: ['Arcade', 'Classic', 'Retro'],
  });

  games.push({
    id: 'game-8',
    slug: 'minesweeper',
    title: 'Minesweeper',
    description: 'Clear the board without hitting any mines.',
    thumbnail: '💣',
    category: 'Puzzle',
    url: 'https://www.google.com/logos/2010/minesweeper.html',
    color: 'bg-[#E0F2F1]',
    size: 'small',
    tags: ['Puzzle', 'Classic', 'Strategy'],
  });

  games.push({
    id: 'game-9',
    slug: 'snake',
    title: 'Snake',
    description: 'Eat the apples and grow as long as you can.',
    thumbnail: '🐍',
    category: 'Arcade',
    url: 'https://www.google.com/logos/2010/snake.html',
    color: 'bg-[#E8F5E9]',
    size: 'medium',
    tags: ['Arcade', 'Classic', 'Retro'],
  });

  // Generate 50+ Physics Games
  for (let i = 1; i <= count; i++) {
    const colorIdx = i % COLORS.length;
    const emojiIdx = i % PHYSICS_EMOJIS.length;
    const sizes: ('medium' | 'small' | 'tall')[] = ['medium', 'small', 'tall'];
    const size = sizes[i % sizes.length];

    games.push({
      id: `physics-${i}`,
      slug: `physics-game-${i}`,
      title: `Physics Master ${i}`,
      description: `Challenge your understanding of physics in this level ${i} puzzle.`,
      longDescription: `Physics Master ${i} is a deep dive into advanced mechanics. Use gravity, friction, and momentum to solve increasingly complex puzzles. Every move counts in this physics-authoritative simulation.`,
      thumbnail: PHYSICS_EMOJIS[emojiIdx],
      category: 'Physics',
      component: () => <PhysicsGameContainer title={`Physics Master ${i}`} />,
      color: COLORS[colorIdx],
      size: size,
      tags: ['Physics', 'Simulation', 'Puzzle', 'Gravity'],
    });
  }

  return games;
};

export const GAMES = generatePhysicsGames(200); // 200 + 9 original = 209 games
