export function LetterSection() {
  return (
    <section className="relative mt-24 flex flex-col before:absolute before:-inset-x-3 before:-top-3 before:border-border before:border-t before:border-dashed">
      <span className="inline-flex select-none items-center gap-1 text-foreground/40 text-sm">
        Have a nice day
      </span>

      <h2 className="mt-3 text-balance text-3xl tracking-tight">
        One letter
        <br />
        from the teams.
      </h2>
      <div
        className="relative mt-6 flex cursor-pointer rounded-lg bg-surface px-5 py-7 transition-all duration-300 before:absolute before:inset-1 before:rounded-md before:border before:border-border before:border-dashed before:bg-secondary/40 hover:-translate-y-0.5"
        data-cuelume-hover="press"
      >
        <div className="prose text-foreground/60 leading-relaxed">
          <p>
            We have learned so much about building{" "}
            <span className="text-foreground">
              companies, copywriting, tone, presentation & communication
            </span>{" "}
            because of people like you.
          </p>
          <p>
            We strive to help you{" "}
            <span className="text-foreground">
              build software and make it beautiful through meticulous attention
              to detail & endless iterations
            </span>{" "}
            on the tiniest ideas.
          </p>
          <p>
            What's the next big thing you're building?
            <br />
            <span className="text-foreground">
              Send the message. We'd love to hear.
            </span>
          </p>

          <p className="text-foreground">Sincerely.</p>
        </div>
      </div>
    </section>
  );
}
