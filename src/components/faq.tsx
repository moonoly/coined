import { Activity, useState } from "react";

interface AccordionProps {
  data: {
    title: string;
    content: React.ReactNode;
  };
}

function Accordion({ data }: AccordionProps) {
  const [isShow, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col transition-all duration-300">
      <button
        className="flex cursor-pointer items-center justify-between py-1"
        data-cuelume-press
        data-cuelume-release
        onClick={() => setShow((state) => !state)}
        type="button"
      >
        <span>{data.title}</span>
        <svg
          fill="none"
          height={12}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width={12}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </button>
      <Activity mode={isShow ? "visible" : "hidden"}>
        <div className="relative flex flex-col gap-3 py-3 pb-10 text-foreground/60 transition-all duration-300 after:absolute after:-inset-x-3 after:bottom-6 after:border-border after:border-b after:border-dashed">
          {data.content}
        </div>
      </Activity>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="relative mt-24 flex flex-col before:absolute before:-inset-x-3 before:-top-3 before:border-border before:border-t before:border-dashed">
      <span className="inline-flex select-none items-center gap-1 text-foreground/40 text-sm">
        FAQs
      </span>

      <h2 className="mt-3 text-balance text-3xl tracking-tight">
        Most asked
        <br />
        questions.
      </h2>
      <div className="mt-6 flex flex-col gap-2.5">
        <Accordion
          data={{
            content: (
              <>
                <p>
                  Once we’ve agreed on the project scope and cost, the payment
                  terms are straightforward: 50% upfront, with the remaining 50%
                  due upon completion.
                </p>
                <p>
                  Once the initial invoice has been paid, we’ll set up a shared
                  Slack or Telegram channel so we can communicate directly
                  throughout the project.
                </p>
                <p>
                  From there, you can stay focused on running your business
                  while we focus on designing your website. It usually takes a
                  few days before there’s something substantial to share, but
                  once there is, we’ll review it together, refine it, and
                  continue iterating until everything feels right.
                </p>
              </>
            ),
            title: "What does the design process look like?",
          }}
        />
        <Accordion
          data={{
            content: (
              <>
                <p>
                  Every proposal is tailored to the specific needs of your
                  project. As a guide, website projects typically start at
                  around $30,000 for design and development.
                </p>
                <p>
                  If you’re interested in working together, send me an email
                  outlining your project, the number of pages you need, and as
                  much detail as you can. From there, I’ll put together a
                  tailored proposal and estimate.
                </p>
              </>
            ),
            title: "What can a project cost?",
          }}
        />
        <Accordion
          data={{
            content: (
              <>
                <p>
                  Yes — we build every page and integrate them with a CMS, so
                  your team has an intuitive interface to manage content, update
                  copy, and create new pages. We can also set up a flexible
                  template system so you can assemble new pages from prebuilt
                  blocks.
                </p>
              </>
            ),
            title: "Do you handle development too?",
          }}
        />
        <Accordion
          data={{
            content: (
              <>
                <p>
                  We strongly recommend building on Next.js — it gives us far
                  more flexibility during implementation and lets us achieve the
                  best possible performance, UX, and accessibility.
                </p>
              </>
            ),
            title: "What tech stack do you recommend?",
          }}
        />
      </div>
    </section>
  );
}
