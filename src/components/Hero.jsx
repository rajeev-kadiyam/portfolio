export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <p className="text-violet-400 text-sm tracking-widest uppercase mb-4">Data Science Student</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
        Hi, I'm <span className="text-violet-400">Surya Kadiyam</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        A data science student passionate about turning raw data into meaningful insights through machine learning, analytics, and visualization.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projects" className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-gray-700 hover:border-violet-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors">
          Get in Touch
        </a>
      </div>
      <div className="mt-20 animate-bounce text-gray-600">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
