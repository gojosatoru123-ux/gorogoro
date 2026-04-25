import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'game';
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
  ogImage = "https://picsum.photos/seed/goro-goro/1200/630",
  ogType = "website",
  gameData
}: SEOProps) => {
  const siteName = "GORO GORO";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  // Structured Data (JSON-LD)
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
      "priceCurrency": "USD"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": canonical,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonical}/games?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
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
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#FF6321" />
    </Helmet>
  );
});

export default SEO;
