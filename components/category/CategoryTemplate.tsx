"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { Avatar, Thumb, type ImgSrc } from "@/components/post/PostParts";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface CatAuthor {
  name: string;
  href?: string;
  avatar?: ImgSrc;
}

export interface CatPost {
  id: string;
  title: string;
  excerpt?: string;
  href: string;
  date: string;
  image?: ImgSrc;
  imageAlt: string;
  category?: { label: string; href: string };
  author: CatAuthor;
  coAuthor?: CatAuthor;
}

export interface SidebarPost {
  title: string;
  href: string;
  image?: ImgSrc;
  imageAlt: string;
  category: { label: string; href: string };
}

export interface CategoryTemplateProps {
  title: string;
  /** Parent crumbs between "Home" and the current page, e.g. Military Aviation. */
  parents?: { label: string; href: string }[];
  findMore?: { label: string; href: string }[];
  slides: CatPost[];
  side: CatPost[];
  latest: CatPost[];
  sidebarLatest: SidebarPost[];
  workImage?: ImgSrc;
  /** Page numbers shown in the pagination bar after "1". */
  pages?: string[];
}

const AUTOPLAY_INTERVAL_MS = 6000;

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

/** "/ Heading /" with the red slashes used on archive pages. */
function SlashHeading({ children, size }: { children: ReactNode; size: "lg" | "sm" }) {
  return (
    <h3
      className={`flex items-center gap-[6px] font-encode font-bold text-[#282828] ${
        size === "lg" ? "text-[22px] leading-[22px]" : "text-[16px] leading-[16px]"
      }`}
    >
      <span className="text-ta-red">/</span>
      <span>{children}</span>
      <span className="text-ta-red">/</span>
    </h3>
  );
}

function Byline({ post, dark }: { post: CatPost; dark?: boolean }) {
  const nameClass = dark ? "text-white" : "text-[#282828]";
  const dateClass = dark ? "text-[#dddddd]" : "text-ta-meta";
  const authors = post.coAuthor ? [post.author, post.coAuthor] : [post.author];
  return (
    <div className="ta-meta">
      {authors.map((a) => (
        <span key={a.name} className={`ta-meta-author ${nameClass}`}>
          <Avatar src={a.avatar} name={a.name} />
          <Link href={a.href ?? "#"}>{a.name}</Link>
        </span>
      ))}
      <time className={dateClass}>{post.date}</time>
    </div>
  );
}

function Cat({ category, large }: { category: { label: string; href: string }; large?: boolean }) {
  return (
    <Link
      href={category.href}
      className={`ta-cat ${large ? "!h-[28px] !px-[13.8px] !py-[8.05px] !text-[11.5px] !leading-[11.5px]" : ""}`}
    >
      {category.label}
    </Link>
  );
}

function AdSlot() {
  return (
    <div className="my-[50px] flex h-[250px] items-center justify-center bg-[#f7f7f7]">
      <span className="font-encode text-[11px] uppercase tracking-[1px] text-[#aaa]">
        Advertisement
      </span>
    </div>
  );
}

const OVERLAY_TALL =
  "linear-gradient(to top, rgb(25,28,32) 0px, rgba(25,28,32,0.95) calc(100% - 150px), rgba(25,28,32,0) 100%)";
const OVERLAY_SMALL =
  "linear-gradient(to top, rgb(25,28,32) 0px, rgba(25,28,32,0.95) 50%, rgba(25,28,32,0) 100%)";

