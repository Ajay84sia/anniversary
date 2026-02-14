import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50">
      {/* Decorative floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.5, 0], 
              y: -100,
              x: Math.random() * 100 - 50 
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-rose-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`
            }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-6">
            Celebrating One Year of Love
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-neutral-800 mb-6 leading-tight">
            Happy Anniversary <br />
            <span className="text-rose-500 font-cursive">Didi & Jiju</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            365 days of laughter, love, and beautiful memories. Here's to the beginning of forever.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-5 h-5 fill-current" />
              View Gallery
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('dedication')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
              My Dedication
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400"
      >
        <span className="text-sm">Scroll down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
