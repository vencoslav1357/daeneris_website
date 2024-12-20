'use client';
import { ContentSection } from '@/components/ContentPages/Section';
import { Sidebar } from '@/components/ContentPages/SideBar';
import { aboutUsData } from '@/constants';
import { useRef } from 'react';

export default function AboutPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    
    return (
        <section className="w-screen h-screen flex items-start justify-start pb-[5vh] dark:bg-[#151515] bg-slate-100">
            <Sidebar sections={aboutUsData} contentRef={contentRef} />
            
            <div 
                ref={contentRef}
                className="w-[85vw] h-[100vh] flex flex-col dark:bg-[#151515] bg-slate-100 border-r-[1px] border-gray-800 dark:border-gray-200 gap-[5vh] p-[10vw] overflow-y-auto"
            >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold dark:text-white text-[#151515] mb-2 text-center">
                        About Us
                    </h1>
                    <p className="pb-2 w-[60%] border-b-2 border-b-gray-900 dark:border-b-gray-400 text-sm italic text-center">
                        Last updated: 12/01/2024
                    </p>
                </div>

                <div className="dark:text-gray-400 text-[#151515] space-y-6 pr-4">
                    <p className="text-base">
                        Welcome to DaenerisAI, where we&apos;re revolutionizing personal AI assistance through 
                        innovation, security, and user-centric design. Our journey began in Prague and 
                        continues to expand globally.
                    </p>
                    
                    <div className="space-y-4 flex flex-col items-start justify-center gap-[5vh]">
                        {aboutUsData.map((section) => (
                            <ContentSection
                                key={section.id}
                                id={section.id}
                                title={section.title}
                                content={section.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}