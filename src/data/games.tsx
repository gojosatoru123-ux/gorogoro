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
    slug: 'balance-bloom',
    title: 'Balance Bloom',
    description: 'Balance the shapes on the platform.',
    thumbnail: '📝',
    category: 'Physics',
    url: 'https://game-06-balancebloom-gorogoro.aisehibanayahai00.workers.dev',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Physics', 'Shapes', 'Daily'],
  });

  games.push({
    id: 'game-7',
    slug: 'bounce-labs',
    title: 'Bounce Labs',
    description: 'The legendary arcade game. Eat dots, avoid ghosts!',
    thumbnail: '🟡',
    category: 'Physics',
    url: 'https://game-06-bouncelabs-gorogoro.aisehibanayahai00.workers.dev',
    color: 'bg-[#FFF9C4]',
    size: 'medium',
    tags: ['Physics', 'Classic', 'Retro'],
  });

  games.push({
    id: 'game-8',
    slug: 'block-surfer',
    title: 'Block Surfer',
    description: 'Subway surfer but in minecraft',
    thumbnail: '💣',
    category: 'Arcade',
    url: 'https://game-01-blocksurfer-cursorbits-games.aisehibanayahai00.workers.dev',
    color: 'bg-[#E0F2F1]',
    size: 'small',
    tags: ['Puzzle', 'Classic', 'Strategy'],
  });

  games.push({
    id: 'game-9',
    slug: 'typing-shooter',
    title: 'Typing Shooter',
    description: 'Practice typing but in gamified way.',
    thumbnail: '🐍',
    category: 'Arcade',
    url: 'https://game-02-typingshooter-cursorbits-game.aisehibanayahai00.workers.dev',
    color: 'bg-[#E8F5E9]',
    size: 'medium',
    tags: ['Arcade', 'Classic', 'Retro'],
  });

  games.push({
    id: 'game-10',
    slug: 'maze-runner',
    title: 'Maze Runner',
    description: 'Bored of typical maze games? Try this one with many twists.',
    thumbnail: '🐍',
    category: 'Arcade',
    url: 'https://game-03-mazerunner-cursorbits-game.aisehibanayahai00.workers.dev',
    color: 'bg-[#E8F5E9]',
    size: 'medium',
    tags: ['Arcade', 'Classic', 'Retro'],
  });

  games.push({
    id: 'game-11',
    slug: 'stickman-archer',
    title: 'Stickman Archery',
    description: 'Kill enemies and show your bow arrow skills.',
    thumbnail: '🐍',
    category: 'Stickman',
    url: 'https://game-08-stickmanarcher-cursorbits.aisehibanayahai00.workers.dev',
    color: 'bg-[#E8F5E9]',
    size: 'medium',
    tags: ['Arcade', 'Classic', 'Retro', 'Stickman'],
  });

  games.push({
    id: 'game-12',
    slug: 'dead-zone',
    title: 'Deadzone Shooting',
    description: 'Shoot and defence. Kill the Enemies.',
    thumbnail: '🐍',
    category: 'Arcade',
    url: 'https://game-04-deadzone-cursorbits-game.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E8F5E9]',
    size: 'medium',
    tags: ['Arcade', 'Classic', 'Retro', 'Stickman'],
  });

  games.push({
    id: 'game-13',
    slug: 'shoot-the-line',
    title: 'Shoot The Line',
    description: 'Precision timing and fast reflexes. Clear the trajectory before the line breaks.',
    thumbnail: '🎯',
    category: 'Arcade',
    url: 'https://game-09-shoot-the-line-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FFF3E0]',
    size: 'medium',
    tags: ['Arcade', 'Physics'],
  });
  
  games.push({
    id: 'game-14',
    slug: 'zenith-boomerang',
    title: 'Boomerang',
    description: 'Master the physics of the return. Throw and catch to survive the waves.',
    thumbnail: '🪃',
    category: 'Physics',
    url: 'https://game-10-zenith-boomerang-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#F3E5F5]',
    size: 'tall',
    tags: ['Physics', 'Action'],
  });
  
  games.push({
    id: 'game-15',
    slug: 'lemmings-march',
    title: 'Lemmings March',
    description: 'Lead your troop through hazardous terrain. Strategy and survival combined.',
    thumbnail: '🐾',
    category: 'Adventure',
    url: 'https://game-11-lemmings-march-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E3F2FD]',
    size: 'large',
    tags: ['Adventure', 'Puzzle'],
  });
  
  games.push({
    id: 'game-16',
    slug: 'shinobi-shadow',
    title: 'Shinobi Shadow',
    description: 'Strike from the dark. A fast-paced stealth experience for the modern ninja.',
    thumbnail: '🥷',
    category: 'Action',
    url: 'https://game-05-shinobishadow-cursorbits-game.aisehibanayahai00.workers.dev/',
    color: 'bg-[#EFEBE9]',
    size: 'medium',
    tags: ['Action', 'Adventure', 'Arcade'],
  });
  
  games.push({
    id: 'game-17',
    slug: 'ohflip',
    title: 'Oh! Flip',
    description: 'Defy gravity with stylish stunts. Land perfectly or it is game over.',
    thumbnail: '🤸',
    category: 'Physics',
    url: 'https://game-12-ohflip-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FCE4EC]',
    size: 'small',
    tags: ['Physics', 'Arcade', 'Stickman'],
  });
  
  games.push({
    id: 'game-18',
    slug: 'bitbound',
    title: 'Bitbound',
    description: 'Trapped in a digital glitch. Dash and bounce your way to the exit.',
    thumbnail: '⛓️',
    category: 'Arcade',
    url: 'https://game-13-bitbound-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Arcade', 'Puzzle'],
  });

  // Generate 50+ Physics Games
  // for (let i = 1; i <= count; i++) {
  //   const colorIdx = i % COLORS.length;
  //   const emojiIdx = i % PHYSICS_EMOJIS.length;
  //   const sizes: ('medium' | 'small' | 'tall')[] = ['medium', 'small', 'tall'];
  //   const size = sizes[i % sizes.length];

  //   games.push({
  //     id: `physics-${i}`,
  //     slug: `physics-game-${i}`,
  //     title: `Physics Master ${i}`,
  //     description: `Challenge your understanding of physics in this level ${i} puzzle.`,
  //     longDescription: `Physics Master ${i} is a deep dive into advanced mechanics. Use gravity, friction, and momentum to solve increasingly complex puzzles. Every move counts in this physics-authoritative simulation.`,
  //     thumbnail: PHYSICS_EMOJIS[emojiIdx],
  //     category: 'Physics',
  //     component: () => <PhysicsGameContainer title={`Physics Master ${i}`} />,
  //     color: COLORS[colorIdx],
  //     size: size,
  //     tags: ['Physics', 'Simulation', 'Puzzle', 'Gravity'],
  //   });
  // }

  return games;
};

export const GAMES = generatePhysicsGames(200); // 200 + 9 original = 209 games
