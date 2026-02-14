import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Dedication = () => {
  return (
    <section id="dedication" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-6">A Special Dedication</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-50 p-10 md:p-14 rounded-[2rem] shadow-xl border border-rose-100 relative"
        >
          <Quote className="absolute top-8 left-8 w-12 h-12 text-rose-200 rotate-180" />
          <Quote className="absolute bottom-8 right-8 w-12 h-12 text-rose-200" />
          
          <div className="text-center space-y-6">
            <p className="font-serif text-2xl md:text-3xl text-neutral-700 leading-relaxed italic">
              "To the world, you may be just two people, but to each other, you are the world. Seeing you two together makes me believe in true love. May your bond grow stronger with each passing day."
            </p>
            
            <div className="pt-8">
              <h3 className="font-cursive text-4xl text-rose-500">With Love</h3>
              <p className="text-neutral-500 mt-2 font-medium tracking-wide uppercase text-sm">AJAY CHAURASIA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dedication;
