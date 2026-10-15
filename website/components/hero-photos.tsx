import Image from "next/image";

/** Swap `src` for an approved event photo. Crop is handled with object-cover. */
export type HeroPhoto = {
  src?: string;
  alt: string;
  position?: string;
  priority?: boolean;
};

const frames = [
  { className: "col-span-2 aspect-[3/2]", sizes: "(min-width: 1024px) 38vw, 100vw" },
  { className: "aspect-[3/2]", sizes: "(min-width: 1024px) 18vw, 45vw" },
  { className: "aspect-[3/2]", sizes: "(min-width: 1024px) 18vw, 45vw" },
] as const;

export function HeroPhotos({ photos }: { photos: readonly [HeroPhoto, HeroPhoto, HeroPhoto] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {frames.map((frame, index) => (
        <PhotoFrame key={frame.className + index} photo={photos[index]} {...frame} />
      ))}
    </div>
  );
}

/** Landscape + portrait over portrait + landscape, as on the home hero. */
const mosaicFrames = [
  { className: "col-span-5", sizes: "(min-width: 1024px) 32vw, 70vw" },
  { className: "col-span-2", sizes: "(min-width: 1024px) 13vw, 30vw" },
  { className: "col-span-2", sizes: "(min-width: 1024px) 13vw, 30vw" },
  { className: "col-span-5", sizes: "(min-width: 1024px) 32vw, 70vw" },
] as const;

export function HeroMosaic({
  photos,
}: {
  photos: readonly [HeroPhoto, HeroPhoto, HeroPhoto, HeroPhoto];
}) {
  return (
    <div className="grid aspect-6/5 grid-cols-7 grid-rows-2 gap-3">
      {mosaicFrames.map((frame, index) => (
        <PhotoFrame key={frame.className + index} photo={photos[index]} {...frame} />
      ))}
    </div>
  );
}

function PhotoFrame({
  photo,
  className,
  sizes,
}: {
  photo: HeroPhoto;
  className: string;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      <div aria-hidden className="absolute inset-0 bg-sage/20" />
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={photo.priority}
          sizes={sizes}
          className={`object-cover ${photo.position ?? "object-center"}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-pine">
          <PhotoMark />
          <span className="text-sm tracking-[-0.02em]">Photo</span>
        </div>
      )}
    </div>
  );
}

function PhotoMark() {
  return (
    <svg aria-hidden width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-pine">
      <rect x="3.5" y="5.5" width="21" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="10" cy="11" r="1.6" fill="currentColor" />
      <path d="M6.5 19.5 11.5 14.5 15 17.5 18.5 13.5 21.5 16.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
