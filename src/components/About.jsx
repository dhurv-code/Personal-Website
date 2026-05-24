
const About = () => {
  return (
    <section className='bg-black text-white py-20' id="About">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl font-bold'>About Me</h2>
              <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-300'>
                I’m Dhuruv Kumar Gupta — a founder-minded full-stack engineer who builds intelligent digital products with a strong focus on user experience, growth, and impact. I combine AI, automation, and polished web design to help startups and teams launch modern platforms that feel premium and perform reliably.
              </p>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-300/80'>Current focus</p>
                <p className='mt-4 text-xl font-semibold'>AI-enabled product builds</p>
              </div>
              <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-300/80'>Education</p>
                <p className='mt-4 text-xl font-semibold'>UTU — B.Tech CSE (AI/ML)</p>
              </div>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-300/80'>Experience</p>
                <p className='mt-4 text-xl font-semibold'>10+ AI and web products shipped</p>
              </div>
              <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-2'>
                <p className='text-sm uppercase tracking-[0.35em] text-cyan-300/80'>Approach</p>
                <p className='mt-4 text-xl font-semibold'>Business-ready systems</p>
              </div>
            </div>
          </div>
          <div className='rounded-[2rem] border border-cyan-500/20 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.6)]'>
            <img src="/dodo-image.jpeg" alt="Dhuruv profile" className='h-72 w-full rounded-[1.75rem] object-cover shadow-2xl shadow-cyan-500/20' />
            <div className='mt-8 space-y-4'>
              <p className='text-slate-300'>Currently pursuing a B.Tech in Computer Science and Engineering with a specialization in AI & Machine Learning at Uttarakhand Technical University. I love turning complex technology into clean, user-first digital products.</p>
              <ul className='grid gap-3'>
                <li className='rounded-2xl border border-white/10 bg-slate-900/80 p-4'>AI automation systems that reduce manual work and accelerate decisions.</li>
                <li className='rounded-2xl border border-white/10 bg-slate-900/80 p-4'>Full-stack web applications built with React, FastAPI, Node, and cloud-ready integrations.</li>
                <li className='rounded-2xl border border-white/10 bg-slate-900/80 p-4'>Design-led products that balance branding, motion, and conversion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About