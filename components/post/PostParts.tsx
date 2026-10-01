import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type ImgSrc = StaticImageData | string;

// Categories that already have a page in this project; everything else falls
// back to /category/<slug> so the link is ready once that page exists.
const CATEGORY_ROUTES: Record<string, string> = {
  "military aviation": "/militaryaviation",
  helicopters: "/helicopters",
  drones: "/drones",
  "global hotspots": "/globalhotspots",
  "aircraft carriers": "/aircraft-carriers",
  airshows: "/airshows",
  "f-104": "/f-104",
  "f-35": "/f-35",
  "italian air force": "/italian-air-force",
};

export function categoryHref(category: string) {
  const key = category.toLowerCase();
  return CATEGORY_ROUTES[key] ?? `/category/${key.replace(/\s+/g, "-")}`;
}

/** Image box that keeps its size (and a grey placeholder) when no src is set yet. */
export function Thumb({
  src,
  alt,
  href,
  className = "",
  sizes,
  preload,
}: {
  src?: ImgSrc;
  alt: string;
  href: string;
  className?: string;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative block overflow-hidden bg-[#f2f2f2] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      ) : null}
    </Link>
  );
}

export function CategoryBadge({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  return (
    <Link href={categoryHref(category)} className={`ta-cat ${className}`}>
      {category}
    </Link>
  );
}

export function Avatar({ src, name }: { src?: ImgSrc; name: string }) {
  return (
    <span className="relative block h-[22px] w-[22px] shrink-0 overflow-hidden rounded-full bg-[#e5e5e5]">
      {src ? (
        <Image src={src} alt={name} fill sizes="22px" className="object-cover" />
      ) : null}
    </span>
  );
}

export function PostMeta({
  author,
  date,
  className = "",
  dateColor,
}: {
  author?: { name: string; avatar?: ImgSrc };
  date: string;
  className?: string;
  dateColor?: string;
}) {
  return (
    <div className={`ta-meta ${className}`}>
      {author ? (
        <span className="ta-meta-author">
          <Avatar src={author.avatar} name={author.name} />
          <Link href="#">{author.name}</Link>
        </span>
      ) : null}
      <time style={dateColor ? { color: dateColor } : undefined}>{date}</time>
    </div>
  );
}

export function ReadMore({ href, className = "" }: { href: string; className?: string }) {
  return (
    <Link href={href} className={`ta-readmore ${className}`}>
      <span>Read More</span>
      <svg
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M1 4.5h9M6.5 1 10 4.5 6.5 8" />
      </svg>
    </Link>
  );
}
