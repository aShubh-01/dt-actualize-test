'use client';

import Image from 'next/image';

const leaderboardData = [
  {
    rank: 1,
    name: 'Soubhik',
    clarity: 9.5,
    actionability: 9.0,
    total: 27.5,
    emoji: '🥇',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    gradient: 'from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100',
  },
  {
    rank: 2,
    name: 'Jhansi',
    clarity: 9.0,
    actionability: 8.8,
    total: 26.3,
    emoji: '🥈',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
    gradient: 'from-gray-50 to-slate-50 hover:from-gray-100 hover:to-slate-100',
  },
  {
    rank: 3,
    name: 'Omkar',
    clarity: 8.7,
    actionability: 8.5,
    total: 26.1,
    emoji: '🥉',
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
    gradient: 'from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100',
  },
  {
    rank: 4,
    name: 'Deepti',
    clarity: 8.2,
    actionability: 8.0,
    total: 24.6,
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
  },
  {
    rank: 5,
    name: 'Naveen',
    clarity: 7.5,
    actionability: 8.1,
    total: 23.5,
    avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg',
  },
];

export default function LeaderboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Leaderboard – Who Cracked It Best</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          These architects didn't just think—they built systems that blend AI, empathy, and innovation for real impact.
        </p>
      </section>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-8 py-6 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Rank</th>
                <th className="px-8 py-6 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Name</th>
                <th className="px-8 py-6 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">Clarity</th>
                <th className="px-8 py-6 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">Actionability</th>
                <th className="px-8 py-6 text-center text-sm font-semibold text-gray-900 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leaderboardData.map((entry) => (
                <tr
                  key={entry.rank}
                  className={`transition-colors ${
                    entry.gradient ? `bg-gradient-to-r ${entry.gradient}` : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-3">
                      {entry.emoji && <span className="text-2xl">{entry.emoji}</span>}
                      <span className="text-lg font-bold text-gray-900 ml-2">{entry.rank}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={entry.avatar}
                        alt={entry.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <span className="text-lg font-semibold text-gray-900">{entry.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {entry.clarity}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {entry.actionability}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span className="text-xl font-bold text-gray-900">{entry.total}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="text-center mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          If your name isn't here, don't worry.<br />
          The best rounds are built after the hardest ones.<br />
          <span className="font-semibold text-gray-900">Keep showing up. The system is watching.</span>
        </p>
      </div>
    </main>
  );
}
