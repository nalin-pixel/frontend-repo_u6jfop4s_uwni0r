export default function Showcase() {
  const items = [
    {
      title: 'Interactive Landing',
      desc: 'Hero 3D + playful motion onboarding',
      tag: 'Web',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Creative Portfolio',
      desc: 'Case studies with rich visuals',
      tag: 'Design',
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      title: 'Experimental Lab',
      desc: 'Small prototypes and fun ideas',
      tag: 'Lab',
      color: 'from-emerald-500 to-teal-500'
    },
  ]

  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm text-slate-200 hover:text-white">View all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className={`h-40 rounded-xl bg-gradient-to-br ${it.color} mb-4 shadow-lg`} />
              <div className="inline-flex items-center text-xs text-white/70 border border-white/10 rounded-full px-2 py-0.5 mb-3">{it.tag}</div>
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-1 text-slate-300/90">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
