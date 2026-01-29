'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sections = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Page() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActive(id);
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-[#e5e7eb]">

      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-semibold tracking-wide">Vineetha</span>
          <div className="space-x-6 text-sm">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`capitalize transition ${
                  active === id ? 'text-white' : 'text-gray-400'
                }`}
              >
                {id}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-28 flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Vineetha Wilson
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Senior QA Automation Engineer · QA Team Lead · SDET
            </p>
            <p className="mt-2 text-gray-400">
              Relocating to Dubai, UAE · Immediate / 30 Days
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/Vineetha_Wilson_Resume.pdf" download>
                <button className="px-6 py-3 bg-white text-black rounded-md flex items-center gap-2 hover:opacity-90">
                  <Download size={16} /> Download Resume
                </button>
              </a>
              <a href="#contact">
                <button className="px-6 py-3 border border-white/30 rounded-md hover:border-white">
                  Contact Me
                </button>
              </a>
            </div>

            <div className="mt-10 flex gap-5 text-gray-400">
              <a href="https://github.com" target="_blank"><Github /></a>
              <a href="https://www.linkedin.com/in/wilson-vineetha-a6a998175/" target="_blank"><Linkedin /></a>
              <a href="mailto:wilson.vineetha9@gmail.com"><Mail /></a>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fade} className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/profile.jpg" alt="Vineetha Wilson" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-300 leading-relaxed">
          Senior QA Automation Engineer and Team Lead with 6+ years of experience
          delivering high-quality automation solutions across Web, Mobile, API,
          and OTT platforms. Expert in Playwright, Selenium, and WebDriverIO with
          strong leadership in CI/CD quality gates, automation strategy, and
          mentoring QA teams.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 bg-[#0f1117]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Playwright','Selenium','WebDriverIO','Appium',
              'ReadyAPI','Postman','Jenkins','Azure DevOps',
              'TypeScript','JavaScript','Python','Java','C#'
            ].map((s) => (
              <div key={s} className="bg-[#0b0b0f] border border-white/10 p-6 rounded-lg text-center">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Playwright E2E Framework', desc: 'Scalable Playwright framework with CI integration.' },
            { title: 'WebDriverIO Automation', desc: 'Cross-browser automation with reporting.' },
            { title: 'API Automation Suite', desc: 'ReadyAPI + Postman regression suite.' },
          ].map((p) => (
            <div key={p.title} className="bg-[#0f1117] border border-white/10 p-6 rounded-lg hover:scale-[1.02] transition">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 bg-[#0f1117]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Experience</h2>

          <div className="space-y-8">
            <div className="border border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Team Lead – Senior QA Automation Engineer · Tata Elxsi (Zoox)
              </h3>
              <p className="text-gray-400">Apr 2025 – Present</p>
              <ul className="list-disc ml-6 mt-3 text-gray-300">
                <li>Lead a team of 5 QA engineers</li>
                <li>Architected Playwright automation framework</li>
                <li>Owned CI/CD quality gates and release metrics</li>
                <li>Client and stakeholder coordination</li>
              </ul>
            </div>

            <div className="border border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">
                Senior QA Automation Engineer · Tata Elxsi (Symplr)
              </h3>
              <p className="text-gray-400">2022 – 2025</p>
              <ul className="list-disc ml-6 mt-3 text-gray-300">
                <li>WebDriverIO & ReadyAPI automation</li>
                <li>CI pipeline integration</li>
                <li>Azure DevOps defect lifecycle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-300">wilson.vineetha9@gmail.com</p>
        <p className="text-gray-300">
          UAE: +971 50 191 8369 · India: +91 85004 87440
        </p>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2026 Vineetha Wilson
      </footer>
    </main>
  );
}
