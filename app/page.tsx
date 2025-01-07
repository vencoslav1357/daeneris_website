'use client';
import { ContentSection } from '@/components/ContentPages/Section';
import { aboutUsData } from '@/constants';
import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRobot, FaMicrophone, FaHome, FaCog, FaLock } from 'react-icons/fa';

export default function AboutPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    
    return (
      <section className="w-screen min-h-screen flex items-center justify-center overflow-x-hidden pb-[5vh] bg-gradient-to-b from-slate-100 to-white dark:from-[#151515] dark:to-[#1a1a1a]">            
            <div 
                ref={contentRef}
                className="w-[85vw] flex flex-col gap-12 overflow-y-auto overflow-x-hidden"
            >
                {/* Hero Section */}
                <div className="relative h-[60vh] w-full">
                    <Image
                        src="/images/Daeneris_logo_svg.svg"
                        alt="AI Assistant"
                        width={400}
                        height={400}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-black dark:text-white">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                            >
                            DaenerisAI
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-light"
                        >
                            Your Personal AI Assistant
                        </motion.p>
                    </div>
                </div>

                <div className="px-8 md:px-20 py-10">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-lg leading-relaxed dark:text-gray-300 text-gray-700 max-w-3xl mx-auto text-center mb-16"
                    >
                        Welcome to DaenerisAI, your advanced personal AI assistant that seamlessly integrates into your daily life. 
                        Inspired by concepts like Jarvis, we've created an intelligent companion that combines cutting-edge AI technology 
                        with practical functionality to enhance your productivity and lifestyle.
                    </motion.p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto ">
                        {aboutUsData.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-[#202020] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <ContentSection
                                    id={section.id}
                                    title={section.title}
                                    content={section.content}
                                    icon={getIconForSection(section.id)}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function getIconForSection(id: string) {
    switch(id) {
        case 'intro': return FaRobot;
        case 'key-features': return FaMicrophone;
        case 'integrations': return FaHome;
        case 'customization': return FaCog;
        case 'security': return FaLock;
        default: return FaRobot;
    }
}