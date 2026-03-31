import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { 
  AlertTriangle
} from 'lucide-react';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./components/LandingPage'));
const GamePage = lazy(() => import('./components/GamePage'));
const AllGamesPage = lazy(() => import('./components/AllGamesPage'));
const AboutUsPage = lazy(() => import('./components/AboutUsPage'));

// Simple Loading Component
const PageLoader = () => (
  <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center gap-4">
    <div className="w-16 h-16 border-8 border-black border-t-[#FF6321] rounded-full animate-spin shadow-[4px_4px_0px_black]" />
    <p className="text-xl font-black uppercase italic tracking-tighter animate-pulse">Loading Paradise...</p>
  </div>
);

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Error Boundary Component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public props: ErrorBoundaryProps;
  public state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-center p-8 text-center">
          <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mb-8 border-4 border-black shadow-[8px_8px_0px_black]">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">Simulation Error</h2>
          <p className="text-xl font-bold text-slate-600 max-w-md mb-8">
            The physics engine encountered an unexpected anomaly. Please refresh the archive.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-12 py-6 bg-black text-white rounded-2xl font-black uppercase italic text-xl hover:scale-110 transition-transform shadow-[8px_8px_0px_#FF6321]"
          >
            Reboot System
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/games" element={<AllGamesPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/game/:slug" element={<GamePage />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
