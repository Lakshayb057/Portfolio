import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, ExternalLink, Flame, Trophy, Star } from 'lucide-react';

const Stats = () => {
  const [activeTab, setActiveTab] = useState('all');

  const weeks = 40;
  const days = 7;
  const generateHeatmap = () => {
    const grid = [];
    for (let w = 0; w < weeks; w++) {
      const col = [];
      for (let d = 0; d < days; d++) {
        const seed = Math.sin(w * 12.3 + d * 4.7);
        let level = 0;
        if (w > 10 && w < 38) {
          if (seed > 0.6) level = 3;
          else if (seed > 0.2) level = 2;
          else if (seed > -0.2) level = 1;
        } else if (seed > 0.4) {
          level = 1;
        }
        col.push(level);
      }
      grid.push(col);
    }
    return grid;
  };

  const heatmapGrid = generateHeatmap();

  return (
    <section id="stats" className="py-24 px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
        <div className="flex items-center gap-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight flex items-center">
            <span>Coding Stats & Activity</span>
            <span className="text-red-500">.</span>
          </h2>
          <div className="hidden sm:block h-px bg-zinc-800/80 w-24" />
        </div>
        <p className="text-zinc-400 text-sm sm:text-base max-w-md">
          A dynamic showcase of problem-solving consistency across coding platforms.
        </p>
      </div>

      {/* 3 Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* LeetCode Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 30px rgba(239,68,68,0.15)' }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                  LeetCode
                </span>
              </div>
              <Code size={18} className="text-zinc-500" />
            </div>

            <div className="flex items-center gap-6 mb-6">
              {/* Radial count badge */}
              <div className="relative w-24 h-24 rounded-full border-4 border-red-500/20 flex flex-col items-center justify-center bg-zinc-950/60 shadow-inner">
                <span className="font-display font-extrabold text-3xl text-white">160+</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Solved</span>
                <div className="absolute inset-0 rounded-full border-t-4 border-red-500 transform rotate-45" />
              </div>

              {/* Difficulty breakdown */}
              <div className="flex flex-col gap-2 flex-grow text-xs font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Easy
                  </span>
                  <span className="font-mono text-zinc-200">108</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Medium
                  </span>
                  <span className="font-mono text-zinc-200">50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-rose-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Hard
                  </span>
                  <span className="font-mono text-zinc-200">6</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
            <div>
              <span>Rating: </span>
              <span className="text-zinc-200 font-bold">1480+</span>
            </div>
            <div>
              <span>Global: </span>
              <span className="text-zinc-200 font-bold">Top 20%</span>
            </div>
          </div>
        </motion.div>

        {/* HackerRank Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -6, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 30px rgba(239,68,68,0.15)' }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                  HackerRank
                </span>
              </div>
              <Trophy size={18} className="text-zinc-500" />
            </div>

            <div className="mb-4">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2.5">
                Earned Badges
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: 'C++', stars: '★★★★★' },
                  { name: 'C Lang', stars: '★★★' },
                  { name: 'SQL', stars: '★★★' },
                  { name: 'Java', stars: '★★' },
                  { name: 'Python', stars: '★★' },
                  { name: 'Problem Sol.', stars: '★★' },
                ].map((b) => (
                  <div key={b.name} className="bg-zinc-950/70 border border-zinc-800 rounded-xl p-2 text-center">
                    <span className="block text-[11px] font-semibold text-zinc-200 truncate">{b.name}</span>
                    <span className="text-[9px] text-amber-400">{b.stars}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
            <span className="text-xs text-zinc-400 font-medium">Python (Basic)</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <CheckCircle size={11} /> VERIFIED
            </span>
          </div>
        </motion.div>

        {/* GeeksforGeeks Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -6, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 30px rgba(239,68,68,0.15)' }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                  GeeksforGeeks
                </span>
              </div>
              <Star size={18} className="text-zinc-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  Coding Score
                </span>
                <span className="font-display font-extrabold text-3xl text-white">135+</span>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-4 text-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  Problems Solved
                </span>
                <span className="font-display font-extrabold text-3xl text-red-400">60+</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-500">Institute Rank</span>
            <span className="text-red-400 font-bold">Top 5% @ LPU</span>
          </div>
        </motion.div>
      </div>

      {/* Aggregated Activity Heatmap in Glowing Red */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-1">
              Aggregated Activity Heatmap
            </h3>
            <p className="text-xs text-zinc-400">
              Consolidated view of commits & problem submissions across platforms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-zinc-950/80 border border-zinc-800 p-1 rounded-full text-xs font-medium self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === 'all'
                  ? 'bg-red-500 text-white font-semibold shadow-md shadow-red-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('leetcode')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === 'leetcode'
                  ? 'bg-red-500 text-white font-semibold shadow-md shadow-red-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              LeetCode Only
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeTab === 'other'
                  ? 'bg-red-500 text-white font-semibold shadow-md shadow-red-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              HackerRank & GFG
            </button>
          </div>
        </div>

        {/* Heatmap Matrix with Red Intensity Levels */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[650px] flex gap-[3.5px]">
            {heatmapGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3.5px]">
                {week.map((level, dIdx) => {
                  let bg = 'bg-zinc-800/30';
                  if (level === 1) bg = 'bg-red-500/30';
                  if (level === 2) bg = 'bg-red-500/65';
                  if (level === 3) bg = 'bg-red-500';
                  return (
                    <div
                      key={dIdx}
                      title={`Activity level ${level}`}
                      className={`w-[11px] h-[11px] rounded-[2.5px] ${bg} hover:ring-2 hover:ring-white transition-all`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Footer info & Red legend */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 font-mono mt-5 pt-4 border-t border-zinc-800/60 gap-3">
          <div>
            <span>Total Active Days: </span>
            <span className="text-red-400 font-bold">180+ days</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-zinc-800/30" />
            <span className="w-2.5 h-2.5 rounded-sm bg-red-500/30" />
            <span className="w-2.5 h-2.5 rounded-sm bg-red-500/65" />
            <span className="w-2.5 h-2.5 rounded-sm bg-red-500" />
            <span>More</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
