import React, { useState } from 'react';

// NavItems Component — reused for both mobile and desktop
const NavItems = ({ isMobile = false, onClick }) => {
  return (
    <ul
      className={`${
        isMobile
          ? 'flex flex-col items-center space-y-4 mt-4 w-full animate-slide-in'
          : 'flex space-x-8 items-center'
      } text-neutral-300`}
    >
      {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item, index) => (
        <li key={index}>
          <a
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              if (onClick) onClick(); // Close mobile menu if needed
            }}
            className="block py-2 px-3 text-base font-medium text-white hover:text-cyan-500 transition-colors"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-black/90 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left - Logo / Name */}
          <a
            href="#home"
            onClick={(e) => {
              if (
                window.location.hash === '#home' ||
                window.location.pathname === '/' ||
                window.location.hash === ''
              ) {
                e.preventDefault();
                window.location.reload();
              }
            }}
            className="text-white font-bold text-xl hover:text-cyan-500 transition-colors ml-6"
          >
            Srikar Reddy
          </a>

          {/* Right - Desktop Nav */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
              </div>
            ) : (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="sm:hidden w-full">
            <NavItems isMobile={true} onClick={() => setIsOpen(false)} />
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
