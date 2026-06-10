import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Replace with your form service (e.g. Formspree, EmailJS)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/40">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-violet-500 mb-6 rounded" />
        <p className="text-gray-400 mb-10">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        {sent ? (
          <div className="bg-violet-900/30 border border-violet-700 rounded-xl p-8 text-center">
            <p className="text-violet-300 text-lg font-medium">Message sent! I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="Dave Conner"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="dave@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                placeholder="Why do you wanna connect?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/suryavenkatarajeevkadiyamprofile/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">LinkedIn</a>
          <a href="https://github.com/rajeev-kadiyam" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">GitHub</a>
          <a href="mailto:svr.kadiyam@gmail.com" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">Email</a>
        </div>
      </div>
    </section>
  )
}
