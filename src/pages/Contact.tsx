import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Fill all information required');
      return;
    }
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-darkcyan focus:border-transparent transition';

  return (
    <div className="max-w-2xl mx-auto px-4 mb-10">
      <form
        onSubmit={handleSubmit}
        className="mt-6 p-6 shadow-[0_0_2px_darkgray] rounded-xl bg-white"
      >
        <h4 className="text-2xl font-semibold text-center mb-6">Get in touch</h4>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={inputClass}
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className={inputClass}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={4}
            className={inputClass}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200 mb-4"
        >
          Send Message
        </button>

        <div className="flex justify-center gap-3">
          {['fab fa-twitter', 'fab fa-github', 'fab fa-linkedin'].map((icon) => (
            <button
              key={icon}
              type="button"
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
            >
              <i className={icon}></i>
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}
