import * as React from "react";
import { cn } from "@/lib/utils";

const SLICES = 1;
const CAMERA = 1.6;
const MAX_WIDTH = 55;

function arc(bend: number) {
  return (
    (CAMERA - 1 + Math.cos(bend)) /
    (2 * CAMERA * Math.sin(bend))
  );
}

function measure(
  width: number,
  height: number,
  tile: number,
  aspect: number,
  gap: number,
  bend: number,
) {
  const h = Math.min(
    (tile / 100) * height,
    ((MAX_WIDTH / 100) * width) / aspect,
  );

  const radius = width * arc(bend);

  if (!(h > 0) || !(radius > 0)) {
    return { columns: 2, sweep: 0, unit: 0, limit: 0 };
  }

  const deg = (rad: number) => (rad * 180) / Math.PI;
  const unit = deg(h / radius);
  const pitch = (aspect + gap / 100) * unit;
  const limit = deg(bend) + (aspect * unit) / 2;

  const columns = Math.min(
    60,
    Math.max(2, Math.ceil((2 * limit) / pitch)),
  );

  const round = (n: number) => +n.toFixed(4);
  const sweep = round((columns * pitch) / 2);

  return {
    columns,
    sweep,
    unit: round(unit),
    limit: round(Math.min(sweep, limit)),
  };
}

export type TiltedGridImage = {
  src: string;
  alt?: string;
};

export type TiltedGridHeroProps = {
  images: TiltedGridImage[];
  speed?: number;
  tileHeight?: number;
  aspectRatio?: number;
  gap?: number;
  axis?: number;
  curve?: number;
  fade?: number;
  children?: React.ReactNode;
  className?: string;
};

