'use client';
import { ContentSection } from '@/components/ContentPages/Section';
import { introductionPageData } from '@/constants';
import { useRef, useState } from 'react';

export default function TermsAndConditionsPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <section className="relative w-full min-h-screen flex flex-col  md:flex-row items-start justify-start pb-[5vh] dark:bg-[#151515] bg-slate-100">            
            <div 
                ref={contentRef}
                className=" mt-[15%] flex-1 min-h-screen flex flex-col gap-8 p-6 md:p-10 lg:p-[10vw] overflow-y-auto"
                >
                <div className="dark:text-gray-400 text-[#151515] space-y-6 pr-4">
                    
                    <div className="space-y-4 flex flex-col items-start justify-center gap-[5vh]">
                        {introductionPageData.map((section) => (
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