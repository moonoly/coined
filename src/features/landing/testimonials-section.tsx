function TestimonialItem() {
  return (
    <div className="group relative flex cursor-pointer flex-col rounded-xl border border-border border-dashed bg-surface p-5 transition-transform duration-300 hover:-translate-y-0.5">
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

      <p className="text-pretty leading-relaxed sm:p-3 tracking-tight">
        Coined really nailed the design & development, works perfectly.
        Everything work seamlessly and the design looks sick, fast delivery,
        seamless communications. Just amazing work.
      </p>

      <div className="mt-5 flex items-center justify-between border-border border-t border-dashed pt-4">
        <div className="flex items-center gap-2">
          <img
            alt="Nyoman Sunima"
            className="h-6 w-6 overflow-hidden rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1918961916556509184/7mQkBVgb_400x400.jpg"
          />
          <span className="text-sm">Nyoman Sunima</span>
        </div>

        <a
          className="text-sm transition-all duration-300 hover:text-foreground/60"
          href="https://moono.site"
          rel="noopener"
          target="_blank"
        >
          Moono
        </a>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="flex flex-col">
      <h2 className="font-medium text-xl tracking-tighter">Testimonials.</h2>
      <div className="mt-6 flex">
        <TestimonialItem />
      </div>
    </section>
  );
}
