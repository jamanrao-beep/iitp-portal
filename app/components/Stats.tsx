// components/Stats.tsx
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.from(".stat-card", {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });
  }, []);

  return (
    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 my-20">
      {[
        { label: "Engineering NIRF", val: "19th" },
        { label: "Overall NIRF", val: "36th" },
        { label: "Asia Ranking", val: "191st" },
        { label: "Inter IIT Tech", val: "9th" }
      ].map((stat, i) => (
        <div key={i} className="stat-card p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="text-sm text-slate-600 uppercase tracking-widest font-bold">{stat.label}</p>
          <h2 className="text-4xl font-black text-blue-900 mt-2">{stat.val}</h2>
        </div>
      ))}
    </div>
  );
};