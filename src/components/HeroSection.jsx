import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const accentPositions = [
  'left-0 top-10',
  'right-4 top-0',
  'right-10 bottom-4',
];

function HeroSection({
  intro,
  name,
  role,
  tagline,
  value,
  accentCards,
  imagePath,
  imageAlt,
  reduceMotion,
}) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={
            reduceMotion
              ? { opacity: 1 }
              : {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0.2 }
              : { duration: 18, repeat: Infinity, ease: 'linear' }
          }
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(219,161,75,0.08),rgba(17,19,24,0)_32%,rgba(54,85,71,0.08),rgba(17,19,24,0)_75%)] bg-[length:180%_180%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.12]" />
        <div className="absolute left-[12%] top-[16%] h-44 w-44 rounded-full bg-[var(--accent-soft)] blur-3xl" />
        <div className="absolute bottom-[12%] right-[12%] h-52 w-52 rounded-full bg-[var(--accent-secondary-soft)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            variants={textContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={textItem}
              className="text-sm uppercase tracking-[0.34em] text-[var(--muted)]"
            >
              {intro}
            </motion.p>
            <motion.h1
              variants={textItem}
              className="mt-4 font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl lg:text-[5.25rem]"
            >
              {name}
            </motion.h1>
            <motion.p
              variants={textItem}
              className="mt-5 text-xl font-medium text-[var(--text)] sm:text-2xl"
            >
              {role}
            </motion.p>
            <motion.p
              variants={textItem}
              className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]"
            >
              {tagline}
            </motion.p>
            <motion.p
              variants={textItem}
              className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]/90"
            >
              {value}
            </motion.p>
            <motion.div variants={textItem} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#project"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5"
              >
                View Work
                <ArrowRight size={17} />
              </a>
              <a
                href="/resume/Vaisakh-KP-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 font-semibold transition hover:-translate-y-0.5"
              >
                <Download size={17} />
                Download Resume
              </a>
              <a
                href="mailto:vaisakhkp100@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-transparent px-6 py-3.5 font-semibold text-[var(--muted)] transition hover:-translate-y-0.5 hover:text-[var(--text)]"
              >
                <Mail size={17} />
                Hire Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 28 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
            className="relative mx-auto w-full max-w-[720px]"
          >
            <div className="absolute inset-x-10 top-10 h-32 rounded-full bg-[var(--accent-soft)] blur-3xl" />
            <div className="absolute bottom-10 right-10 h-36 w-36 rounded-full bg-[var(--accent-secondary-soft)] blur-3xl" />

            <div className="relative hidden min-h-[470px] lg:block">
              {accentCards.map((item, index) => (
                <AccentCard
                  key={item}
                  label={item}
                  index={index}
                  reduceMotion={reduceMotion}
                  className={`absolute z-20 ${accentPositions[index]}`}
                />
              ))}

              <div className="absolute inset-x-8 top-12 z-10">
                <ProjectFrame imagePath={imagePath} imageAlt={imageAlt} />
              </div>
            </div>

            <div className="lg:hidden">
              <ProjectFrame imagePath={imagePath} imageAlt={imageAlt} compact />
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {accentCards.map((item, index) => (
                  <AccentCard
                    key={item}
                    label={item}
                    index={index}
                    reduceMotion={reduceMotion}
                    mobile
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectFrame({ imagePath, imageAlt, compact = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-strong)] p-3 shadow-glow sm:p-4">
      <div className="rounded-[1.65rem] border border-white/10 bg-[#12161e] p-3 sm:p-4">
        <div className="flex items-center gap-2 border-b border-white/8 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4cc9f0]" />
          <div className="ml-3 rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
            Spice Project
          </div>
        </div>
        <div
          className={`mt-4 overflow-hidden rounded-[1.2rem] border border-white/10 ${
            compact ? 'aspect-[16/11]' : 'aspect-[16/10]'
          }`}
        >
          {!failed ? (
            <img
              src={imagePath}
              alt={imageAlt}
              onError={() => setFailed(true)}
              className="h-full w-full bg-[#0f1319] object-contain p-2 sm:p-3"
            />
          ) : (
            <div className="flex h-full items-end bg-[linear-gradient(180deg,rgba(239,228,210,0.92),rgba(199,154,98,0.92))] p-5">
              <div className="rounded-2xl bg-white/55 p-4 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#365547]/70">
                  Add image
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#1c2128]">Desktop Homepage</h3>
                <p className="mt-2 text-sm text-[#1c2128]/70">{imagePath}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AccentCard({ label, index, reduceMotion, className = '', mobile = false }) {
  const floatX = index % 2 === 0 ? [0, 7, -5, 0] : [0, -7, 5, 0];
  const floatY = index % 2 === 0 ? [0, -8, 5, 0] : [0, 8, -5, 0];
  const floatRotate = index % 2 === 0 ? [0, -0.9, 0.45, 0] : [0, 0.9, -0.45, 0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{
        opacity: 1,
        x: reduceMotion ? 0 : floatX,
        y: reduceMotion ? 0 : floatY,
        rotate: reduceMotion ? 0 : floatRotate,
        scale: 1,
      }}
      transition={
        reduceMotion
          ? { duration: 0.35, ease: 'easeOut' }
          : {
              duration: 6.6 + index * 0.45,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: 0.15 + index * 0.1,
            }
      }
      whileHover={
        reduceMotion
          ? undefined
          : { y: mobile ? -3 : -6, scale: 1.04, rotate: 0, transition: { duration: 0.2 } }
      }
      className={className}
    >
      <div className="rounded-2xl border border-[var(--border)] bg-[color:var(--surface)]/92 px-4 py-3 text-sm font-medium text-[var(--text)] shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur transition hover:border-[var(--accent)]">
        {label}
      </div>
    </motion.div>
  );
}

export default HeroSection;
