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
    image:'/images/images1/cursor-drift.webp'
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
    image:'/images/images1/bubble-sling.webp'
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
    image:'/images/images1/flappy-bubble.webp'
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
    image:'/images/images1/ball-collision.webp'
  });

  games.push({
    id: 'game-5',
    slug: 'maze-runner',
    title: 'Maze Runner',
    description: 'Bored of typical maze games? Try this one with many twists.',
    thumbnail: '🐍',
    category: 'Arcade',
    url: 'https://game-03-mazerunner-cursorbits-game.aisehibanayahai00.workers.dev',
    color: 'bg-[#E8F5E9]',
    size: 'medium',
    tags: ['Arcade', 'Classic', 'Retro'],
    image:'/images/images1/maze-runner.webp'
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
    image:'/images/images1/balance-bloom.webp'
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
    image:'/images/images1/bounce-lab.webp'
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
    image:'/images/images1/block-surfer.webp'
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
    image:'/images/images1/typing-shooter.webp'
  });

  games.push({
    id: 'game-10',
    slug: 'ball-jump',
    title: 'Ball Jump',
    description: 'Jump the stacks.',
    thumbnail: '🧱',
    category: 'Physics',
    url: 'https://game-05-balljump-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#F3E5F5]',
    size: 'large',
    tags: ['Puzzle', 'Classic', 'Retro', 'Physics'],
    image:'/images/images1/ball-jump.webp'
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
    image:'/images/images1/stickman-archer.webp'
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
    image:'/images/images1/dead-zone.webp'
  });

  games.push({
    id: 'game-13',
    slug: 'shinobi-shadow',
    title: 'Shinobi Shadow',
    description: 'Strike from the dark. A fast-paced stealth experience for the modern ninja.',
    thumbnail: '🥷',
    category: 'Action',
    url: 'https://game-05-shinobishadow-cursorbits-game.aisehibanayahai00.workers.dev/',
    color: 'bg-[#EFEBE9]',
    size: 'small',
    tags: ['Action', 'Adventure', 'Arcade'],
    image:'/images/images1/shinobi-path.webp'
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
    image:'/images/images1/zenith-boomerang.webp'
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
    image:'/images/images1/lemmings-march.webp'
  });
  
  games.push({
    id: 'game-16',
    slug: 'shoot-the-line',
    title: 'Shoot The Line',
    description: 'Precision timing and fast reflexes. Clear the trajectory before the line breaks.',
    thumbnail: '🎯',
    category: 'Arcade',
    url: 'https://game-09-shoot-the-line-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FFF3E0]',
    size: 'medium',
    tags: ['Arcade', 'Physics'],
    image:'/images/images1/shoot-line.webp'
  });

  games.push({
    id: 'game-17',
    slug: 'geoatlas',
    title: 'GeoAtlas',
    description: 'The definitive map-based challenge. Test your knowledge of world countries and capitals.',
    thumbnail: '🌍',
    category: 'Geography',
    url: 'https://game-23-geoatlas-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Geography', 'Map', 'Education'],
    image:'/images/images1/geo-atlas.webp'
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
    image:'/images/images1/bit-bound.webp'
  });

  games.push({
    id: 'game-19',
    slug: 'vierwizard',
    title: 'Vier Wizard',
    description: 'Attack with orbs and defend with shields. A magical twist on classic arcade action.',
    thumbnail: '⛓️',
    category: 'Arcade',
    url: 'https://game-17-vier-wizard-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Arcade', 'Puzzle', 'Physics'],
    image:'/images/images1/vier-wizard.webp'
  });

  games.push({
    id: 'game-20',
    slug: 'sky-balloon-shooter',
    title: 'Sky Balloon Shooter',
    description: 'Shoot the balloons in the sky. A physics-based shooting game with a twist of arcade fun.',
    thumbnail: '⛓️',
    category: 'Arcade',
    url: 'https://game-16-sky-shooter-balloon-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Arcade', 'Puzzle', 'Physics'],
    image:'/images/images1/bubble-shooter.webp'
  });

  games.push({
    id: 'game-21',
    slug: 'word-ladder',
    title: 'Word Ladder',
    description: 'Relate words and find the target word. A mental workout for word lovers.',
    thumbnail: '⛓️',
    category: 'Arcade',
    url: 'https://game-15-word-ladder-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Arcade', 'Puzzle','Word'],
    image:'/images/images1/word-ladder.webp'
  });

  games.push({
    id: 'game-22',
    slug: 'lexiquest-wordsearch',
    title: 'LexiQuest Wordsearch',
    description: 'The modern evolution of word search. 100 levels of pure mental stimulation.',
    thumbnail: '⛓️',
    category: 'Arcade',
    url: 'https://game-14-lexiquest-wordsearch-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Arcade', 'Puzzle','Word'],
    image:'/images/images1/lexi-quest.webp'
  });

  games.push({
    id: 'game-23',
    slug: 'ohflip',
    title: 'Oh! Flip',
    description: 'Defy gravity with stylish stunts. Land perfectly or it is game over.',
    thumbnail: '🤸',
    category: 'Physics',
    url: 'https://game-12-ohflip-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FCE4EC]',
    size: 'small',
    tags: ['Physics', 'Arcade', 'Stickman'],
    image:'/images/images1/oh-flip.webp'
  });

  games.push({
    id: 'game-24',
    slug: 'georecall',
    title: 'GeoRecall',
    description: 'A memory-based geography game. Recall locations and landmarks across the globe.',
    thumbnail: '🧠',
    category: 'Geography',
    url: 'https://game-21-georecall-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Geography', 'Memory', 'Puzzle'],
    image:'/images/images1/geo-recall.webp'
  });

  games.push({
    id: 'game-25',
    slug: 'borderquest',
    title: 'BorderQuest',
    description: 'Navigate through international borders and identify nations by their unique shapes.',
    thumbnail: '🗺️',
    category: 'Geography',
    url: 'https://game-24-borderquest-geo-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Geography', 'Borders', 'Quiz'],
    image:'/images/images1/border-quest.webp'
  });

  games.push({
    id: 'game-26',
    slug: 'map-match',
    title: 'Map Match',
    description: 'Connect countries to their corresponding territories in this fast-paced geography racer.',
    thumbnail: '🏁',
    category: 'Geography',
    url: 'https://game-26-map-match-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Geography', 'Matching', 'Arcade'],
    image:'/images/images1/map-match.webp'
  });

  games.push({
    id: 'game-27',
    slug: 'geo-explorer',
    title: 'Geo Explorer',
    description: 'Embark on a digital expedition to discover hidden gems around the world.',
    thumbnail: '🔭',
    category: 'Geography',
    url: 'https://game-25-geo-explorer-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Geography', 'Discovery', 'Adventure'],
    image:'/images/images1/geo-explorer.webp'
  });

  games.push({
    id: 'game-28',
    slug: 'geopath',
    title: 'GeoPath',
    description: 'Find the shortest path between global hubs and master the world’s transit lines.',
    thumbnail: '🛣️',
    category: 'Geography',
    url: 'https://game-22-geopath-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Geography', 'Logic', 'Pathfinding'],
    image:'/images/images1/geo-path.webp'
  });

  games.push({
    id: 'game-29',
    slug: 'optigrid',
    title: 'OptiGrid',
    description: 'A precision-based grid puzzle. Align the elements to clear the screen.',
    thumbnail: '📐',
    category: 'Puzzle',
    url: 'https://game-20-optigrid-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Puzzle', 'Grid', 'Logic'],
    image:'/images/images1/opti-grid.webp'
  });

  games.push({
    id: 'game-30',
    slug: 'netwalk',
    title: 'NetWalk',
    description: 'Rotate the network pipes to bring the system back online.',
    thumbnail: '🌐',
    category: 'Puzzle',
    url: 'https://game-19-netwalk-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Puzzle', 'Strategy', 'Connection'],
    image:'/images/images1/nexus.webp'
  });

  games.push({
    id: 'game-31',
    slug: 'iron-repulsor',
    title: 'Iron Repulsor',
    description: 'Channel your inner hero. Blast targets by aiming your palms at the screen.',
    thumbnail: '🖐️',
    category: 'WebCam',
    url: 'https://game-29-iron-repulsor-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#ECEFF1]',
    size: 'medium',
    tags: ['WebCam', 'Action', 'Hero'],
    image:'/images/images1/iron-repulsion.webp'
  });
  
  games.push({
    id: 'game-32',
    slug: 'emoji-slasher',
    title: 'Emoji Slasher',
    description: 'Use your hands to slice through waves of emojis in this high-energy webcam challenge.',
    thumbnail: '⚔️',
    category: 'WebCam',
    url: 'https://game-33-emoji-slasher-cam-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FFF9C4]',
    size: 'medium',
    tags: ['WebCam', 'Action', 'Slasher'],
    image:'/images/images1/emoji-slasher.webp'
  });

  games.push({
    id: 'game-33',
    slug: 'fruit-slasher',
    title: 'Fruit Slasher',
    description: 'A classic reimagined! Slice flying fruit with hand-tracking precision via your camera.',
    thumbnail: '🍎',
    category: 'WebCam',
    url: 'https://game-32-fruit-slasher-cam-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#F1F8E9]',
    size: 'medium',
    tags: ['WebCam', 'Arcade', 'Slasher'],
    image:'/images/images1/fruit-slasher.webp'
  });

  games.push({
    id: 'game-34',
    slug: 'catch-the-ball',
    title: 'Catch the Ball',
    description: 'Test your reflexes by catching falling digital balls using your real-world hand movements.',
    thumbnail: '🎾',
    category: 'WebCam',
    url: 'https://game-31-catch-the-ball-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E3F2FD]',
    size: 'medium',
    tags: ['WebCam', 'Reflex', 'Sports'],
    image:'/images/images1/catch-ball.webp'
  });

  games.push({
    id: 'game-35',
    slug: 'aerodart',
    title: 'AeroDart',
    description: 'Aim and throw virtual darts at the board using motion gestures in front of your lens.',
    thumbnail: '🎯',
    category: 'WebCam',
    url: 'https://game-30-aerodart-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FFEBEE]',
    size: 'medium',
    tags: ['WebCam', 'Skill', 'Darts'],
    image:'/images/images1/aero-dart.webp'
  });

  games.push({
    id: 'game-36',
    slug: 'chromafit',
    title: 'ChromaFit',
    description: 'Match colors and shapes in this vibrant evolution of the classic arcade puzzle.',
    thumbnail: '🎨',
    category: 'Arcade',
    url: 'https://game-18-chromafit-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#E0F2F1]',
    size: 'medium',
    tags: ['Arcade', 'Puzzle', 'Color'],
    image:'/images/images1/chroma-fit.webp'
  });  

  games.push({
    id: 'game-37',
    slug: 'ball-shooter',
    title: 'Ball Shooter',
    description: 'Control the launcher with your hands to blast targets in this motion-controlled arcade game.',
    thumbnail: '☄️',
    category: 'WebCam',
    url: 'https://game-28-ball-shooter-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#F3E5F5]',
    size: 'medium',
    tags: ['WebCam', 'Shooter', 'Arcade'],
    image:'/images/images1/ball-shooter.webp'
  });

  games.push({
    id: 'game-38',
    slug: 'run-bunny',
    title: 'Run Bunny',
    description: 'A quirky arcade challenge where speed and precision are key to interacting with your bunny pal.',
    thumbnail: '🐰',
    category: 'Arcade',
    url: 'https://game-27-rub-bunny-gorogoro.aisehibanayahai00.workers.dev/',
    color: 'bg-[#FFF3E0]',
    size: 'medium',
    tags: ['Arcade', 'Casual', 'Animals'],
    image:'/images/images1/run-bunny.webp'
  });
  
  return games;
};

export const GAMES = generatePhysicsGames(200); // 200 + 9 original = 209 games
