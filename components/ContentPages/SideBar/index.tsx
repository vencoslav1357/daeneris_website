'use client';
import { RefObject } from 'react';

interface SidebarProps {
  sections: { id: string; title: string }[];
  contentRef: RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ sections, contentRef, isOpen, setIsOpen }: SidebarProps) {
  const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (!element || !contentRef.current) return;

      const offset = 100;
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
  };

  return (
      <>
          <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden fixed top-3 left-4 z-50 p-2 rounded-lg bg-white dark:bg-slate-800"
          >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
          </button>

          <aside 
              className={`
                  fixed md:sticky top-0 left-0 
                  h-screen 
                  w-64 md:w-[30vw] lg:w-[15vw]
                  bg-slate-300 dark:bg-[#151515]
                  border-r border-gray-800 dark:border-gray-200
                  transform transition-transform duration-300 ease-in-out
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
                  z-40 md:z-30
              `}
          >
              <nav className="pt-16 md:pt-[10vh] p-4">
                  {sections.map((section) => (
                      <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="w-full text-left p-2 hover:bg-slate-400/20 rounded-md dark:text-white text-[#151515] mb-2"
                      >
                          {section.title}
                      </button>
                  ))}
              </nav>
          </aside>

          {isOpen && (
              <div 
                  className="md:hidden fixed inset-0 bg-black/50 z-30"
                  onClick={() => setIsOpen(false)}
              />
          )}
      </>
  );
}