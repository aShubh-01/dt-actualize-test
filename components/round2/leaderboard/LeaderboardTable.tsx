import Image from 'next/image'

interface LeaderboardData {
    rank: number,
    name: string,
    clarity: number,
    actionability: number,
    total: number,
    emoji?: string,
    avatar: string,
    gradient?: string,
}

interface LeaderboardDataProps {
    leaderboardData: LeaderboardData[]
}

export const LeaderboardTable = ({leaderboardData} : LeaderboardDataProps) => {
    return <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
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
}