'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { Download, Github, Linkedin, Mail, CheckCircle, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

function Counter({ to }: { to: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= to) {
        start = to;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);
    return () => clearInterval(interval);
  }, [to]);

  return <span>{count}+</span>;
}

const projects = [
  {
    title: 'Playwright E2E Framework',
    desc: 'Scalable Playwright framework with CI/CD integration.',
    img: '/projects/playwright.png',
  },
  {
    title: 'WebDriverIO Automation',
    desc: 'Cross-browser automation with reporting and retries.',
    img: '/projects/webdriverio.png',
  },
  {
    title: 'API Automation Suite',
    desc: 'ReadyAPI + Postman regression automation.',
    img: '/projects/api.png',
  },
];

const testimonials = [
  { name: 'Project Manager, Symplr', text: 'Vineetha significantly improved our automation coverage and release reliability.' },
  { name: 'Tech Lead, Zoox', text: 'Excellent Playwright framework and strong QA leadership.' },
  { name: 'QA Manager, Tata Elxsi', text: 'Dependable QA lead and automation expert. Great mentor.' },
];

export default function Page() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0b0b12] text-white overflow-hidden">

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 z-[999]"
        style={{ scaleX, transformOrigin: '0%' }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 pointer-events-none z-[1000]"
        style={{ x: cursorX, y: cursorY }}
      />

      {/* Background Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/10 blur-[160px] rounded-full" />
      <div className="absolute top-[40%] right-[-200px] w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <span className="font-semibold">Vineetha</span>
          <div className="flex gap-6 text-sm text-gray-300 items-center">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="border border-white/20 rounded-md p-2"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-32 text-center px-6">
        <div>
          <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tight">
            Vineetha Wilson
          </motion.h1>

          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-6 text-xl text-gray-300">
            Senior QA Automation Engineer · QA Team Lead · SDET
          </motion.p>

          <motion.p custom={3} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-3 text-gray-400">
            Relocating to Dubai, UAE · Immediate / 30 Days
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-10 flex justify-center gap-4">
            <a href="/Vineetha_Wilson_Resume.pdf" download>
              <button className="px-6 py-3 bg-white text-black rounded-md flex items-center gap-2 micro">
                <Download size={16} /> Download Resume
              </button>
            </a>
            <a href="#contact">
              <button className="px-6 py-3 border border-white/30 rounded-md micro">
                Contact Me
              </button>
            </a>
          </motion.div>

          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-10 flex justify-center gap-6 text-gray-400">
            <a href="#"><Github /></a>
            <a href="https://www.linkedin.com/in/wilson-vineetha-a6a998175/"><Linkedin /></a>
            <a href="mailto:wilson.vineetha9@gmail.com"><Mail /></a>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div><div className="text-4xl font-bold"><Counter to={6} /></div><p className="text-gray-400 mt-2">Years Experience</p></div>
          <div><div className="text-4xl font-bold"><Counter to={120} /></div><p className="text-gray-400 mt-2">Test Suites</p></div>
          <div><div className="text-4xl font-bold"><Counter to={25} /></div><p className="text-gray-400 mt-2">Projects Delivered</p></div>
          <div><div className="text-4xl font-bold"><Counter to={5} /></div><p className="text-gray-400 mt-2">Teams Led</p></div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-[#0f111a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Automation Framework Design',
              'Playwright & WebDriverIO',
              'API Automation',
              'CI/CD Integration',
              'QA Leadership & Mentoring',
              'Cross-Platform Testing',
            ].map((s) => (
              <div key={s} className="bg-[#0b0b12] border border-white/10 rounded-xl p-6 shadow-lg micro">
                <CheckCircle className="text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">{s}</h3>
                <p className="text-gray-400 text-sm">
                  Enterprise-grade scalable QA solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 bg-[#0f111a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">Latest Work</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -8 }}
                onClick={() => setActiveProject(p)}
                className="cursor-pointer group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12] shadow-xl micro"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPg=="
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <div className="text-center px-4">
                      <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-300">{p.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">What Clients Say</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0f111a] border border-white/10 rounded-xl p-8 shadow-xl"
          >
            <p className="text-lg text-gray-200 mb-6">
              “{testimonials[testimonialIndex].text}”
            </p>
            <p className="text-purple-400 font-semibold">
              — {testimonials[testimonialIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 bg-[#0f111a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">Experience</h2>

          <div className="space-y-8">
            <div className="border border-white/10 rounded-xl p-6 micro">
              <h3 className="text-xl font-semibold">
                Team Lead – Senior QA Automation Engineer · Tata Elxsi (Zoox)
              </h3>
              <p className="text-gray-400">Apr 2025 – Present</p>
              <ul className="list-disc ml-6 mt-4 text-gray-300">
                <li>Lead team of 5 QA engineers</li>
                <li>Architected Playwright automation framework</li>
                <li>Owned CI/CD quality gates and release quality</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-xl p-6 micro">
              <h3 className="text-xl font-semibold">
                Senior QA Automation Engineer · Tata Elxsi (Symplr)
              </h3>
              <p className="text-gray-400">2022 – 2025</p>
              <ul className="list-disc ml-6 mt-4 text-gray-300">
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
        <h2 className="text-3xl font-semibold mb-6">Let’s Work Together</h2>
        <p className="text-gray-300 text-lg">wilson.vineetha9@gmail.com</p>
        <p className="text-gray-400">
          UAE: +971 50 191 8369 · India: +91 85004 87440
        </p>
      </section>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur flex items-center justify-center px-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="bg-[#0f111a] max-w-3xl w-full rounded-2xl p-8 border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X />
              </button>

              <h3 className="text-2xl font-semibold mb-4">
                {activeProject.title}
              </h3>

              <Image
                src={activeProject.img}
                alt={activeProject.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="text-gray-300 mb-4">
                {activeProject.desc}
              </p>

              <ul className="list-disc ml-6 text-gray-400 space-y-2">
                <li>Framework architecture & design</li>
                <li>CI/CD quality gates integration</li>
                <li>Cross-browser & cross-platform support</li>
                <li>Scalable reporting & retries</li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2026 Vineetha Wilson
      </footer>
    </main>
  );
}
