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
    <img
      alt={work.title}
      className="aspect-4/3 w-full cursor-pointer overflow-hidden rounded-md object-cover object-top"
      src={work.image}
    />
  );
}

export function WorksSection() {
  return (
    <section className="relative mt-12 flex flex-col before:absolute before:-inset-x-3 before:-top-3 before:border-border before:border-t before:border-dashed">
      <div className="flex flex-col gap-2">
        {works.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
      </div>
    </section>
  );
}
