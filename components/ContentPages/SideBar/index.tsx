'use client';
import { RefObject } from 'react';

interface SidebarProps {
  sections: { id: string; title: string }[];
  contentRef: RefObject<HTMLDivElement | null>;
}

export function Sidebar({ sections, contentRef }: SidebarProps) {
    // this version gets the id of the section and scrolls to it, with getting the element by id and the ref of the main content div
    // this avoids the need to pass the ref to the section component and it garanties that the scroll will work with one absolute position, the prev version was not working properly with calculating it relative from the viewport not the main div container 
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element || !contentRef.current) return;
    
        const container = contentRef.current;
        const offset = window.innerHeight * 0.25;
        
        const elementPosition = element.offsetTop;
        
        container.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
    };
    

  return (
    <div className="w-[15vw] h-[100vh] dark:bg-[#151515] bg-slate-300 border-r-[1px] border-gray-800 dark:border-gray-200 overflow-y-auto pt-[10vw]">
      <nav className="p-4 space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="w-full text-left p-2 hover:bg-slate-400/20 rounded-md dark:text-white text-[#151515] transition-colors"
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
}