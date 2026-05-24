

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white" id="home">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_25%)]" />
      <div className="relative mx-auto max-w-6xl px-8 py-20 text-center md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Founder · AI Product Builder · Growth Strategist
          </p>
          <div className="flex justify-center">
            <img src="/Dhurv.jpg" alt="Dhuruv Kumar Gupta" className="h-40 w-40 rounded-full object-cover border-4 border-white/10 shadow-2xl transition duration-500 hover:scale-105" />
          </div>
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
            I build intelligent brands and modern web products for ambitious founders.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            I blend AI, automation, and full-stack engineering to launch digital experiences that look polished, perform reliably, and drive measurable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/dhuruv-kumar-gupta-017a4724a/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1">
              Work with me
            </a>
            <a href="#Projects" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-100 transition duration-300 hover:border-cyan-400 hover:text-cyan-300">
              See projects
            </a>
          </div>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Focus</p>
            <h2 className="mt-4 text-xl font-semibold text-white">Product-market growth</h2>
            <p className="mt-3 text-slate-300">Ideas crafted into MVPs and revenue-ready prototypes.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Strength</p>
            <h2 className="mt-4 text-xl font-semibold text-white">AI-powered automation</h2>
            <p className="mt-3 text-slate-300">Building smart workflows, chatbots, and prediction systems.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Style</p>
            <h2 className="mt-4 text-xl font-semibold text-white">Modern web interfaces</h2>
            <p className="mt-3 text-slate-300">Clean UI patterns, strong branding, and polished interactions.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Impact</p>
            <h2 className="mt-4 text-xl font-semibold text-white">Scalable systems</h2>
            <p className="mt-3 text-slate-300">Reliable web apps built to evolve with your next milestone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home