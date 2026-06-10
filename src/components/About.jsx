export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
      <div className="w-12 h-1 bg-violet-500 mb-10 rounded" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            I'm Surya Venkata Rajeev Kadiyam, a data science student with a passion for uncovering patterns in complex datasets and building tools that make data accessible to everyone.
          </p>
          <p>
            My studies span machine learning, statistical analysis, and data engineering. I enjoy the full journey — from wrangling raw data to building predictive models.
          </p>
          <p>
            Outside of coursework, I explore new datasets, work on personal projects, and keep up with the latest in AI and data science research.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Assignments Completed', value: '3+' },
            { label: 'Labs Finished', value: '2+' },
            { label: 'Languages', value: 'Python' },
            { label: 'Status', value: 'Student' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-violet-400 mb-1">{value}</div>
              <div className="text-gray-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
