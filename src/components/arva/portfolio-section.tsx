import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { PORTFOLIO, type PortfolioActivity } from "./portfolio";

/* =========================================================================
   PORTFOLIO: programmes and engagements per pillar / sub-pillar
   ========================================================================= */

export function PortfolioIndex() {
  return (
    <nav aria-label="Portfolio sections" className="container-arva pb-4">
      <div className="grid gap-px border border-border bg-border md:grid-cols-2">
        {PORTFOLIO.map((p) => (
          <div key={p.id} className="bg-card p-5 sm:p-6">
            <a href={`#${p.id}`} className="eyebrow hover:underline underline-offset-4">
              Pillar {p.number}
            </a>
            <p className="mt-1 font-serif text-lg text-foreground leading-snug">{p.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.subPillars.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-baseline justify-between gap-4 text-foreground/80 hover:text-burgundy transition-colors"
                  >
                    <span>
                      <span className="mr-2 text-burgundy">{s.number}</span>
                      {s.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">{s.activities.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export function PortfolioSections() {
  const [open, setOpen] = useState<{ activity: PortfolioActivity; index: number } | null>(null);

  return (
    <>
      {PORTFOLIO.map((pillar) => (
        <section key={pillar.id} id={pillar.id} className="scroll-mt-28 border-t border-border mt-12 md:mt-16">
          <div className="container-arva pt-12 md:pt-16">
            <div className="grid gap-4 md:grid-cols-[1fr_1.4fr] md:gap-12 md:items-end" data-reveal="up">
              <div>
                <p className="eyebrow mb-3">Pillar {pillar.number}</p>
                <h2 className="text-3xl sm:text-4xl font-serif text-foreground leading-tight">{pillar.title}</h2>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed md:pb-1">{pillar.intro}</p>
            </div>

            {pillar.subPillars.map((sub) => (
              <div key={sub.id} id={sub.id} className="scroll-mt-28 pt-12 md:pt-16">
                <div
                  className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8"
                  data-reveal="up"
                >
                  <div className="max-w-2xl">
                    <h3 className="font-serif text-2xl text-foreground leading-snug">
                      <span className="mr-3 text-burgundy">{sub.number}</span>
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{sub.summary}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {sub.activities.length} {sub.activities.length === 1 ? "activity" : "activities"}
                  </span>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {sub.activities.map((a) => (
                    <ActivityCard key={a.slug} activity={a} onOpen={(index) => setOpen({ activity: a, index })} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {open && (
        <PhotoViewer activity={open.activity} startIndex={open.index} onClose={() => setOpen(null)} />
      )}
    </>
  );
}

function ActivityCard({ activity, onOpen }: { activity: PortfolioActivity; onOpen: (index: number) => void }) {
  const count = activity.photos.length;
  return (
    <article className="group flex flex-col border border-border bg-card" data-reveal="up">
      <button
        type="button"
        onClick={() => onOpen(0)}
        className="relative block aspect-[16/10] overflow-hidden bg-cream cursor-pointer"
        aria-label={`View photos: ${activity.title}`}
      >
        <img
          src={activity.cover}
          alt={activity.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {count > 1 && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-navy/85 px-2 py-1 text-[11px] text-cream">
            <Images className="h-3.5 w-3.5" aria-hidden />
            {count} photos
          </span>
        )}
      </button>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-burgundy">{activity.meta}</p>
        <h4 className="mt-2 font-serif text-lg text-foreground leading-snug">{activity.title}</h4>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{activity.desc}</p>
        <button
          type="button"
          onClick={() => onOpen(0)}
          className="mt-auto self-start pt-5 text-xs font-semibold uppercase tracking-wider text-foreground underline decoration-border underline-offset-[6px] hover:text-burgundy hover:decoration-burgundy transition-colors cursor-pointer"
        >
          {count > 1 ? "View photos" : "View photo"}
        </button>
      </div>
    </article>
  );
}

function PhotoViewer({
  activity,
  startIndex,
  onClose,
}: {
  activity: PortfolioActivity;
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const total = activity.photos.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const go = useCallback((step: number) => setIndex((i) => (i + step + total) % total), [total]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  useEffect(() => {
    // keep the active thumbnail in view and warm up the next photo
    thumbsRef.current?.querySelector<HTMLElement>(`[data-i="${index}"]`)?.scrollIntoView({
      block: "nearest",
      inline: "center",
    });
    if (total > 1) new Image().src = activity.photos[(index + 1) % total];
  }, [index, total, activity.photos]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activity.title}
      className="fixed inset-0 z-[60] flex flex-col bg-navy text-cream"
      onClick={onClose}
    >
      <div
        className="flex items-start justify-between gap-4 border-b border-navy-line px-4 py-3 sm:px-8 sm:py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wider text-cream/60">{activity.meta}</p>
          <p className="mt-0.5 truncate font-serif text-base sm:text-lg">{activity.title}</p>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          {total > 1 && (
            <span className="text-xs tabular-nums text-cream/70">
              {index + 1} / {total}
            </span>
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="p-1.5 text-cream/80 hover:text-cream cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 py-4 sm:px-20"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <img
          key={activity.photos[index]}
          src={activity.photos[index]}
          alt={`${activity.title}, photo ${index + 1} of ${total}`}
          className="max-h-full max-w-full object-contain sm:h-full sm:w-auto"
          onClick={(e) => e.stopPropagation()}
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-navy/70 p-2 text-cream/80 hover:text-cream sm:left-6 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-navy/70 p-2 text-cream/80 hover:text-cream sm:right-6 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div
          ref={thumbsRef}
          className="flex gap-2 overflow-x-auto border-t border-navy-line px-4 py-3 sm:justify-center sm:px-8"
          onClick={(e) => e.stopPropagation()}
        >
          {activity.photos.map((src, i) => (
            <button
              key={src}
              type="button"
              data-i={i}
              onClick={() => setIndex(i)}
              className={`h-12 w-16 shrink-0 overflow-hidden border cursor-pointer sm:h-14 sm:w-20 ${
                i === index ? "border-cream" : "border-transparent opacity-50 hover:opacity-90"
              }`}
              aria-label={`Photo ${i + 1}`}
              aria-current={i === index}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
