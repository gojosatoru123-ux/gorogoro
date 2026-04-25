import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'video.game'; // Changed 'game' to 'video.game'
  gameData?: {
    name: string;
    description: string;
    genre: string;
    image: string;
  };
}

const SEO = memo(({ 
  title = "GORO GORO | The Ultimate Retro Gaming Archive", 
  description = "Experience the best pixel-based simulations and retro games in your browser. Physics-driven fun, zero lag, and a massive archive of classics.",
  canonical = "https://gorogoro.games",
  ogImage = "https://gorogoro.games/og-default.webp",
  ogType = "website",
  gameData
}: SEOProps) => {
  const siteName = "GORO GORO";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  const structuredData = gameData ? {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": gameData.name,
    "description": gameData.description,
    "genre": gameData.genre,
    "image": gameData.image,
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": canonical,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonical}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#FF6321" />
    </Helmet>
  );
});

export default SEO;