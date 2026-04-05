export function LetterSection() {
  return (
    <section className="flex flex-col">
      <h2 className="font-medium text-xl tracking-tighter">Letters.</h2>
      <div className="mt-6 flex rounded-xl border border-border border-dashed bg-surface px-5 py-7">
        <div className="prose text-foreground/60 leading-relaxed">
          <p>
            Hi, I'm{" "}
            <span className="text-foreground italic">Nyoman Sunima</span>,
            founder of Coined.
          </p>
          <p>
            We have learned so much about building companies, copywriting, tone,
            presentation & communication because of people like you.
          </p>
          <p>
            We strive to help you build software and make Al beautiful through
            meticulous attention to detail & endless iterations on the tiniest
            ideas. It's what we signed up for when we didn't know how our Studio
            is going to be named.
          </p>
          <p>
            We hope to keep building our internal software as well as large,
            external software. We want to fulfill our promise to ourselves.
          </p>
          <p>
            What's the next big thing you're building?
            <br />
            Send the message. We'd love to hear.
          </p>

          <p>Sincerely.</p>
        </div>
      </div>
    </section>
  );
}
