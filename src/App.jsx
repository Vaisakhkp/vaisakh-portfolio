import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Atom,
  ArrowRight,
  Braces,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  Menu,
  Moon,
  Palette,
  Phone,
  Server,
  SunMedium,
  X,
} from 'lucide-react';
import DeviceGallery from './components/DeviceGallery';
import HeroSection from './components/HeroSection';
import {
  contactLinks,
  education,
  experience,
  heroAccentCards,
  heroIntro,
  heroTagline,
  heroValue,
  navItems,
  skills,
  spiceProject,
} from './data/portfolio';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const skillIcons = [Atom, Server, Database, Braces, Palette, Layers3];
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 bg-noise opacity-100" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--surface-nav)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Vaisakh KP
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-0.5 sm:h-11 sm:w-11"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunMedium size={17} /> : <Moon size={17} />}
            </button>
            <a
              href="/resume/Vaisakh-KP-Resume.pdf"
              download
              className="hidden items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 sm:px-5 lg:inline-flex"
            >
              <Download size={16} />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] lg:hidden"
              aria-label="Open navigation"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[var(--surface-nav)]/95 lg:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/resume/Vaisakh-KP-Resume.pdf"
                  download
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-ink"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <HeroSection
          intro={heroIntro}
          name="Vaisakh KP"
          role="Full Stack Developer"
          tagline={heroTagline}
          value={heroValue}
          accentCards={heroAccentCards}
          imagePath={spiceProject.desktopShots[0].path}
          imageAlt={spiceProject.desktopShots[0].alt}
          reduceMotion={reduceMotion}
        />

        <motion.section
          id="experience"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
              Experience
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Real work across commerce and healthcare.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {experience.map((item, index) => (
              <motion.article
                key={item.title + item.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[var(--accent)]/80" />
                <div className="pl-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
                      {item.org}
                    </p>
                    <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="pt-3 font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="pt-3 text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
                </div>
                <div className="mt-5 space-y-3 pl-4">
                  {item.details.map((detail) => (
                    <p key={detail} className="text-sm leading-7 text-[var(--muted)]">
                      {detail}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2 pl-4">
                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--muted)]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
                {item.liveLink && (
                  <div className="mt-5 pl-4">
                    <a
                      href={item.liveLink.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] transition hover:text-[var(--accent)]"
                    >
                      <span>{item.liveLink.label}</span>
                      <ExternalLink size={15} className="shrink-0" />
                    </a>
                  </div>
                )}
                {item.paperLink && (
                  <div className="mt-5 pl-4">
                    <a
                      href={item.paperLink.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] transition hover:text-[var(--accent)]"
                    >
                      <span>{item.paperLink.title}</span>
                      <ExternalLink size={15} className="shrink-0" />
                    </a>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="project"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
                Projects
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {spiceProject.title}
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
                {spiceProject.brand} | {spiceProject.summary}
              </p>
            </div>
            <a
              href={spiceProject.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              Live Site
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <DeviceGallery
              desktopShots={spiceProject.desktopShots}
              mobileShots={spiceProject.mobileShots}
            />

            <div className="grid gap-4">
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <p className="text-sm leading-7 text-[var(--muted)]">{spiceProject.description}</p>
              </motion.div>

              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
                  What it does
                </p>
                <div className="mt-4 grid gap-3">
                  {spiceProject.bullets.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[var(--text)]">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
                  Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {spiceProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2 text-sm text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I work with
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => {
              const Icon = skillIcons[index % skillIcons.length];

              return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-sm font-medium text-[var(--text)]"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--surface-strong)] text-[var(--accent)]">
                    <Icon size={18} />
                  </div>
                  <span>{skill}</span>
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="education"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
            Education
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Academic background
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {education.map((item, index) => (
              <motion.div
                key={item.level + item.institution}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
                    {item.level}
                  </p>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.institution}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.course}</p>
                <p className="mt-4 text-sm font-medium text-[var(--text)]">{item.result}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] sm:text-sm">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Available for freelance and full-time roles.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:vaisakhkp100@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="/resume/Vaisakh-KP-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 font-semibold transition hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-sm transition hover:-translate-y-0.5"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">
                      {link.label}
                    </p>
                    <p className="mt-1 text-[var(--text)]">{link.value}</p>
                  </div>
                  <span className="text-[var(--muted)]">
                    {link.label === 'Email' && <Mail size={16} />}
                    {link.label === 'Phone' && <Phone size={16} />}
                    {link.label === 'GitHub' && <Github size={16} />}
                    {link.label === 'LinkedIn' && <ArrowRight size={16} />}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
