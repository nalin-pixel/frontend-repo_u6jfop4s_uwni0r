import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-slate-200 hover:text-white/90 transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#top" className="inline-flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" />
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">Netherix-like</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow hover:shadow-blue-500/30 transition-shadow">
                Start a Project
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              <NavLink href="#work" onClick={handleNavClick}>Work</NavLink>
              <div />
              <NavLink href="#about" onClick={handleNavClick}>About</NavLink>
              <div />
              <NavLink href="#contact" onClick={handleNavClick}>Contact</NavLink>
              <div />
              <a onClick={handleNavClick} href="#contact" className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow hover:shadow-blue-500/30 transition-shadow">
                Start a Project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
