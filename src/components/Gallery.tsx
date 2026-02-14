import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/DEP00110.jpg';
import img2 from '../assets/DEP00290.jpg';
import img3 from '../assets/0Z4A2047.JPG';
import img4 from '../assets/0Z4A2341.JPG';
import img5 from '../assets/RAH2200.JPG';
import img6 from '../assets/RAH2218.JPG';

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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/5] md:aspect-square bg-white"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
