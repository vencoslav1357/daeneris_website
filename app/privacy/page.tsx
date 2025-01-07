'use client';
import { ContentSection } from '@/components/ContentPages/Section';
import { Sidebar } from '@/components/ContentPages/SideBar';
import { privacyPolicyData } from '@/constants';
import { useRef, useState } from 'react';

export default function PrivacyPolicyPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <section className="relative w-full min-h-screen flex flex-col  md:flex-row items-start justify-start pb-[5vh] dark:bg-[#151515] bg-slate-100">
            <Sidebar sections={privacyPolicyData} contentRef={contentRef} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
            
            <div 
                ref={contentRef}
                className=" mt-[15%] flex-1 min-h-screen flex flex-col gap-8 p-6 md:p-10 lg:p-[10vw] overflow-y-auto"
                >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold dark:text-white text-[#151515] mb-2 text-center">
                        Privacy Policy
                    </h1>
                    <p className="pb-2 w-[60%] border-b-2 border-b-gray-900 dark:border-b-gray-400 text-sm italic text-center">
                        Last updated: 12/01/2024
                    </p>
                </div>

                <div className="dark:text-gray-400 text-[#151515] space-y-6 pr-4">
                    <p className="text-base">
                        DaenerisAI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. 
                        This Privacy Policy explains how we collect, use, and share your information when you use our mobile application (&quot;App&quot;).
                    </p>
                    
                    <div className="space-y-4 flex flex-col items-start justify-center gap-[5vh]">
                        {privacyPolicyData.map((section) => (
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