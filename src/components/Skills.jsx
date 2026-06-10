const categories = [
  {
    title: 'Languages',
    skills: ['Python', 'R', 'SQL', 'Bash'],
  },
  {
    title: 'ML & Data',
    skills: ['scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Pandas', 'NumPy'],
  },
  {
    title: 'Visualization',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Jupyter', 'Git', 'Docker', 'AWS', 'Spark', 'Airflow'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="w-12 h-1 bg-violet-500 mb-10 rounded" />
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(({ title, skills }) => (
            <div key={title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-violet-400 font-semibold mb-4 text-sm tracking-widest uppercase">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-violet-900/40 hover:text-violet-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
