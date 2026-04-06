import { Button } from "@shared/components/ui/button";

interface Work {
  image: string;
  title: string;
}

interface WorksSectionProps {
  work: Work;
}

const works: Work[] = [
  {
    image:
      "https://cdn.dribbble.com/userupload/46206031/file/afdb862a3e00a37b47be8de23faeb150.png?resize=2048x1536&vertical=center",
    title: "Truecaller",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/46017224/file/d85aa28050389514029bb52397b1a6f4.png?resize=2048x1536&vertical=center",
    title: "Stowra",
  },
  {
    image:
      "https://cdn.dribbble.com/userupload/45829599/file/73718d45323c989b35de2a04e3978f6b.png?resize=2048x1536&vertical=center",
    title: "Scrypt",
  },
];

function WorkItem({ work }: WorksSectionProps) {
  return (
    <div className="flex cursor-pointer rounded-xl border border-border border-dashed bg-surface p-1 transition-transform duration-300 hover:-translate-y-0.5">
      <img
        alt={work.title}
        className="h-60 w-full overflow-hidden rounded-lg object-cover sm:h-96"
        src={work.image}
      />
    </div>
  );
}

export function WorksSection() {
  return (
    <section className="flex flex-col">
      <h2 className="font-medium text-xl tracking-tighter">Works.</h2>
      <div className="mt-6 flex gap-2">
        <Button
          className="transition-all duration-300 hover:-translate-y-0.5"
          size="xs"
          variant="secondary"
        >
          <svg
            height="12"
            viewBox="0 0 24 24"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z"
              fill="currentColor"
            />
          </svg>
          Spotlight
        </Button>
        <Button
          className="transition-all duration-300 hover:-translate-y-0.5"
          size="xs"
          variant="secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
          >
            <path d="M16.585,9.616,15.21,6h2.422A5.885,5.885,0,0,1,22.36,8.4l.787,1.075A4.431,4.431,0,0,1,23.867,11H16.952A6.5,6.5,0,0,0,16.585,9.616ZM12,4a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,12,4Zm2.722,6.343L13.071,6H10.938L9.26,10.452A4.709,4.709,0,0,0,9.1,11h5.821A4.623,4.623,0,0,0,14.722,10.343ZM16.553,3.9A1,1,0,0,0,17.9,3.447l1-2a1,1,0,1,0-1.79-.894l-1,2A1,1,0,0,0,16.553,3.9ZM11.988,18.887l2.786-5.253A4.591,4.591,0,0,0,14.941,13H9a4.585,4.585,0,0,0,.2.757ZM7.4,9.729,8.8,6H6.383A5.892,5.892,0,0,0,1.721,8.309L.9,9.383A4.366,4.366,0,0,0,.141,11h6.9A6.6,6.6,0,0,1,7.4,9.729ZM16.969,13a6.573,6.573,0,0,1-.344,1.4c-.015.04-3.756,7.074-3.759,7.075a.973.973,0,0,1-1.726.008s-3.774-6.912-3.79-6.955A6.586,6.586,0,0,1,6.994,13H.121a4.3,4.3,0,0,0,1.328,2.32l7.99,7.707a3.82,3.82,0,0,0,2.55.969,3.9,3.9,0,0,0,2.6-1l7.936-7.633A4.373,4.373,0,0,0,23.89,13ZM6.105,3.447A1,1,0,0,0,7.9,2.553l-1-2a1,1,0,1,0-1.79.894Z" />
          </svg>
          Projects
        </Button>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        {works.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
      </div>
    </section>
  );
}