function OverlayImage({ post, sizes, preload }: { post: CatPost; sizes: string; preload?: boolean }) {
  return (
    <Link href={post.href} className="absolute inset-0 block bg-[#2b2f35]" tabIndex={-1}>
      {post.image ? (
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      ) : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Top area: big slider + two stacked overlay cards                    */
/* ------------------------------------------------------------------ */

function HighlightSlider({ slides }: { slides: CatPost[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      AUTOPLAY_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, [active, slides.length]);

  return (
    <div className="relative h-[420px] overflow-hidden rounded-[3px] sm:h-[492px] lg:w-[746px] lg:shrink-0">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {slides.map((post, index) => (
          <article
            key={post.id}
            aria-hidden={index !== active}
            className="relative h-full w-full shrink-0"
          >
            <OverlayImage
              post={post}
              sizes="(min-width: 1024px) 746px, 100vw"
              preload={index === 0}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 px-[25px] pb-[25px] pt-[100px]"
              style={{ backgroundImage: OVERLAY_TALL }}
            >
              <div className="pointer-events-auto">
                {post.category ? <Cat category={post.category} large /> : null}
                <h2 className="mt-[11px] font-encode text-[30px] font-bold leading-[38px] sm:text-[42px] sm:leading-[52.5px]">
                  <Link href={post.href} className="text-white transition-opacity hover:opacity-70">
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt ? (
                  <p className="mt-3 line-clamp-2 max-w-[696px] font-oxygen text-[14px] leading-[23.8px] text-[#dddddd]">
                    {post.excerpt}
                  </p>
                ) : null}
                <div className="mt-[13px]">
                  <Byline post={post} dark />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {slides.length > 1 ? (
        <div className="absolute right-[15px] top-[15px] flex">
          {slides.map((post, index) => (
            <button
              key={post.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show story ${index + 1}`}
              aria-current={index === active}
              className={`flex h-4 w-4 items-center justify-center transition-opacity ${
                index === active ? "opacity-100" : "opacity-40 hover:opacity-100"
              }`}
            >
              <span className="block h-[7px] w-[7px] rounded-full bg-white" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function SideOverlayCard({ post }: { post: CatPost }) {
  return (
    <article className="relative h-[238px] overflow-hidden rounded-[3px]">
      <OverlayImage post={post} sizes="(min-width: 1024px) 366px, 100vw" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 px-5 py-[25px]"
        style={{ backgroundImage: OVERLAY_SMALL }}
      >
        <div className="pointer-events-auto">
          <h3 className="font-encode text-[22px] font-bold leading-[28.6px]">
            <Link href={post.href} className="text-white transition-opacity hover:opacity-70">
              {post.title}
            </Link>
          </h3>
          <div className="mt-[13px]">
            <Byline post={post} dark />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Latest list + sidebar                                               */
/* ------------------------------------------------------------------ */

function ListItem({ post }: { post: CatPost }) {
  return (
    <article className="flex flex-col-reverse gap-5 sm:flex-row sm:justify-between sm:gap-[30px]">
      <div className="min-w-0 sm:w-[472px]">
        <h3 className="font-encode text-[20px] font-bold leading-[26px] sm:text-[22px] sm:leading-[28.6px]">
          <Link href={post.href} className="text-[#282828] transition-colors duration-300 hover:text-ta-yellow">
            {post.title}
          </Link>
        </h3>
        {post.excerpt ? (
          <p className="ta-excerpt mt-4 line-clamp-2 text-[14px] leading-[23.8px]">{post.excerpt}</p>
        ) : null}
        <div className="mt-4">
          <Byline post={post} />
        </div>
      </div>
      <div className="relative sm:w-[305px] sm:shrink-0">
        <Thumb
          src={post.image}
          alt={post.imageAlt}
          href={post.href}
          sizes="(min-width: 640px) 305px, 100vw"
          className="aspect-[305/183] w-full rounded-[3px]"
        />
        {post.category ? (
          <div className="absolute bottom-[5px] left-[-5px]">
            <Cat category={post.category} />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Pagination({ pages }: { pages: string[] }) {
  const base =
    "flex h-[34px] items-center justify-center rounded-[7px] border-[0.8px] px-[10px] font-encode text-[12px] font-bold leading-[20.4px]";
  return (
    <nav aria-label="Pagination" className="mt-[50px] flex flex-wrap justify-center gap-[5px]">
      <span className={`${base} border-ta-red bg-ta-red text-white`}>1</span>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`dots-${i}`} className={`${base} border-transparent text-[#282828]`}>
            …
          </span>
        ) : (
          <Link
            key={p}
            href="#"
            className={`${base} border-[#88888812] text-[#282828] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-colors hover:border-ta-red hover:bg-ta-red hover:text-white`}
          >
            {p}
          </Link>
        ),
      )}
      <Link
        href="#"
        aria-label="Next page"
        className={`${base} !px-[15px] border-[#88888812] text-[#282828] shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-colors hover:border-ta-red hover:bg-ta-red hover:text-white`}
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M1 1l5 5-5 5" />
        </svg>
      </Link>
    </nav>
  );
}

const FOLLOWERS: { name: string; count: string; unit: string; cta: string; href: string; color: string; icon: ReactNode }[] = [
  {
    name: "Facebook",
    count: "188k",
    unit: "Followers",
    cta: "Like",
    href: "https://www.facebook.com/TheAviationist",
    color: "#89abfc",
    icon: <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V8.5H8.2v3.2h2.6V21.5H14v-9.8h2.6l.4-3.2H14z" fill="currentColor" />,
  },
  {
    name: "Twitter",
    count: "107k",
    unit: "Followers",
    cta: "Follow",
    href: "https://x.com/TheAviationist",
    color: "#00151c",
    icon: <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z" fill="currentColor" />,
  },
  {
    name: "Instagram",
    count: "285k",
    unit: "Followers",
    cta: "Follow",
    href: "https://www.instagram.com/theaviationist/",
    color: "#7e40b6",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </g>
    ),
  },
  {
    name: "YouTube",
    count: "11.3k",
    unit: "Subscribers",
    cta: "Subscribe",
    href: "https://www.youtube.com/c/TheAviationistOfficial",
    color: "#ef464b",
    icon: <path d="M22 8.2c-.2-1.6-1-2.7-2.7-2.9C16.6 5 12 5 12 5s-4.6 0-7.3.3C3 5.5 2.2 6.6 2 8.2 1.8 9.6 1.8 12 1.8 12s0 2.4.2 3.8c.2 1.6 1 2.7 2.7 2.9C7.4 19 12 19 12 19s4.6 0 7.3-.3c1.7-.2 2.5-1.3 2.7-2.9.2-1.4.2-3.8.2-3.8s0-2.4-.2-3.8zM10 15V9l5.2 3L10 15z" fill="currentColor" />,
  },
  {
    name: "Telegram",
    count: "",
    unit: "Telegram",
    cta: "Follow",
    href: "https://t.me/theaviationist/",
    color: "#649fdf",
    icon: <path d="M21.5 3.5 2.6 10.8c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.9 5.7c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.3-1.5zM8.8 13.6l9.4-5.9c.5-.3.9-.1.5.2l-8 7.2-.3 3.3-1.6-4.8z" fill="currentColor" />,
  },
  {
    name: "LinkedIn",
    count: "9.9k",
    unit: "Followers",
    cta: "Follow",
    href: "https://www.linkedin.com/company/theaviationist",
    color: "#007bb6",
    icon: <path d="M5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z" fill="currentColor" />,
  },
];

function Sidebar({ sidebarLatest, workImage }: { sidebarLatest: SidebarPost[]; workImage?: ImgSrc }) {
  return (
    <aside className="lg:w-[373px] lg:shrink-0">
      {/* Stay Connected */}
      <section>
        <div className="pl-3">
          <SlashHeading size="sm">Stay Connected</SlashHeading>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-[5px]">
          {FOLLOWERS.map((f) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[73px] items-start gap-[3px] rounded-[5px] border-[0.8px] border-[#88888826] px-[7px] py-3 transition-shadow hover:shadow-[0_3px_12px_rgba(0,0,0,0.08)]"
            >
              <span className="flex h-[47px] w-[42px] shrink-0 items-center justify-center" style={{ color: f.color }}>
                <svg viewBox="0 0 24 24" className="h-[28px] w-[28px]" aria-hidden="true">
                  {f.icon}
                </svg>
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-encode text-[18px] font-semibold leading-[23.4px] text-[#282828]">
                  {f.count ? `${f.count} ` : ""}
                  {f.unit}
                </span>
                <span className="mt-[7px] font-encode text-[16.56px] leading-[16.56px] text-ta-meta">
                  {f.cta}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="mt-10 p-[10px]">
        <div className="pl-3">
          <SlashHeading size="sm">Latest News</SlashHeading>
        </div>
        <div className="mt-5 flex flex-col gap-[25px]">
          {sidebarLatest.map((p) => (
            <article key={p.href + p.title} className="flex gap-[15px]">
              <Thumb
                src={p.image}
                alt={p.imageAlt}
                href={p.href}
                sizes="100px"
                className="h-[75px] w-[100px] shrink-0 rounded-[3px]"
              />
              <div className="min-w-0">
                <Cat category={p.category} />
                <h4 className="mt-[9px] font-encode text-[14px] font-bold leading-[21px]">
                  <Link href={p.href} className="text-[#282828] transition-colors duration-300 hover:text-ta-yellow">
                    {p.title}
                  </Link>
                </h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Work With Us */}
      <section className="mt-[55px]">
        <div className="pl-3">
          <SlashHeading size="sm">Work With Us</SlashHeading>
        </div>
        <Link
          href="/work-with-us"
          className="relative mt-5 block aspect-[373/187] w-full overflow-hidden bg-[#f2f2f2]"
        >
          {workImage ? (
            <Image src={workImage} alt="Work with us" fill sizes="373px" className="object-cover" />
          ) : null}
        </Link>
      </section>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Page template                                                       */
/* ------------------------------------------------------------------ */

export default function CategoryTemplate({
  title,
  parents = [],
  findMore,
  slides,
  side,
  latest,
  sidebarLatest,
  workImage,
  pages = ["2", "3", "…"],
}: CategoryTemplateProps) {
  return (
    <div className="w-full bg-white">
      {/* Archive header with dotted pattern */}
      <header className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(rgb(40,40,40) 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-10 pt-10">
          <nav
            aria-label="Breadcrumb"
            className="font-encode text-[13px] leading-[19.5px] text-[#282828]"
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {parents.map((p) => (
              <Fragment key={p.href}>
                <span className="mx-[6px]">&gt;</span>
                <Link href={p.href} className="hover:underline">
                  {p.label}
                </Link>
              </Fragment>
            ))}
            <span className="mx-[6px]">&gt;</span>
            <span>{title}</span>
          </nav>

          <h1 className="mt-5 font-encode text-[34px] font-bold leading-[42px] text-[#282828] sm:text-[40px] sm:leading-[48px]">
            {title}
          </h1>

          {findMore && findMore.length > 0 ? (
            <div className="mt-5 flex flex-wrap items-center gap-x-[1px]">
              <span className="mr-[4px] flex items-center gap-[4px] font-oxygen text-[14.4px] leading-[24.48px] text-ta-red">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M4 12v8h16v-8M16 6l-4-4-4 4M12 2v14" />
                </svg>
                Find More:
              </span>
              {findMore.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="p-1 font-encode text-[14.4px] font-bold leading-[21.6px] text-[#282828] transition-colors hover:text-ta-red"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </header>

      {/* Highlight area */}
      <section className="mx-auto max-w-[1140px] px-4 pb-[6px] pt-[7px] lg:px-[7px]">
        <div className="flex flex-col gap-[14px] lg:flex-row">
          <HighlightSlider slides={slides} />
          <div className="flex flex-col gap-[14px] lg:w-[366px] lg:shrink-0">
            {side.map((post) => (
              <SideOverlayCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="h-[60px]" />

      {/* Latest list + sidebar */}
      <div className="mx-auto mb-[50px] mt-[50px] flex max-w-[1280px] flex-col gap-[60px] px-5 lg:flex-row">
        <section className="min-w-0 lg:w-[807px]">
          <SlashHeading size="lg">Latest {title} News</SlashHeading>
          <div className="mt-[25px]">
            {latest.map((post, i) => (
              <Fragment key={post.id}>
                {i > 0 && i % 2 === 0 ? <AdSlot /> : i > 0 ? <div className="h-10" /> : null}
                <ListItem post={post} />
              </Fragment>
            ))}
            <AdSlot />
          </div>
          <Pagination pages={pages} />
        </section>

        <Sidebar sidebarLatest={sidebarLatest} workImage={workImage} />
      </div>
    </div>
  );
}
