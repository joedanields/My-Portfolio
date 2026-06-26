"use client";

import Image from "next/image";
import TextPressure from '@/components/TextPressure';
import { hyperspeedPresets } from '@/components/HyperSpeedPresets';
import Hyperspeed from '@/components/Hyperspeed';
import ShinyText from '@/components/ShinyText';
import Dock from '@/components/Dock';
import DarkVeil from '@/components/DarkVeil';
import DecryptedText from '@/components/DecryptedText';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const dockItems = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollTo('home') },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => scrollTo('about') },
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => scrollTo('projects') },
    { icon: <VscSettingsGear size={18} />, label: 'Contact', onClick: () => scrollTo('contact') },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#5227FF] selection:text-white scroll-smooth">
      <Dock
        items={dockItems}
        panelHeight={70}
        baseItemSize={40}
        magnification={70}
      />

      {/* Hero Section */}
      <main id="home" className="w-full h-screen overflow-hidden relative flex flex-col items-center justify-center">
        {/* Background Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Hyperspeed effectOptions={hyperspeedPresets.six} />
        </div>
        
        {/* Foreground Container */}
        <div className="absolute bottom-[40%] md:bottom-[50%] left-[7%] md:left-[12%] z-10 flex flex-col items-start gap-4 pointer-events-none">
          {/* Row 1: Greeting */}
          <div className="w-[300px] h-[60px] opacity-80">
            <TextPressure
              text="HELLO THIS IS"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={18}
            />
          </div>
          <ShinyText
            text="JOE_DANIEL_A"
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase font-['Roboto_Flex'] tracking-tight mt-1"
            speed={3.4}
            delay={0}
            color="#f7f7f7"
            shineColor="#bea864"
            spread={95}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <p className="text-gray-400 max-w-md mt-4 text-lg">
            <DecryptedText
              text="A passionate developer crafting premium, dynamic web experiences using modern technologies and bold design."
              animateOn="view"
              revealDirection="start"
              sequential
              speed={50}
              maxIterations={8}
              useOriginalCharsOnly={false}
            />
          </p>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="w-full min-h-[70vh] flex flex-col justify-center items-center py-24 px-6 relative z-10 bg-[#0a0a0a]">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="text-[#5227FF]">/</span> About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I thrive at the intersection of design and engineering. My focus is on building interfaces that don't just function smoothly, but feel alive.
              </p>
              <p>
                Utilizing cutting-edge tools like ReactBits, Three.js, and modern CSS, I specialize in crafting digital experiences that wow users from the very first scroll.
              </p>
            </div>
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'WebGL', 'GSAP', 'Tailwind CSS', 'UI/UX Design'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-[#222] rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-[#5227FF] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with DarkVeil Background */}
      <section id="projects" className="w-full min-h-screen relative flex flex-col justify-center py-24 px-6 overflow-hidden">
        {/* DarkVeil Background Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
          <DarkVeil hueShift={250} warpAmount={0.5} noiseIntensity={0.05} speed={0.2} />
        </div>
        
        <div className="max-w-6xl w-full mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bea864] to-[#5227FF]">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group relative bg-[#0f0f0f]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#5227FF]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 bg-[#1a1a1a] w-full relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/20 to-transparent"></div>
                 {/* Placeholder for project image */}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Nebula Dashboard</h3>
                <p className="text-gray-400 mb-6">A high-performance analytics dashboard featuring real-time data visualization and a glassmorphic design system.</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#bea864] hover:text-white transition-colors">
                  View Case Study →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative bg-[#0f0f0f]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-[#bea864]/50 transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 bg-[#1a1a1a] w-full relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-bl from-[#bea864]/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Quantum E-Commerce</h3>
                <p className="text-gray-400 mb-6">An immersive shopping experience built with Next.js, featuring 3D product previews and seamless transitions.</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#5227FF] hover:text-white transition-colors">
                  View Live Site →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section id="contact" className="w-full py-24 bg-[#050505] relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase font-['Roboto_Flex'] tracking-tighter mb-8">
            Let's <span className="text-[#5227FF]">Connect</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:hello@example.com" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
            Say Hello
          </a>
          
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Joe Daniel A. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
