import React from 'react';
import { Heart } from 'lucide-react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Dedication from './components/Dedication';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      <MusicPlayer />
      <Hero />
      <Timeline />
      <Gallery />
      <Dedication />
      
      <footer className="py-8 text-center text-neutral-500 text-sm">
        <p>Made with <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500" /> for my Didi & Jiju</p>
      </footer>
    </div>
  );
}

export default App;
