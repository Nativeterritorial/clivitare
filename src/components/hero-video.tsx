"use client";

type Props = {
  src: string;
  poster: string;
  className?: string;
};

export function HeroVideo({ src, poster, className = "" }: Props) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