export function TiltedGridHero({
  images,
  speed = 4,
  tileHeight = 26,
  aspectRatio = 16 / 9,
  gap = 6,
  axis = 56,
  curve = 80,
  fade = 12,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & TiltedGridHeroProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");

  const orbit = `tgh-o-${id}`;
  const tile = `tgh-t-${id}`;

  const safeAspect = aspectRatio > 0 ? aspectRatio : 16 / 9;
  const safeSpeed = Math.max(0.1, speed);
  const safeTileHeight = Math.max(1, Math.min(100, tileHeight));
  const safeGap = Math.max(0, gap);
  const safeFade = Math.max(0, Math.min(50, fade));
  const safeAxis = Math.max(0, Math.min(100, axis));

  const bend =
    (Math.max(5, Math.min(85, curve)) * Math.PI) / 180;

  const defaultLayout = measure(
    1200,
    560,
    safeTileHeight,
    safeAspect,
    safeGap,
    bend,
  );

  const [layout, setLayout] =
    React.useState<ReturnType<typeof measure>>(defaultLayout);

  const [shown, setShown] = React.useState<Record<number, number>>({});

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateLayout = (width: number, height: number) => {
      if (width <= 0 || height <= 0) return;

      const next = measure(
        width,
        height,
        safeTileHeight,
        safeAspect,
        safeGap,
        bend,
      );

      if (!(next.sweep > 0) || !(next.unit > 0)) return;

      setLayout((previous) =>
        previous.columns === next.columns &&
        previous.sweep === next.sweep &&
        previous.unit === next.unit &&
        previous.limit === next.limit
          ? previous
          : next,
      );
    };

    updateLayout(
      element.getBoundingClientRect().width,
      element.getBoundingClientRect().height,
    );

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;

      updateLayout(
        entry.contentRect.width,
        entry.contentRect.height,
      );
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [safeTileHeight, safeAspect, safeGap, bend]);

  React.useEffect(() => {
    const preloadedImages: HTMLImageElement[] = [];

    images.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
      preloadedImages.push(image);
    });

    return () => {
      preloadedImages.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, [images]);

  const { columns, sweep, unit, limit } = layout;

  const u = (n: number) =>
    `min(${(n * safeTileHeight).toFixed(4)}cqh, ${(
      (n * MAX_WIDTH) /
      safeAspect
    ).toFixed(4)}cqw)`;

  const r = 100 * arc(bend);
  const radius = `${r.toFixed(3)}cqw`;

  const turn = (degrees: number) =>
    `translateZ(${radius}) rotateY(${degrees.toFixed(
      4,
    )}deg) translateZ(-${radius})`;

  const safeSweep = Math.max(sweep, 0.001);

  const hide = Math.max(
    0,
    Math.min(
      49.999,
      ((sweep - limit) / (2 * safeSweep)) * 100,
    ),
  );

  const visibleStart = Math.min(99.999, hide + 0.001);
  const visibleEnd = Math.max(0.001, 100 - hide - 0.001);

  const css = `
    @keyframes ${orbit} {
      from {
        transform: ${turn(-sweep)};
      }
      to {
        transform: ${turn(sweep)};
      }
    }

    @keyframes ${orbit}-visibility {
      0%, ${hide}%, ${100 - hide}%, 100% {
        visibility: hidden;
      }

      ${visibleStart}%, ${visibleEnd}% {
        visibility: visible;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .${tile} {
        animation-play-state: paused !important;
      }
    }
  `;

  const share = safeAspect / SLICES;
  const duration = Math.max(columns * safeSpeed, 0.1);

  const mask = `linear-gradient(
    90deg,
    transparent 0%,
    #000 ${safeFade}%,
    #000 ${100 - safeFade}%,
    transparent 100%
  )`;

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
      style={{
        containerType: "size",
        ...props.style,
      }}
    >
      <style>{css}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          perspective: `${(r * CAMERA).toFixed(3)}cqw`,
          perspectiveOrigin: `50% ${safeAxis}%`,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        {Array.from({ length: columns }, (_, index) => {
          const first = columns - 1 - index;

          const image =
            images.length > 0
              ? images[
                  (((shown[index] ?? first) % images.length) +
                    images.length) %
                    images.length
                ]
              : undefined;

          const delay = -index * safeSpeed;

          return (
            <div
              key={index}
              className={cn(tile, "absolute")}
              style={{
                left: `calc(50% - ${u(safeAspect / 2)})`,
                top: `calc(${safeAxis}% - ${u(0.5)})`,
                width: u(safeAspect),
                height: u(1),
                transformStyle: "preserve-3d",
                animation: `
                  ${orbit} ${duration}s linear ${delay}s infinite,
                  ${orbit}-visibility ${duration}s linear ${delay}s infinite
                `,
              }}
              onAnimationIteration={(event) => {
                if (event.animationName !== orbit) return;

                const lap = Math.round(
                  event.elapsedTime / duration,
                );

                const next = lap * columns + first;

                setShown((previous) =>
                  previous[index] === next
                    ? previous
                    : { ...previous, [index]: next },
                );
              }}
            >
              {Array.from({ length: SLICES }, (_, sliceIndex) => (
                <div
                  key={sliceIndex}
                  className={cn(
                    "absolute top-0 overflow-hidden bg-muted",
                    sliceIndex === 0 && "rounded-l-lg",
                    sliceIndex === SLICES - 1 && "rounded-r-lg",
                  )}
                  style={{
                    left: u((safeAspect - share) / 2),
                    width:
                      sliceIndex === SLICES - 1
                        ? u(share)
                        : `calc(${u(share)} + 1px)`,
                    height: u(1),
                    transform: turn(
                      (safeAspect / 2 -
                        (sliceIndex + 0.5) * share) *
                        unit,
                    ),
                  }}
                >
                  {image && (
                    <img
                      src={image.src}
                      alt=""
                      draggable={false}
                      loading="eager"
                      className="absolute top-0 max-w-none object-cover"
                      style={{
                        left: u(-sliceIndex * share),
                        width: u(safeAspect),
                        height: u(1),
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {children}
    </div>
  );
}

export default TiltedGridHero;