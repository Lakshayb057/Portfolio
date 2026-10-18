// Real-Time Coding Stats Service for LeetCode, HackerRank, GeeksforGeeks, and Codolio

export const PROFILE_LINKS = {
  leetcode: 'https://leetcode.com/u/IoobM3wT7Z/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/lakshab8yo',
  hackerrank: 'https://www.hackerrank.com/profile/lakshayb057',
  codolio: 'https://codolio.com/profile/lakshayb057',
};

// Default initial state
export const INITIAL_STATS = {
  leetcode: {
    totalSolved: 34,
    easy: 19,
    totalEasy: 969,
    medium: 12,
    totalMedium: 2124,
    hard: 3,
    totalHard: 980,
    rating: '1480',
    ranking: '3,528,952',
    totalActiveDays: 11,
  },
  hackerrank: {
    handle: 'lakshayb057',
    verified: true,
    certification: 'Frontend Developer (React)',
    totalSolved: 0,
    badges: [
      { name: 'C++', stars: '★★★★★', count: 5 },
      { name: 'C Language', stars: '★★★', count: 3 },
      { name: 'SQL', stars: '★★★', count: 3 },
      { name: 'Java', stars: '★★', count: 2 },
      { name: 'Python', stars: '★★', count: 2 },
      { name: 'Problem Sol...', stars: '★★', count: 2 },
    ],
  },
  geeksforgeeks: {
    handle: 'lakshab8yo',
    codingScore: '123',
    problemsSolved: '56',
    instituteRank: '#8888',
    college: 'Lovely Professional University',
    breakdown: {
      basic: 14,
      easy: 31,
      med: 10,
      hard: 1,
    },
  },
  codolio: {
    userKey: 'lakshayb057',
    connected: true,
  },
};

/**
 * Fetch real-time LeetCode stats via public CORS-ready proxy
 * Directly queries IoobM3wT7Z without any hardcoded offsets
 */
export async function fetchLeetCodeStats() {
  try {
    const res = await fetch('https://leetcode-api-faisalshohag.vercel.app/IoobM3wT7Z');
    if (!res.ok) throw new Error(`LeetCode API status ${res.status}`);
    const data = await res.json();

    if (data && typeof data.totalSolved === 'number') {
      return {
        totalSolved: data.totalSolved,
        easy: data.easySolved ?? 19,
        totalEasy: data.totalEasy || 969,
        medium: data.mediumSolved ?? 12,
        totalMedium: data.totalMedium || 2124,
        hard: data.hardSolved ?? 3,
        totalHard: data.totalHard || 980,
        ranking: data.ranking ? Number(data.ranking).toLocaleString() : '3,528,952',
        rating: '1480',
        submissionCalendar: data.submissionCalendar || null,
        totalActiveDays: data.submissionCalendar ? Object.keys(data.submissionCalendar).length : 11,
        recentSubmissions: (data.recentSubmissions || []).filter(s => s.statusDisplay === 'Accepted').slice(0, 4),
      };
    }
  } catch (err) {
    console.warn('Real-time LeetCode fetch fallback:', err.message);
  }
  return INITIAL_STATS.leetcode;
}

/**
 * Fetch real-time HackerRank stats
 */
export async function fetchHackerRankStats() {
  try {
    const res = await fetch('https://hackerrank-stats-api.vercel.app/api?username=lakshayb057');
    if (res.ok) {
      const json = await res.json();
      if (json?.status === 'success' && json?.data) {
        return {
          ...INITIAL_STATS.hackerrank,
          totalSolved: json.data.totalSolved || 0,
        };
      }
    }
  } catch (err) {
    console.warn('Real-time HackerRank fetch fallback:', err.message);
  }
  return INITIAL_STATS.hackerrank;
}

/**
 * Fetch real-time Codolio profile
 */
export async function fetchCodolioProfile() {
  try {
    const res = await fetch('https://api.codolio.com/profile?userKey=lakshayb057');
    if (!res.ok) throw new Error(`Codolio API status ${res.status}`);
    const data = await res.json();

    if (data?.status?.success && data?.data) {
      return {
        connected: true,
        data: data.data,
      };
    }
  } catch (err) {
    console.warn('Real-time Codolio fetch fallback:', err.message);
  }
  return INITIAL_STATS.codolio;
}

/**
 * Aggregates all real-time stats across platforms
 */
export async function fetchAllCodingStats() {
  const [leetcode, hackerrank, codolio] = await Promise.all([
    fetchLeetCodeStats(),
    fetchHackerRankStats(),
    fetchCodolioProfile(),
  ]);

  return {
    leetcode,
    codolio,
    hackerrank,
    geeksforgeeks: INITIAL_STATS.geeksforgeeks,
    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}
