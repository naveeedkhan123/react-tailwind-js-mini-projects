export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.6fr_0.7fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 font-semibold text-white">
              N
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Nova Studio</p>
              <p className="text-sm text-slate-400">Creative digital experiences</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            We build elegant interfaces and thoughtful products that help brands stand out online.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><a href="#" className="transition hover:text-white">About</a></li>
            <li><a href="#" className="transition hover:text-white">Services</a></li>
            <li><a href="#" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>hello@novastudio.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Remote · Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Nova Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}