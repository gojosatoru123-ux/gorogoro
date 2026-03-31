import React from 'react';

export type GameCategory = 'Action' | 'Puzzle' | 'Adventure' | 'Arcade' | 'Physics' | 'Simulation';

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  category: GameCategory;
  component?: React.ComponentType<{ onGameOver?: (score: number) => void }>;
  url?: string;
  image?: string;
  color: string;
  size: 'large' | 'medium' | 'small' | 'tall';
  tags: string[];
}
