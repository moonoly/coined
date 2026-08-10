function TestimonialItem() {
  return (
    <div
      className="group relative flex cursor-pointer flex-col rounded-lg border border-border border-dashed bg-surface p-1 transition-all duration-300 hover:-translate-y-0.5"
      data-cuelume-hover="press"
    >
      <p className="overflow-hidden text-pretty rounded-md border border-border border-dashed bg-secondary/40 px-3 pt-5 pb-12 text-foreground leading-relaxed">
        "Coined really nailed the design & development, works perfectly.
        Everything work seamlessly and the design looks sick, fast delivery,
        seamless communications. Just amazing work."
      </p>

      <div className="flex items-center justify-between px-3 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <img
            alt="Nyoman Sunima"
            className="h-6 w-6 overflow-hidden rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1918961916556509184/7mQkBVgb_400x400.jpg"
          />
          <span className="text-sm">Nyoman Sunima</span>
        </div>

        <a
          className="text-foreground/40 text-sm transition-all duration-300 hover:text-foreground"
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
