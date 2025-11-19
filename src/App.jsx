import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_90%_0%,rgba(99,102,241,0.12),transparent)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Showcase />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-white/60">© 2025 Playful Studio. All rights reserved.</p>
          <a href="/test" className="text-sm text-slate-300 hover:text-white/90">Health check</a>
        </div>
      </footer>
    </div>
  )
}

export default App
