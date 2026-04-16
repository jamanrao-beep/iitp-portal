"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Bell,
  Award,
  BookOpen,
  ExternalLink,
  Menu,
  Search,
  X,
  GraduationCap,
} from "lucide-react";
import { gsap } from "gsap";

export default function IITPModernized() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("type") || "Latest";

  // State for Search and UI
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCourses, setShowCourses] = useState(false);

  const statsRef = useRef(null);

  useEffect(() => {
    gsap.from(".stat-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const notices = [
    // ACADEMIC
    {
      id: 1,
      type: "Academic",
      title: "Registration for Autumn Semester 2026-27: UG/PG Batches",
      date: "20 APR",
    },
    {
      id: 2,
      type: "Academic",
      title: "Ph.D. Admission - July 2026 (Autumn Semester) Guidelines",
      date: "16 APR",
    },
    {
      id: 3,
      type: "Academic",
      title: "End-Semester Examination Schedule for Sophomore Year",
      date: "12 APR",
    },

    // RESEARCH
    {
      id: 4,
      type: "Research",
      title: "Call for Proposals: Interdisciplinary AI Research Grant 2026",
      date: "18 APR",
    },
    {
      id: 5,
      type: "Research",
      title:
        "Publication: IITP Faculty achieves breakthrough in 6G Signal Processing",
      date: "14 APR",
    },
    {
      id: 6,
      type: "Research",
      title: "Workshop on Quantum Computing Architectures at Aryabhatta Centre",
      date: "11 APR",
    },

    // ADMISSIONS
    {
      id: 7,
      type: "Admissions",
      title: "JEE Advanced 2026: Information Brochure for IIT Patna Zone",
      date: "19 APR",
    },
    {
      id: 8,
      type: "Admissions",
      title: "M.Tech (Research) - Shortlisted Candidates for Interview",
      date: "15 APR",
    },
    {
      id: 9,
      type: "Admissions",
      title: "International Students Admission Portal (DASA 2026) Live",
      date: "09 APR",
    },

    // R&D
    {
      id: 10,
      type: "R&D",
      title: "MoU signed with Samsung Research for On-Device AI Lab",
      date: "17 APR",
    },
    {
      id: 11,
      type: "R&D",
      title: "New Patent Filed: Low-Cost Air Quality Monitoring IoT Mesh",
      date: "13 APR",
    },
    {
      id: 12,
      type: "R&D",
      title: "Technex 2026: Innovations in Liquid Cooling Systems Showcased",
      date: "07 APR",
    },

    // LATEST (General)
    {
      id: 13,
      type: "Latest",
      title: "IIT Patna secures 9th Rank in 58th Inter IIT Sports Meet",
      date: "14 APR",
    },
    {
      id: 14,
      type: "Latest",
      title: "Director's Message: Vision for Phase-III Campus Expansion",
      date: "10 APR",
    },
    {
      id: 15,
      type: "Latest",
      title: "Anwesha 2026: Techno-Cultural Festival Recap and Awards",
      date: "05 APR",
    },
  ];

  // Search Filtering Logic
  const filteredNotices = notices.filter((n) => {
    const matchesTab = activeTab === "Latest" || n.type === activeTab;
    const matchesSearch = n.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const navLinks = [
    { name: "ACADEMIC", slug: "Academic" },
    { name: "R&D", slug: "R&D" },
    { name: "RESEARCH", slug: "Research" },
    { name: "ADMISSIONS", slug: "Admissions" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-iitp-gold selection:text-white">
      {/* 1. DYNAMIC NAVIGATION BAR */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src="https://www.iitp.ac.in/images/iitp_logo.png"
              alt="IITP"
              className="h-14"
            />
            <div className="hidden md:block">
              <h1 className="text-iitp-blue font-black text-xl leading-none">
                IIT PATNA
              </h1>
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">
                Indian Institute of Technology Patna
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex gap-6 text-sm font-bold text-slate-600">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    router.push(`?type=${link.slug}`, { scroll: false })
                  }
                  className={`hover:text-iitp-blue transition-colors ${activeTab === link.slug ? "text-iitp-blue border-b-2 border-iitp-blue" : ""}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-slate-200 hidden lg:block" />

            <div className="flex items-center gap-4">
              {/* COURSES TAB */}
              <button
                onClick={() => setShowCourses(true)}
                className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs font-bold text-iitp-blue hover:bg-iitp-blue hover:text-white transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                COURSES
              </button>

              {/* SEARCH BAR TOGGLE */}
              <div className="relative flex items-center">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.input
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 200, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      type="text"
                      placeholder="Search notices..."
                      className="absolute right-10 bg-slate-100 px-4 py-2 rounded-md text-sm outline-none border border-iitp-blue/20"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  {isSearchOpen ? (
                    <X className="w-5 h-5 text-red-500" />
                  ) : (
                    <Search className="w-5 h-5 text-slate-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[50vh] bg-iitp-blue overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('https://www.iitp.ac.in/images/iitp_images/campus/admin_block.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Portal <span className="text-iitp-gold">Maintenance</span> <br />&
              Optimization
            </h2>
            <p className="text-slate-300 mt-4 max-w-xl text-lg">
              Demonstrating Production-Ready Architecture for the IIT Patna Web
              Team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h3 className="text-2xl font-black text-iitp-blue">
              Showing:{" "}
              <span className="text-iitp-gold uppercase">{activeTab}</span>
            </h3>
            {searchQuery && (
              <p className="text-sm text-slate-500 italic">
                Found {filteredNotices.length} results for "{searchQuery}"
              </p>
            )}
          </div>

          <div className="space-y-4 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {filteredNotices.length > 0 ? (
                  filteredNotices.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-slate-200 p-5 rounded-xl hover:border-iitp-blue hover:shadow-md transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-6">
                        <div className="bg-iitp-blue text-white p-3 rounded-lg text-center min-w-[60px]">
                          <p className="text-xs font-bold leading-none">
                            {item.date.split(" ")[1]}
                          </p>
                          <p className="text-lg font-black">
                            {item.date.split(" ")[0]}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-iitp-gold uppercase">
                            {item.type}
                          </p>
                          <p className="text-slate-800 font-bold group-hover:text-iitp-blue transition-colors">
                            {item.title}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-iitp-blue" />
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 font-medium">
                      No results found in {activeTab}.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* COURSE OVERLAY */}
        <AnimatePresence>
          {showCourses && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-iitp-blue/95 flex items-center justify-center p-6"
            >
              <div className="max-w-4xl w-full bg-white rounded-3xl p-10 relative">
                <button
                  onClick={() => setShowCourses(false)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full"
                >
                  <X className="w-6 h-6 text-iitp-blue" />
                </button>
                <h2 className="text-3xl font-black text-iitp-blue mb-8">
                  Academic Departments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Computer Science",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Mathematics",
                    "Civil & Environmental",
                    "Physics",
                  ].map((dept) => (
                    <div
                      key={dept}
                      className="p-4 border border-slate-200 rounded-xl hover:bg-iitp-gold hover:text-white transition-all cursor-pointer group text-blue-500"
                    >
                      <p className="font-bold">{dept}</p>
                      <p className="text-xs opacity-70 group-hover:opacity-100">
                        View Curriculum →
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STATS SIDEBAR */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h4 className="font-black text-iitp-blue mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-600">
              <li className="flex items-center gap-2 hover:text-iitp-gold cursor-pointer">
                <BookOpen className="w-4 h-4" /> Library Portal
              </li>
              <li className="flex items-center gap-2 hover:text-iitp-gold cursor-pointer">
                <Award className="w-4 h-4" /> NIRF Data
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
