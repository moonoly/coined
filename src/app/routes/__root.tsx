import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import styles from "~/app/globals.css?url";

interface RootDocumentProps {
  children: React.ReactNode;
}

export const Route = createRootRoute({
  errorComponent: ErrorComponent,
  head: () => ({
    links: [
      { href: "/favicon.ico", rel: "icon", type: "image/x-icon" },
      { href: "/sitemap.xml", rel: "sitemap", type: "application/xml" },
      {
        href: styles,
        rel: "stylesheet",
      },
    ],
    meta: [
      {
        charSet: "utf-8",
      },
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
      },
    ],
  }),
  notFoundComponent: NotFondComponent,
  shellComponent: RootDocument,
});

function RootDocument({ children }: RootDocumentProps) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="container mx-auto px-5 pt-10 pb-20 md:pt-16 lg:px-0">
        <div className="mx-auto w-full sm:w-10/12 md:w-11/12 lg:w-6/12 xl:w-5/12">
          {children}
        </div>
        <Scripts />
      </body>
    </html>
  );
}

function NotFondComponent() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            404.
          </span>
          <h2 className="mt-2 font-medium text-lg">Not found.</h2>

          <p className="mt-6 text-pretty leading-7">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="mt-10 flex">
          <a href="/">
            <i className="fi fi-sr-arrow-alt-circle-left" />
            Bring me back
          </a>
        </div>
      </section>
    </main>
  );
}

function ErrorComponent() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            500.
          </span>
          <h2 className="mt-2 font-medium text-lg">Error found.</h2>

          <p className="mt-6 text-pretty leading-7">
            It seems like something went wrong on our end. Please try again
            later, or contact support if the problem persists.
          </p>
        </div>

        <div className="mt-10 flex">
          <a href="/">
            <i className="fi fi-sr-arrow-alt-circle-left" />
            Bring me back
          </a>
        </div>
      </section>
    </main>
  );
}
