function TestimonialItem() {
  return (
    <div
      className="group relative flex cursor-pointer flex-col rounded-lg border border-border border-dashed bg-surface p-5 transition-transform duration-300 before:absolute before:inset-1 before:rounded-md before:border before:border-border before:border-dashed hover:-translate-y-0.5"
      data-cuelume-hover="press"
    >
      <svg
        className="absolute top-5 right-5 -rotate-6"
        fill="none"
        height="20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
        <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      </svg>

      <p className="text-pretty text-foreground leading-relaxed">
        Coined really nailed the design & development, works perfectly.
        Everything work seamlessly and the design looks sick, fast delivery,
        seamless communications. Just amazing work.
      </p>

      <div className="flex h-px items-center justify-between pt-8 pb-1 before:absolute before:inset-x-1 before:bottom-11 before:border-border before:border-t before:border-dashed">
        <div className="flex items-center gap-2">
          <img
            alt="Nyoman Sunima"
            className="h-6 w-6 overflow-hidden rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1918961916556509184/7mQkBVgb_400x400.jpg"
          />
          <span className="text-sm">Nyoman Sunima</span>
        </div>

        <a
          className="text-foreground/40 text-sm transition-all duration-300"
          href="https://moonoly.fyi"
          rel="noopener"
          target="_blank"
        >
          Founder of Moonoly
        </a>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative mt-24 flex flex-col before:absolute before:-inset-x-3 before:-top-3 before:border-border before:border-t before:border-dashed">
      <span className="inline-flex select-none items-center gap-1 text-foreground/40 text-sm">
        Testimonials
      </span>
      <h2 className="mt-3 text-balance text-3xl tracking-tight">
        People trusted
        <br />
        what we do.
      </h2>
      <div className="mt-6 flex">
        <TestimonialItem />
      </div>
    </section>
  );
}
