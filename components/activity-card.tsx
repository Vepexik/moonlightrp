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
    <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-6">
      <h3 className="mb-3 text-xl font-bold text-purple-400">{title}</h3>
      <p className="mb-4 text-slate-300">{description}</p>
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-400">Riziko:</span>
        <span className="text-sm text-slate-300">{risk}</span>
      </div>
      <div>
        <span className="text-sm font-semibold text-slate-400">Odměny:</span>
        <p className="text-sm text-slate-300">{rewards.join(", ")}</p>
      </div>
    </div>
  )
}
