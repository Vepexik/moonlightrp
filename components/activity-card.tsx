export default function ActivityCard({
  title,
  description,
  risk,
  rewards,
}: {
  title: string
  description: string
  risk: string
  rewards: string[]
}) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
      <h3 className="mb-4 text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="mb-6 text-slate-300 leading-relaxed">{description}</p>
      <div className="space-y-3">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Riziko:</span>
          <span className="text-sm font-medium text-slate-200 px-3 py-1 rounded-full bg-slate-800/50">{risk}</span>
        </div>
        <div>
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mb-2">Odměny:</span>
          <div className="flex flex-wrap gap-2">
            {rewards.map((reward, index) => (
              <span
                key={index}
                className="text-sm text-purple-300 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
              >
                {reward}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
