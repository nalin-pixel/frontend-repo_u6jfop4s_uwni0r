import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="py-16">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Playful • Interactive • Modern
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            A techy, playful portfolio vibe
          </h1>
          <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
            Inspired by Netherix Studios — bold visuals, smooth motion, and a delightful 3D hero that invites exploration.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white shadow hover:shadow-blue-500/30 transition-shadow">
              See Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-white/90 hover:text-white hover:border-white/40 transition-colors">
              Start a Project
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
