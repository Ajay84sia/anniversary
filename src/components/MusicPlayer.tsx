import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Pause, Play, Heart } from 'lucide-react';
import Button from './ui/Button';
import musicUrl from '../assets/song.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Using a sample romantic instrumental track

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(error => {
          console.error("Playback failed:", error);
        });
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt auto-play on mount (often blocked, but worth a try with muted logic if needed, 
    // but here we use the overlay approach for guaranteed experience)
    // We can't rely on pure autoplay for audio.
  }, []);

  return (
    <>
      {/* Welcome Overlay to force interaction */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-rose-50/95 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8"
            >
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto mb-6 animate-pulse" />
              <h1 className="font-serif text-4xl mb-4 text-neutral-800">Welcome</h1>
              <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                We've prepared a special experience for you. Please enable sound for the best experience.
              </p>
              <Button onClick={startMusic} className="px-8 py-4 text-lg mx-auto">
                Enter Website
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-20 right-6 z-50 md:bottom-8 md:right-10">
        <audio 
          ref={audioRef} 
          src={musicUrl} 
          loop 
        />
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
            isPlaying 
              ? 'bg-rose-500 text-white shadow-rose-200/50' 
              : 'bg-white text-neutral-800 shadow-neutral-200/50 border border-neutral-100'
          }`}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          
          {/* Animated rings when playing */}
          <AnimatePresence>
            {isPlaying && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-rose-400 -z-10"
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 rounded-full bg-rose-400 -z-10"
                />
              </>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default MusicPlayer;
