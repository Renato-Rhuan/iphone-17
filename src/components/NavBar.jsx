

import { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <a href="#design" className="hover:text-gray-300 transition-colors">Design</a>
          <a href="#camera" className="hover:text-gray-300 transition-colors">Câmera</a>
          <a href="#performance" className="hover:text-gray-300 transition-colors">Performance</a>
          <a href="#colors" className="hover:text-gray-300 transition-colors">Cores</a>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">Comprar</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-xl font-bold">iPhone 17</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#design" className="hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Design</a>
              <a href="#camera" className="hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Câmera</a>
              <a href="#performance" className="hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Performance</a>
              <a href="#colors" className="hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Cores</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors self-start" onClick={() => setIsOpen(false)}>Comprar</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;