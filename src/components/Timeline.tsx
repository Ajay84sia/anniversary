import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gem, Home, Heart } from 'lucide-react';

const milestones = [
  {
    date: "The Beginning",
    title: "First Met",
    description: "The moment when two paths crossed and a beautiful journey began.",
    icon: <Calendar className="w-6 h-6 text-white" />,
  },
  {
    date: "The Engagement",
    title: "She Said Yes!",
    description: "A promise of forever, sealed with a ring and sealed with love.",
    icon: <Gem className="w-6 h-6 text-white" />,
  },
  {
    date: "The Wedding",
    title: "Tying the Knot",
    description: "Surrounded by loved ones, vows were exchanged and two souls became one.",
    icon: <Heart className="w-6 h-6 text-white fill-current" />,
  },
  {
    date: "Today",
    title: "First Anniversary",
    description: "Celebrating one year of togetherness, growth, and endless love.",
    icon: <Home className="w-6 h-6 text-white" />,
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-rose-100"></div>

          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-5/12"></div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 border-4 border-white shadow-lg z-10">
                {item.icon}
              </div>

              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-neutral-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-neutral-100">
                  <span className="text-rose-500 font-semibold text-sm tracking-wide uppercase">{item.date}</span>
                  <h3 className="font-serif text-xl text-neutral-800 mt-2 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
