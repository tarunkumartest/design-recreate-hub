import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative">
      <div className="text-[#03045E] text-2xl font-semibold absolute w-[174px] h-9 left-[81px] top-[67px] max-sm:text-xl max-sm:left-5 max-sm:top-5">
        TARUN KUMAR
      </div>
      
      <nav className="flex gap-[61px] absolute left-[629px] top-[71px] max-sm:hidden">
        <button
          onClick={() => scrollToSection('home')}
          className="text-[#03045E] text-lg font-normal cursor-pointer hover:opacity-70 transition-opacity"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-[#03045E] text-lg font-normal cursor-pointer hover:opacity-70 transition-opacity"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('work')}
          className="text-[#03045E] text-lg font-normal cursor-pointer hover:opacity-70 transition-opacity"
        >
          Work
        </button>
      </nav>

      <button
        onClick={toggleMobileMenu}
        className="hidden absolute text-2xl text-[#03045E] cursor-pointer right-5 top-[70px] max-sm:block hover:opacity-70 transition-opacity"
        aria-label="Toggle mobile menu"
      >
        <i className="ti ti-menu-2" />
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#FBF8CC] z-50 flex flex-col items-center justify-center gap-8 sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-5 right-5 text-2xl text-[#03045E]"
            aria-label="Close mobile menu"
          >
            ×
          </button>
          <button
            onClick={() => scrollToSection('home')}
            className="text-[#03045E] text-xl font-normal"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#03045E] text-xl font-normal"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-[#03045E] text-xl font-normal"
          >
            Work
          </button>
        </div>
      )}
    </header>
  );
};
