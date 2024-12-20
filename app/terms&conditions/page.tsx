'use client';
import { ContentSection } from '@/components/ContentPages/Section';
import { Sidebar } from '@/components/ContentPages/SideBar';
import { termsData } from '@/constants';
import { useRef } from 'react';

export default function TermsAndConditionsPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    
    return (
        <section className="w-screen h-screen flex items-start justify-start pb-[5vh] dark:bg-[#151515] bg-slate-100">
            <Sidebar sections={termsData} contentRef={contentRef} />
            
            <div 
                ref={contentRef}
                className="w-[85vw] h-[100vh] flex flex-col dark:bg-[#151515] bg-slate-100 border-r-[1px] border-gray-800 dark:border-gray-200 gap-[5vh] p-[10vw] overflow-y-auto"
            >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold dark:text-white text-[#151515] mb-2 text-center">
                        Terms & Conditions
                    </h1>
                    <p className="pb-2 w-[60%] border-b-2 border-b-gray-900 dark:border-b-gray-400 text-sm italic text-center">
                        Last updated: 12/01/2024
                    </p>
                </div>

                <div className="dark:text-gray-400 text-[#151515] space-y-6 pr-4">
                    <p className="text-base">
                        These Terms and Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) are a legally binding agreement between you 
                        (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and DaenerisAI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of 
                        our mobile application (&quot;App&quot;) and services provided therein.
                    </p>
                    
                    <div className="space-y-4 flex flex-col items-start justify-center gap-[5vh]">
                        {termsData.map((section) => (
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