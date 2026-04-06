import { Button } from "@shared/components/ui/button";

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <svg
        className="cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
        fill="none"
        height="36"
        viewBox="0 0 512 512"
        width="36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="black" height="512" rx="180" width="512" />
        <g clipPath="url(#clip0_2_2)">
          <path
            d="M335.905 392.321C282.462 385.064 245.02 335.856 252.277 282.413C245.02 335.856 195.812 373.298 142.369 366.041L115.273 362.362L135.772 211.403C143.029 157.96 192.237 120.518 245.68 127.775L299.87 135.133C353.313 142.39 390.755 191.598 383.498 245.042L363 396L335.905 392.321Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_2">
            <rect
              fill="white"
              height="250"
              transform="translate(363 396) rotate(-172.267)"
              width="250"
            />
          </clipPath>
        </defs>
      </svg>

      <h1 className="mt-6 text-pretty font-medium text-xl tracking-tight sm:text-balance">
        Helping startups and enterprises to ship the products and brands
        globally.
      </h1>
      <p className="mt-4 text-pretty text-foreground/60 leading-relaxed">
        Successfully helped businesses to{" "}
        <span className="text-foreground italic font-medium">
          increased $5M+ in revenue
        </span>
        . We built softwares, websites, brands & systems{" "}
        <span className="italic text-foreground">
          that lift the profits, increase efficiencies and reduce the costs
        </span>
        .
      </p>
      <div className="mt-10 flex items-center gap-3">
        <Button
          asChild
          className="transition-all duration-300 hover:-translate-y-0.5"
          size="sm"
          variant="primary"
        >
          <a
            href="https://cal.com/nyomansunima/coined"
            rel="noopener"
            target="_blank"
          >
            <svg
              height={14}
              viewBox="0 0 24 24"
              width={14}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 1c-7.71 0-11 3.29-11 11s3.29 11 11 11 11-3.29 11-11-3.29-11-11-11zm5.305 8.539c-1.312 2.053-3.18 4.626-6.001 6.319-.324.195-.731.19-1.05-.013-1.52-.963-2.661-1.995-3.594-3.248-.33-.443-.238-1.069.205-1.399.442-.33 1.069-.237 1.398.205.674.905 1.488 1.679 2.536 2.405 2.16-1.46 3.644-3.507 4.819-5.346.299-.466.917-.602 1.381-.304.466.298.602.916.305 1.381z"
                fill="currentColor"
              />
            </svg>
            Book a call
          </a>
        </Button>
        <Button
          asChild
          className="transition-all duration-300 hover:-translate-y-0.5"
          size="sm"
          variant="secondary"
        >
          <a
            href="https://api.whatsapp.com/send?phone=6281330990903"
            rel="noopener"
            target="_blank"
          >
            <svg
              height="14"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.836,.028C9.364-.202,5.96,1.066,3.509,3.521,1.057,5.977-.211,9.378,.03,12.854c.44,6.354,6.052,11.146,13.053,11.146h5.917c2.757,0,5-2.243,5-5v-6.66C24,5.861,19.097,.454,12.836,.028Zm-1.836,12.972c0,2.206-1.794,4-4,4-.552,0-1-.447-1-1s.448-1,1-1c1.103,0,2-.897,2-2h-1.5c-.828,0-1.5-.672-1.5-1.5v-1.5c0-1.105,.895-2,2-2h1.5c.828,0,1.5,.672,1.5,1.5v3.5Zm7,0c0,2.206-1.794,4-4,4-.553,0-1-.447-1-1s.447-1,1-1c1.103,0,2-.897,2-2h-1.5c-.828,0-1.5-.672-1.5-1.5v-1.5c0-1.105,.895-2,2-2h1.5c.828,0,1.5,.672,1.5,1.5v3.5Z"
                fill="currentColor"
              />
            </svg>
            Chat now
          </a>
        </Button>
      </div>
    </section>
  );
}
