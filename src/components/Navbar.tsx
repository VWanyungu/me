import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm flex md:justify-center" id="nav">
      <div className="w-full md:max-w-5xl md:mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Brand placeholder */}
          <a href="#" className="text-gray-900 font-semibold font-display text-green-700">Wanyungu</a>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded text-gray-700 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>

          {/* Desktop nav */}
          <div className={`${open ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:static top-14 left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none z-50 lg:items-center gap-1 lg:gap-0 px-4 lg:px-0 pb-4 lg:pb-0`}>
            <ul className="flex flex-col lg:flex-row lg:items-center gap-1">
              <li className="lg:ml-4">
                <NavLink className="nav-underline px-2 py-1" to="/" end onClick={() => setOpen(false)}>Home</NavLink>
              </li>
              <li className="lg:ml-4">
                <NavLink className="nav-underline px-2 py-1" to="/experience" onClick={() => setOpen(false)}>Experience</NavLink>
              </li>
              <li className="lg:ml-4">
                <NavLink className="nav-underline px-2 py-1" to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
              </li>
              <li className="lg:ml-4">
                <NavLink className="nav-underline px-2 py-1" to="/blogs" onClick={() => setOpen(false)}>Blogs</NavLink>
              </li>
              <li className="lg:ml-4">
                <a
                  href="/resources/files/VICTOR WANYUNGU RESUME.pdf"
                  download
                  className="inline-block px-3 py-1 bg-green-700/5 text-green-700 border-green-700 rounded text-base font-medium hover:bg-green-700/5 hover:text-green-700 transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
