import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/DEP00110.jpg';
import img2 from '../assets/DEP00290.jpg';
import img3 from '../assets/0Z4A2047.jpg';
import img4 from '../assets/0Z4A2341.jpg';
import img5 from '../assets/RAH2200.jpg';
import img6 from '../assets/RAH2218.jpg';

// Placeholder images using Unsplash
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">Beautiful Moments</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">Capturing the love, laughter, and everything in between.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 1 : -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 1 : -1 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-1.5 rounded-2xl bg-gradient-to-br from-rose-300 via-pink-200 to-rose-300 shadow-xl shadow-rose-200/50 aspect-[4/5] md:aspect-square"
            >
              <div className="bg-white p-2 w-full h-full rounded-xl">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
