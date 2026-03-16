import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor, Smartphone } from 'lucide-react';

function DeviceGallery({ desktopShots, mobileShots }) {
  const reduceMotion = useReducedMotion();
  const [mode, setMode] = useState('desktop');
  const [index, setIndex] = useState(0);

  const shots = mode === 'desktop' ? desktopShots : mobileShots;
  const activeShot = shots[index];

  const updateMode = (nextMode) => {
    setMode(nextMode);
    setIndex(0);
  };

  const move = (direction) => {
    const nextIndex = (index + direction + shots.length) % shots.length;
    setIndex(nextIndex);
  };

  return (
    <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-strong)] p-1">
          {[
            { key: 'desktop', label: 'Desktop', icon: Monitor },
            { key: 'mobile', label: 'Mobile', icon: Smartphone },
          ].map((option) => {
            const Icon = option.icon;
            const active = mode === option.key;

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => updateMode(option.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? 'bg-[var(--accent)] text-ink'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                <Icon size={15} />
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] transition hover:-translate-y-0.5"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] transition hover:-translate-y-0.5"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-${activeShot.path}`}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.35, ease: 'easeOut' }}
          >
            <GalleryImage shot={activeShot} mobile={mode === 'mobile'} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {shots.map((shot, shotIndex) => (
          <button
            key={shot.path}
            type="button"
            onClick={() => setIndex(shotIndex)}
            className={`overflow-hidden rounded-2xl border p-1 text-left transition ${
              shotIndex === index
                ? 'border-[var(--accent)] bg-[var(--accent-fade)]'
                : 'border-[var(--border)] bg-[var(--surface-strong)]'
            }`}
          >
            <GalleryImage shot={shot} mobile={mode === 'mobile'} thumb />
          </button>
        ))}
      </div>
    </div>
  );
}

function GalleryImage({ shot, mobile, thumb = false }) {
  const [failed, setFailed] = useState(false);
  const frameClass = mobile
    ? thumb
      ? 'mx-auto aspect-[9/16] w-14 rounded-[1rem]'
      : 'mx-auto aspect-[9/16] w-full max-w-[240px] rounded-[1.75rem]'
    : thumb
      ? 'aspect-[16/10] w-full rounded-[1rem]'
      : 'aspect-[16/10] w-full rounded-[1.75rem]';

  if (failed) {
    return (
      <div
        className={`${frameClass} flex items-end overflow-hidden border border-dashed border-white/15 bg-[linear-gradient(180deg,rgba(219,161,75,0.16),rgba(17,19,24,0.92))] p-3`}
      >
        <div>
          {!thumb && (
            <>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Add image</p>
              <p className="mt-2 text-sm font-medium text-white">{shot.title}</p>
            </>
          )}
          {!thumb && <p className="mt-2 text-xs text-white/70">{shot.path}</p>}
        </div>
      </div>
    );
  }

  return (
    <img
      src={shot.path}
      alt={shot.alt}
      onError={() => setFailed(true)}
      className={`${frameClass} border border-white/10 bg-[#0f1319] object-contain ${
        thumb ? 'p-1.5' : 'p-2 sm:p-3'
      }`}
    />
  );
}

export default DeviceGallery;
