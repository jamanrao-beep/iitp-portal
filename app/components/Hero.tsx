// components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background with next/image optimization */}
      <div className="absolute inset-0 opacity-40 bg-[url('/campus-bg.jpg')] bg-cover bg-center" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          INDIAN INSTITUTE OF <span className="text-blue-500">TECHNOLOGY PATNA</span>
        </h1>
        <p className="mt-4 text-xl italic text-slate-300 font-serif">
          "विद्यार्थी लभते विद्याम्" (One who aspires wisdom, attains it)
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-full font-semibold">
          Explore Research
        </button>
      </motion.div>
    </section>
  );
};