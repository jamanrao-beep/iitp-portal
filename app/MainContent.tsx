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

function MainContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("type") || "Latest";

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

  const filteredNotices = notices.filter((n) => {
    const matchesTab = activeTab === "Latest" || n.type === activeTab;
    const matchesSearch = n.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans selection:bg-iitp-gold selection:text-white">
      {/* NAVIGATION */}
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
            <div className="hidden md:block text-left">
              <h1 className="text-[#003366] font-black text-xl leading-none">
                IIT PATNA
              </h1>
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-1">
                Indian Institute of Technology Patna
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden lg:flex gap-6 text-sm font-bold text-slate-600">
              {["Academic", "R&D", "Research", "Admissions"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    router.push(`?type=${link}`, { scroll: false })
                  }
                  className={`hover:text-[#003366] transition-colors ${activeTab === link ? "text-[#003366] border-b-2 border-[#003366]" : ""}`}
                >
                  {link.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowCourses(true)}
              className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs font-bold text-[#003366] hover:bg-[#003366] hover:text-white transition-all"
            >
              <GraduationCap className="w-4 h-4" /> COURSES
            </button>
            <div className="relative flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Search notices..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="absolute right-10 bg-slate-100 px-4 py-2 rounded-md text-sm outline-none border border-[#003366]/20 text-black"
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-slate-100 rounded-full"
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
      </nav>

      {/* HERO */}
      <section className="relative h-[40vh] bg-[#003366] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('https://www.iitp.ac.in/images/iitp_images/campus/admin_block.jpg')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight text-left">
              Official Portal <br />
              <span className="text-[#B8860B]">Development & Maintenance</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-black text-[#003366] mb-8 uppercase tracking-tight">
            Viewing: {activeTab}
          </h3>
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
                    className="bg-white border border-slate-200 p-5 rounded-xl hover:border-[#003366] hover:shadow-md transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-6">
                      <div className="bg-[#003366] text-white p-3 rounded-lg text-center min-w-[65px]">
                        <p className="text-xs font-bold leading-none">
                          {item.date.split(" ")[1]}
                        </p>
                        <p className="text-xl font-black">
                          {item.date.split(" ")[0]}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest">
                          {item.type}
                        </p>
                        <p className="text-slate-800 font-bold group-hover:text-[#003366] transition-colors">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#003366]" />
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400">
                  No results found.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SIDEBAR STATS */}
        <div className="space-y-6">
          <div className="bg-[#003366] p-8 rounded-3xl text-white">
            <Award className="w-8 h-8 text-[#B8860B] mb-4" />
            <h4 className="text-xl font-black">NIRF Ranking</h4>
            <div className="mt-4 space-y-4">
              <div className="stat-item border-b border-white/10 pb-2">
                <p className="text-white/60 text-[10px] uppercase font-bold">
                  Engineering
                </p>
                <p className="text-2xl font-black text-[#B8860B]">19th</p>
              </div>
              <div className="stat-item">
                <p className="text-white/60 text-[10px] uppercase font-bold">
                  Overall
                </p>
                <p className="text-2xl font-black">36th</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE MODAL */}
      <AnimatePresence>
        {showCourses && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#003366]/95 flex items-center justify-center p-6 backdrop-blur-sm"
          >
            <div className="max-w-4xl w-full bg-white rounded-3xl p-10 relative">
              <button
                onClick={() => setShowCourses(true)}
                className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs font-bold text-[#003366] hover:bg-[#003366] hover:text-white transition-all"
                title="View Academic Courses" // ADD THIS
              >
                <GraduationCap className="w-4 h-4" /> COURSES
              </button>

              <h2 className="text-3xl font-black text-[#003366] mb-8">
                Academic Departments
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Computer Science",
                  "Electrical Eng.",
                  "Mechanical Eng.",
                  "Mathematics",
                  "Civil & Environmental",
                  "Physics",
                ].map((dept) => (
                  <div
                    key={dept}
                    className="p-4 border border-slate-200 rounded-xl hover:bg-[#B8860B] hover:text-white transition-all cursor-pointer group"
                  >
                    <p className="font-bold">{dept}</p>
                    <p className="text-xs opacity-60 group-hover:opacity-100">
                      Browse Curriculum →
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MainContent;
