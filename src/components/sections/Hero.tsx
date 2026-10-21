import {
  TiltedGridHero,
  type TiltedGridImage,
} from "@/components/ui/tilted-grid-hero";

const textileImages: TiltedGridImage[] = [
  { src: "/slide1.jpg" },
  { src: "/slide2.jpg" },
  { src: "/slide3.jpg" },
  { src: "/slide4.jpg" },
  { src: "/slide5.jpg" },
  { src: "/slide6.jpg" },
];

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white text-neutral-950"
      aria-label="Hero"
      id="hero"
    >
      {/* Soft sage glow, faded at the edges so it has no hard seam against the nav */}
    <div
  aria-hidden="true"
  className="pointer-events-none absolute left-1/2 z-0"
  style={{
    top: "56px",
    width: "1100px",
    maxWidth: "90vw",
    height: "640px",
    transform: "translateX(-50%)",
    background:
      "radial-gradient(ellipse 60% 55% at 50% 40%, rgba(86,142,73,0.22) 0%, rgba(86,142,73,0.1) 45%, transparent 72%)",
    filter: "blur(10px)",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
  }}
/>

      <div className="relative z-10">
        <div
          className="mx-auto flex w-full max-w-[1440px] flex-col items-center"
          style={{
            paddingTop: "140px",
            paddingLeft: "clamp(20px, 4vw, 48px)",
            paddingRight: "clamp(20px, 4vw, 48px)",
          }}
        >
          <h1
            className="text-center w-full whitespace-nowrap"
            style={{
              fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
              fontWeight: 500,
              letterSpacing: "-3px",
              lineHeight: 1,
              fontSize: "clamp(38px, 8.3vw, 115px)",
            }}
          >
            <span style={{ color: "#302B2B" }}>TEXWORLD</span>{" "}
            <span style={{ color: "#568E49" }}>ASIA</span>
          </h1>

          <p
            className="mt-5 max-w-[1050px] text-center"
            style={{
              fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
              fontWeight: 400,
              color: "#111111",
              letterSpacing: "-0.2px",
              lineHeight: 1.3,
              fontSize: "clamp(11px, 1.9vw, 17px)",
            }}
          >
            YOUR TRUSTED PARTNER FOR SOURCING, PRODUCT
            <br className="hidden md:block" /> DEVELOPMENT &amp; QUALITY CONTROL
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-full bg-black text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-neutral-800"
              style={{ paddingLeft: "32px", paddingRight: "32px", paddingTop: "14px", paddingBottom: "14px" }}
            >
              Request a Quote
            </button>
            <button
              type="button"
              className="rounded-full border border-black bg-transparent text-xs font-medium uppercase tracking-[0.1em] text-black transition-colors duration-200 hover:bg-black hover:text-white"
              style={{ paddingLeft: "32px", paddingRight: "32px", paddingTop: "14px", paddingBottom: "14px" }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          className="w-full overflow-hidden h-[275px] sm:h-[298px] lg:h-[313px]"
          style={{ marginTop: "10px" }}
        >
          <TiltedGridHero
            images={textileImages}
            className="h-[460px] w-full sm:h-[520px] lg:h-[560px] -mt-[93px] sm:-mt-[111px] lg:-mt-[124px]"
            speed={4}
            tileHeight={38}
            aspectRatio={4 / 3}
            gap={4}
            axis={50}
            curve={74}
            fade={8}
          />
        </div>

        <div className="h-8 bg-white sm:h-12" />
      </div>
    </section>
  );
}