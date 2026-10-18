import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, RefreshCw, CheckCircle2, Flame } from 'lucide-react';
import { fetchLeetCodeStats, PROFILE_LINKS, INITIAL_STATS } from '../services/codingStats';
import leetcodeLogo from '../assets/tech/leetcode.svg';

const Stats = () => {
  const [stats, setStats] = useState(INITIAL_STATS);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);

  // Load real-time stats directly from LeetCode
  const syncLiveStats = async () => {
    setIsSyncing(true);
    try {
      const leetcodeData = await fetchLeetCodeStats();
      setStats(prev => ({
        ...prev,
        leetcode: { ...prev.leetcode, ...leetcodeData },
      }));
      setLastSynced(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch (err) {
      console.warn('Real-time sync error, using cached snapshot:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    syncLiveStats();
  }, []);

  // Build a true 52-week calendar matrix strictly representing the past 1 year of LeetCode records
  const { weeksGrid, monthSlots } = useMemo(() => {
    const calendar = stats.leetcode?.submissionCalendar || {};
    
    // Map timestamp -> count and format dates
    const dayCounts = {};
    for (const [ts, count] of Object.entries(calendar)) {
      const d = new Date(parseInt(ts, 10) * 1000);
      const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
      dayCounts[key] = count;
    }

    // 52 weeks (364 days) strictly ending on the current day
    const today = new Date();
    const endDay = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    const totalDays = 52 * 7;
    const startDay = new Date(endDay);
    startDay.setUTCDate(endDay.getUTCDate() - totalDays + 1);

    const grid = [];
    const months = new Array(52).fill('');
    let lastMonth = -1;
    let lastLabelWeek = -10;

    for (let w = 0; w < 52; w++) {
      const weekDays = [];
      const weekStartDate = new Date(startDay);
      weekStartDate.setUTCDate(startDay.getUTCDate() + (w * 7));
      
      const m = weekStartDate.getUTCMonth();
      if (m !== lastMonth && (w - lastLabelWeek) >= 3) {
        months[w] = weekStartDate.toLocaleDateString('en-US', { month: 'short' });
        lastMonth = m;
        lastLabelWeek = w;
      }

      for (let d = 0; d < 7; d++) {
        const curDate = new Date(startDay);
        curDate.setUTCDate(startDay.getUTCDate() + (w * 7 + d));
        const key = `${curDate.getUTCFullYear()}-${String(curDate.getUTCMonth() + 1).padStart(2, '0')}-${String(curDate.getUTCDate()).padStart(2, '0')}`;
        
        const count = dayCounts[key] || 0;
        let level = 0;
        if (count >= 1 && count <= 2) level = 1;
        else if (count >= 3 && count <= 6) level = 2;
        else if (count > 6) level = 3;

        weekDays.push({
          dateKey: key,
          formattedDate: curDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count,
          level,
        });
      }
      grid.push(weekDays);
    }

    return {
      weeksGrid: grid,
      monthSlots: months,
    };
  }, [stats.leetcode?.submissionCalendar]);

  return (
    <section id="stats" className="pt-6 sm:pt-10 md:pt-20 pb-6 sm:pb-10 md:pb-24 px-4 sm:px-6 md:px-12 relative max-w-7xl mx-auto" style={{ perspective: 1200 }}>
      {/* Section Header with Monoton Branding & Live Sync Status */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-8 md:mb-12">
        <div>
          <h2 className="hero-name-font tracking-wide text-white uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] leading-none flex items-baseline">
            <span className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">CODING STATS</span>
            <span className="text-red-500 font-sans ml-1 text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-normal mt-3">
            Real-time showcase of my problem-solving consistency and algorithmic proficiency on LeetCode.
          </p>
        </div>

        {/* Live API Status Indicator & Refresh Action */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141417] border border-white/[0.08] shadow-inner text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-300 font-medium">LIVE API SYNCED</span>
            {lastSynced && (
              <span className="text-zinc-500 text-[11px] hidden sm:inline">({lastSynced})</span>
            )}
          </div>

          <button
            onClick={syncLiveStats}
            disabled={isSyncing}
            title="Refresh real-time stats"
            className="p-2.5 rounded-xl bg-[#141417] border border-white/[0.08] hover:border-red-500/40 text-zinc-400 hover:text-white transition-all disabled:opacity-50"
          >
            <RefreshCw size={14} className={isSyncing ? 'animate-spin text-red-500' : ''} />
          </button>
        </div>
      </div>

      {/* 2-Column Bento Layout: LeetCode Tile on Left, Activity Heatmap in Front on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        
        {/* Left Column (5 cols): LeetCode Statistics Tile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 35px rgba(239,68,68,0.15)' }}
          className="lg:col-span-5 rounded-3xl p-7 sm:p-8 border border-white/[0.08] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(239, 68, 68, 0.12) 0%, rgba(17, 17, 20, 0.95) 60%, rgba(13, 13, 16, 0.98) 100%)',
          }}
        >
          <div>
            {/* Header: Dot + LEETCODE + Authentic Logo */}
            <div className="flex items-center justify-between mb-7">
              <a
                href={PROFILE_LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 group-hover:opacity-90 transition-opacity"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-red-500 uppercase">
                  LEETCODE
                </span>
                <ExternalLink size={12} className="text-zinc-500 group-hover:text-red-400 transition-colors opacity-70" />
              </a>

              {/* Top-Right Official LeetCode Icon with Skills-style hover transition */}
              <a
                href={PROFILE_LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                className="group/toplogo relative p-1.5 rounded-xl transition-all duration-300 flex items-center justify-center hover:bg-white/[0.04]"
                title="View LeetCode Profile (@IoobM3wT7Z)"
              >
                <img
                  src={leetcodeLogo}
                  alt="LeetCode"
                  className="w-5 h-5 object-contain transition-all duration-300 filter grayscale brightness-[1.8] contrast-[1.25] opacity-90 group-hover/toplogo:filter-none group-hover/toplogo:opacity-100 group-hover/toplogo:scale-125 drop-shadow-[0_2px_8px_rgba(255,255,255,0.12)] group-hover/toplogo:drop-shadow-[0_4px_16px_rgba(255,161,22,0.6)]"
                />
              </a>
            </div>

            {/* Circular Gauge + Difficulty Breakdown */}
            <div className="flex items-center gap-5 sm:gap-6 mb-6">
              {/* Radial Donut Progress Meter */}
              <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 96 96">
                  {/* Background Track Circle */}
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#1c1c22"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  {/* Progress Arc Circle with Red Glow */}
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#ef4444"
                    strokeWidth="6"
                    strokeDasharray="251.3"
                    strokeDashoffset={251.3 * (1 - Math.min((stats.leetcode.totalSolved || 34) / 100, 0.85))}
                    strokeLinecap="round"
                    fill="transparent"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(239,68,68,0.7))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none">
                    {stats.leetcode.totalSolved}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mt-1">
                    SOLVED
                  </span>
                </div>
              </div>

              {/* Difficulty Breakdown Pills */}
              <div className="flex flex-col gap-2.5 flex-1">
                {/* Easy */}
                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl px-3.5 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                    <span className="text-xs font-semibold text-zinc-300">Easy</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-white">
                    {stats.leetcode.easy}
                    <span className="text-zinc-500 font-normal">/{stats.leetcode.totalEasy}</span>
                  </div>
                </div>

                {/* Medium */}
                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl px-3.5 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                    <span className="text-xs font-semibold text-zinc-300">Medium</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-white">
                    {stats.leetcode.medium}
                    <span className="text-zinc-500 font-normal">/{stats.leetcode.totalMedium}</span>
                  </div>
                </div>

                {/* Hard */}
                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl px-3.5 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                    <span className="text-xs font-semibold text-zinc-300">Hard</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-white">
                    {stats.leetcode.hard}
                    <span className="text-zinc-500 font-normal">/{stats.leetcode.totalHard}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="border-t border-zinc-800/70 my-5" />

            {/* Contest Rating & Global Rank */}
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-semibold">
                  CONTEST RATING
                </span>
                <span className="block font-display font-bold text-lg sm:text-xl text-white mt-1">
                  {stats.leetcode.rating}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-semibold">
                  GLOBAL RANK
                </span>
                <span className="block font-display font-bold text-lg sm:text-xl text-white mt-1">
                  {stats.leetcode.ranking}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Centered Tile Button with Exact Skills Page Hover Effect */}
          <div className="pt-6 flex justify-center">
            <a
              href={PROFILE_LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              className="group/btn relative w-12 h-12 rounded-2xl bg-[#141417] border border-white/[0.12] flex items-center justify-center p-2.5 transition-all duration-300 shadow-xl hover:bg-[#18181c] hover:scale-110"
              style={{
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FFA116';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 161, 22, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              title="Open Official LeetCode Profile (@IoobM3wT7Z)"
            >
              <img
                src={leetcodeLogo}
                alt="LeetCode"
                className="w-6 h-6 object-contain transition-all duration-300 filter grayscale brightness-[1.8] contrast-[1.25] opacity-90 group-hover/btn:filter-none group-hover/btn:opacity-100 group-hover/btn:scale-110 drop-shadow-[0_2px_10px_rgba(255,255,255,0.12)] group-hover/btn:drop-shadow-[0_4px_16px_rgba(255,161,22,0.5)] pointer-events-none"
                draggable={false}
              />
            </a>
          </div>
        </motion.div>

        {/* Right Column (7 cols): LeetCode Activity Heatmap - No Horizontal Scroll & Pixel-Perfect Month Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 0 35px rgba(239,68,68,0.15)' }}
          className="lg:col-span-7 rounded-3xl p-7 sm:p-8 border border-white/[0.08] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(239, 68, 68, 0.09) 0%, rgba(17, 17, 20, 0.95) 60%, rgba(13, 13, 16, 0.98) 100%)',
          }}
        >
          <div>
            {/* Heatmap Header - Clean with no pills or extra subtitles */}
            <div className="flex items-center gap-2 mb-6">
              <Flame size={20} className="text-red-500" />
              <h3 className="font-display font-bold text-xl text-white">
                LeetCode Submission Activity
              </h3>
            </div>

            {/* 1-Year Calendar Layout: Day Labels (left) + 52-Week Grid (right) */}
            <div className="w-full">
              {/* Month Labels Grid: 52 columns exactly matching the 52 week columns underneath */}
              <div className="flex w-full mb-1.5">
                {/* Space for day labels on left */}
                <div className="w-7 sm:w-8 flex-shrink-0" />

                {/* 52-column Month Header */}
                <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[2px] w-full h-4">
                  {monthSlots.map((m, idx) => (
                    <div key={idx} className="relative col-span-1">
                      {m && (
                        <span className="absolute left-0 top-0 text-[9px] sm:text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                          {m}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Matrix: Day Labels + Week Grid */}
              <div className="flex w-full items-stretch">
                {/* Day Labels Gutter on Left (Mon, Wed, Fri) */}
                <div className="w-7 sm:w-8 flex-shrink-0 flex flex-col justify-between text-[8px] sm:text-[9px] font-mono text-zinc-500 pr-1.5 py-0.5 select-none leading-none">
                  <span className="h-2.5 sm:h-3"></span>
                  <span className="h-2.5 sm:h-3 flex items-center">Mon</span>
                  <span className="h-2.5 sm:h-3"></span>
                  <span className="h-2.5 sm:h-3 flex items-center">Wed</span>
                  <span className="h-2.5 sm:h-3"></span>
                  <span className="h-2.5 sm:h-3 flex items-center">Fri</span>
                  <span className="h-2.5 sm:h-3"></span>
                </div>

                {/* 52-Week Matrix: Fully responsive width with ZERO horizontal scroll */}
                <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[2px] w-full">
                  {weeksGrid.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[2px]">
                      {week.map((day, dIdx) => {
                        let bgClass = 'bg-[#151518] border border-white/[0.04]';
                        if (day.level === 1) bgClass = 'bg-red-500/40 border border-red-500/50';
                        if (day.level === 2) bgClass = 'bg-red-500/75 border border-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]';
                        if (day.level === 3) bgClass = 'bg-red-500 border border-red-400 shadow-[0_0_12px_rgba(239,68,68,0.95)]';

                        return (
                          <div
                            key={dIdx}
                            onMouseEnter={() => setHoveredCell(day)}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-full aspect-square rounded-[2px] ${bgClass} transition-all duration-150 cursor-pointer hover:scale-150 hover:z-20`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Tooltip Banner */}
            <div className="min-h-[22px] mt-2.5 flex items-center">
              {hoveredCell ? (
                <div className="text-[11px] font-mono text-zinc-300 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${hoveredCell.count > 0 ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`} />
                  <span className="font-bold text-white">
                    {hoveredCell.count} {hoveredCell.count === 1 ? 'submission' : 'submissions'}
                  </span>
                  <span className="text-zinc-400">on {hoveredCell.formattedDate}</span>
                </div>
              ) : (
                <span className="text-[10px] font-mono text-zinc-600 italic">
                  Hover over any day cell to inspect live submission counts.
                </span>
              )}
            </div>

            {/* Recent Accepted Submissions Live Tags (Hidden on small screen size) */}
            {stats.leetcode.recentSubmissions && stats.leetcode.recentSubmissions.length > 0 && (
              <div className="hidden sm:block mt-5 pt-4 border-t border-zinc-800/60">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold block mb-2.5">
                  RECENT LIVE ACCEPTED SUBMISSIONS
                </span>
                <div className="flex flex-wrap gap-2">
                  {stats.leetcode.recentSubmissions.map((sub, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-zinc-950/80 border border-zinc-800/90 hover:border-red-500/40 px-3 py-1.5 rounded-xl text-xs text-zinc-300 transition-colors"
                    >
                      <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                      <span className="truncate max-w-[200px]">{sub.title}</span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">({sub.lang})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Stats;
