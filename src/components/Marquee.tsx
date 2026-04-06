import React, { memo } from 'react';

const Marquee = memo(() => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i}>
            🔥 AMAZING GAMES LIVE • 100+ GAMES READY • GORO GORO V2.0
          </span>
        ))}
      </div>
    </div>
  );
});

export default Marquee;
