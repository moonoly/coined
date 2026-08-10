export function ClientSection() {
  return (
    <section className="relative mt-24 flex flex-col before:absolute before:-inset-x-3 before:-top-3 before:border-border before:border-t before:border-dashed">
      <span className="inline-flex select-none items-center gap-1 text-foreground/40 text-sm">
        Our clients
      </span>

      <h2 className="mt-3 text-balance text-3xl tracking-tight">
        The brands
        <br />
        work with us.
      </h2>
      <div className="relative mt-6 grid grid-cols-3 gap-px before:absolute before:inset-4 before:bg-border [&_svg]:text-foreground/60">
        <div
          className="group flex h-20 cursor-pointer items-center justify-center bg-background"
          data-cuelume-hover="tick"
        >
          <svg
            className="size-8 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Cloudflare</title>
            <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
          </svg>
        </div>
        <div
          className="group flex h-20 cursor-pointer items-center justify-center bg-background"
          data-cuelume-hover="tick"
        >
          <svg
            className="size-8 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>AdonisJS</title>
            <path d="M0 12c0 9.68 2.32 12 12 12s12-2.32 12-12S21.68 0 12 0 0 2.32 0 12Zm4.84 2.492 3.762-8.555C9.238 4.498 10.46 3.716 12 3.716c1.54 0 2.762.781 3.398 2.223l3.762 8.554c.172.418.32.953.32 1.418 0 2.125-1.492 3.617-3.617 3.617-.726 0-1.3-.183-1.883-.37-.597-.192-1.203-.387-1.98-.387-.77 0-1.39.195-1.996.386-.59.188-1.168.371-1.867.371-2.125 0-3.617-1.492-3.617-3.617 0-.465.148-1 .32-1.418ZM12 7.43l-3.715 8.406c1.102-.512 2.371-.758 3.715-.758 1.297 0 2.613.246 3.664.758Z" />
          </svg>
        </div>
        <div
          className="group flex h-20 cursor-pointer items-center justify-center bg-background"
          data-cuelume-hover="tick"
        >
          <svg
            className="size-8 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>2FAS</title>
            <path d="M12 0c-.918 0-1.833.12-2.72.355L4.07 1.748a2.64 2.64 0 0 0-1.96 2.547v9.115a7.913 7.913 0 0 0 3.552 6.606l5.697 3.765a1.32 1.32 0 0 0 1.467-.008l5.572-3.752a7.931 7.931 0 0 0 3.493-6.57V4.295a2.638 2.638 0 0 0-1.961-2.547L14.72.355A10.594 10.594 0 0 0 12 0ZM7.383 5.4h9.228c.726 0 1.32.594 1.32 1.32 0 .734-.587 1.32-1.32 1.32H7.383c-.727 0-1.32-.593-1.32-1.32 0-.726.593-1.32 1.32-1.32zM7.38 9.357h3.299c.727 0 1.32.595 1.32 1.32a1.32 1.32 0 0 1-1.318 1.32H7.38c-.726 0-1.32-.592-1.32-1.32 0-.725.594-1.32 1.32-1.32zm0 3.96c.727 0 1.32.593 1.32 1.32 0 .727-.586 1.318-1.32 1.318-.726 0-1.32-.592-1.32-1.318 0-.727.594-1.32 1.32-1.32z" />
          </svg>
        </div>
        <div
          className="group flex h-20 cursor-pointer items-center justify-center bg-background"
          data-cuelume-hover="tick"
        >
          <svg
            className="size-8 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
            fill="currentColor"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Aircall</title>
            <path d="M23.451 5.906a6.978 6.978 0 0 0-5.375-5.39C16.727.204 14.508 0 12 0S7.273.204 5.924.516a6.978 6.978 0 0 0-5.375 5.39C.237 7.26.034 9.485.034 12s.203 4.74.515 6.094a6.978 6.978 0 0 0 5.375 5.39C7.273 23.796 9.492 24 12 24s4.727-.204 6.076-.516a6.978 6.978 0 0 0 5.375-5.39c.311-1.354.515-3.578.515-6.094 0-2.515-.203-4.74-.515-6.094zm-5.873 12.396l-.003.001c-.428.152-1.165.283-2.102.377l-.147.014a.444.444 0 0 1-.45-.271 1.816 1.816 0 0 0-1.296-1.074c-.351-.081-.928-.134-1.58-.134s-1.229.053-1.58.134a1.817 1.817 0 0 0-1.291 1.062.466.466 0 0 1-.471.281 8 8 0 0 0-.129-.012c-.938-.094-1.676-.224-2.105-.377l-.003-.001a.76.76 0 0 1-.492-.713c0-.032.003-.066.005-.098.073-.979.666-3.272 1.552-5.89C8.5 8.609 9.559 6.187 10.037 5.714a1.029 1.029 0 0 1 .404-.26l.004-.002c.314-.106.892-.178 1.554-.178.663 0 1.241.071 1.554.178l.005.002a1.025 1.025 0 0 1 .405.26c.478.472 1.537 2.895 2.549 5.887.886 2.617 1.479 4.91 1.552 5.89.002.032.005.066.005.098a.76.76 0 0 1-.491.713z" />
          </svg>
        </div>
        <div
          className="group flex h-20 cursor-pointer items-center justify-center bg-background"
          data-cuelume-hover="tick"
        >
          <svg
            className="size-8 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
            fill="currentColor"
            height="32"
            viewBox="0 0 32 32"
            width="32"
          >
            <g clipPath="url(#a)">
              <path
                clipRule="evenodd"
                d="M32 16c0-8.836-7.164-16-16-16S0 7.164 0 16c0 8.837 7.164 16 16 16s16-7.163 16-16ZM13.063 6.989c-.101.199-.101.459-.101.98v4.107c0 .13 0 .195.017.256a.464.464 0 0 0 .07.148c.036.05.087.092.188.174l1.079.876c.121.099.182.148.204.208.02.052.02.11 0 .162-.022.059-.083.108-.204.207l-1.08.877c-.1.082-.15.123-.187.173a.463.463 0 0 0-.07.149c-.017.06-.017.125-.017.255v8.47c0 .521 0 .782.101.98a.93.93 0 0 0 .407.407c.198.101.459.101.98.101h3.1c.521 0 .781 0 .98-.101a.93.93 0 0 0 .407-.407c.101-.198.101-.459.101-.98v-4.107c0-.13 0-.195-.016-.255a.465.465 0 0 0-.071-.149 1.019 1.019 0 0 0-.188-.174l-1.079-.876c-.121-.099-.182-.148-.204-.208a.232.232 0 0 1 0-.161c.022-.06.083-.11.204-.208l1.08-.877c.1-.081.15-.122.187-.173a.466.466 0 0 0 .07-.149c.017-.06.017-.125.017-.255V7.97c0-.521 0-.781-.101-.98a.93.93 0 0 0-.407-.407c-.199-.101-.459-.101-.98-.101h-3.1c-.521 0-.781 0-.98.101a.93.93 0 0 0-.407.407Z"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path d="M0 0h32v32H0z" fill="#fff" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="group flex h-20 cursor-pointer items-center justify-center bg-background"
          data-cuelume-hover="tick"
        >
          <svg
            className="size-8 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
            fill="currentColor"
            height="1563"
            version="1.2"
            viewBox="0 0 1552 1563"
            width="1552"
          >
            <title>Dai-ichi Life Holdings</title>
            <defs>
              <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                <path d="m9158.84-617.61v3563.86h-9776.17v-3563.86z" />
              </clipPath>
            </defs>
            <g clipPath="url(#cp1)" id="Clip-Path: Clip-Path: Clip-Path">
              <g id="Clip-Path: Clip-Path">
                <g id="Clip-Path">
                  <g>
                    <path
                      d="m741.27 874.73c181.34 21.57 356.52 64.34 522.67 125.76 173.86-142.71 283.16-281.84 283.16-375.12 0-164.06-342.81-354.1-804.4-483.82 40.45 113.98 62.36 236.76 62.36 364.83 0 128.01-22.51 253.55-63.79 368.57z"
                      fill="currentColor"
                    />
                    <path
                      d="m1.1 3.91c104.68 281.83 150.3 580.84 136.98 877.53 106.72-15.08 216.02-23.06 326.91-23.06 93.62 0 185.75 5.67 276.45 16.35 41.27-115.02 63.84-239.07 63.84-368.57 0-129.5-21.91-250.85-62.36-364.83-227.29-63.9-484.75-113.37-741.6-137.64z"
                      fill="currentColor"
                    />
                    <path
                      d="m741.27 874.73q-136.05-16.35-276.5-16.35c-110.89 0-220.14 7.76-326.91 23.06-10.23 229.67-55.86 458.06-136.98 676.17 344.03-91.75 620.69-349.48 740.17-682.66z"
                      fill="currentColor"
                    />
                    <path
                      d="m1.1 1557.61c344.03-91.75 620.69-349.48 740.17-682.66 181.34 21.57 356.52 64.34 522.67 125.7-302.75 248.32-801.48 507.76-1262.84 557.18z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
