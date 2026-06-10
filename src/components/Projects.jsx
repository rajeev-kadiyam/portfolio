const projects = [
  {
    title: 'Python Programming Assignment',
    description: 'A set of Python exercises covering string formatting, arithmetic expressions with error handling (ZeroDivisionError), a quadratic equation solver using the discriminant, a temperature converter (°C ↔ °F), and a two-player Rock-Paper-Scissors game.',
    tags: ['Python', 'Error Handling', 'Math', 'Control Flow'],
    github: 'https://github.com/rajeev-kadiyam',
    demo: null,
  },
  {
    title: 'Python Conditionals Lab',
    description: 'Lab exercises exploring if/elif/else logic through practical problems: shape detection, odd/even checker, value comparisons, a time-of-day greeter, and a course-load advisor based on student year.',
    tags: ['Python', 'Conditionals', 'User Input'],
    github: 'https://github.com/rajeev-kadiyam',
    demo: null,
  },
  {
    title: 'Python Fundamentals Lab',
    description: 'Introductory lab covering Python print statements, arithmetic and floor division, type conversion, comparison and logical operators, and coordinate geometry (point-in-circle check).',
    tags: ['Python', 'Data Types', 'Operators', 'Geometry'],
    github: 'https://github.com/rajeev-kadiyam',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Projects & Coursework</h2>
      <div className="w-12 h-1 bg-violet-500 mb-10 rounded" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(({ title, description, tags, github, demo }) => (
          <div key={title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-violet-800 transition-colors group">
            <h3 className="text-white font-semibold text-lg group-hover:text-violet-400 transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-violet-900/30 text-violet-300 rounded text-xs">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-2 border-t border-gray-800">
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  GitHub
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-sm mt-8 text-center">More projects coming soon as I progress through my studies.</p>
    </section>
  )
}
