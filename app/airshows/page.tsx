import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/Airshows/AS1.jpg";
import image2 from "@/public/Airshows/AS2.webp";
import image3 from "@/public/Airshows/AS3.jpg";
import image4 from "@/public/Airshows/AS4.jpg";
import image5 from "@/public/Airshows/AS5.jpg";
import image6 from "@/public/Airshows/AS6.jpg";
import image7 from "@/public/Airshows/AS7.jpg";
import image8 from "@/public/Airshows/AS8.jpg";
import image9 from "@/public/Airshows/AS9.jpg";
import image10 from "@/public/Airshows/AS10.webp";
import image11 from "@/public/Airshows/AS11.webp";
import image12 from "@/public/Airshows/AS12.webp";
import image13 from "@/public/Airshows/AS13.webp";

/* ------------------------------------------------------------------ */
/* Types + data (replace with your CMS / API later)                    */
/* ------------------------------------------------------------------ */

type Author = CatAuthor;
type Post = CatPost;

const howard: Author = { name: "Howard German", href: "/author/howardgerman" };
const kai: Author = { name: "Kai Greet", href: "/author/kaigreet" };

const airshowsTag = { label: "Airshows", href: "/airshows" };

/* Hero: single verified post (live page shows carousel dots, but only
   this slide's content is confirmed -- add more slides once you have
   the other posts' real title/excerpt/author/date). */
const hero: Post = {
  id: "secaf-oshkosh-interview",
  category: airshowsTag,
  title: "Engineering the Future Force: Exclusive Interview with the Secretary of the U.S. Air Force",
  excerpt:
    "In an exclusive interview at EAA AirVenture Oshkosh 2026, the Secretary of the Air Force discusses modernization, readiness, pilot training,…",
  href: "/articles/secaf-exclusive-interview-oshkosh-2026",
  date: "August 8, 2026",
  image: image1,
  imageAlt: "Secretary of the Air Force Interview",
  author: howard,
};

/* Two static side cards (image + overlaid title + byline, no excerpt) */
const heroSide: Post[] = [
  {
    id: "hawk-t1s-red-arrows-seven-jet",
    title: "Ageing Hawk T1s Force Red Arrows Down to Seven Jet Formation for Most Displays",
    href: "/articles/hawk-t1s-red-arrows-seven-jet-formation",
    date: "May 24, 2026",
    image: image2,
    imageAlt: "Red Arrows Hawk T1s",
    author: kai,
  },
  {
    id: "raf-red-arrows-new-pilots-2026",
    title: "RAF Red Arrows Introduce New Pilots for 2026 Season",
    href: "/articles/raf-red-arrows-new-pilots-2026-season",
    date: "November 5, 2025",
    image: image3,
    imageAlt: "RAF Red Arrows new pilots",
    author: kai,
  },
];

/* Latest Airshows News */
const latest: Post[] = [
  {
    id: "wings-of-legacy-nas-oceana",
    category: { label: "F-35C", href: "/tag/f-35c" },
    title: "Wings of Legacy: Naval Aviators Reflect on 250 Years of U.S. Naval Heritage at NAS Oceana Air Show",
    excerpt: "At the recent 2025 Oceana Air Show, Navy pilots shared stories that…",
    href: "/articles/wings-of-legacy-nas-oceana-air-show",
    date: "October 26, 2025",
    image: image4,
    imageAlt: "F-35C at NAS Oceana Air Show",
    author: howard,
  },
  {
    id: "riat-fighter-meet-2026",
    category: { label: "Airshow", href: "/tag/airshow" },
    title: "Royal International Air Tattoo Announces Fighter Meet Theme for 2026",
    excerpt: "Organisers of RIAT, the UK's most famous airshow, have announced the…",
    href: "/articles/riat-announces-fighter-meet-theme-2026",
    date: "October 25, 2025",
    image: image5,
    imageAlt: "RIAT Fighter Meet 2026",
    author: kai,
  },
  {
    id: "ea-37b-pilot-interview",
    category: { label: "Compass Call", href: "/tag/compass-call" },
    title: "No Smoke Trails, Just Silence: Exclusive EA-37B Pilot Interview",
    excerpt: "While the aerobatic acts thrilled the crowd at the recent Joint Base…",
    href: "/articles/ea-37b-compass-call-pilot-interview",
    date: "October 9, 2025",
    image: image6,
    imageAlt: "EA-37B Compass Call",
    author: howard,
  },
  {
    id: "u-2-pilot-interviews-oshkosh",
    category: { label: "EAA AirVenture", href: "/tag/eaa-airventure" },
    title: "Dragon Lady at Oshkosh: Exclusive U-2 Pilot Interviews Mark 70th Anniversary and Historic Homecoming",
    excerpt: "Two U-2 pilots, including a Wisconsin native, share rare insights on the…",
    href: "/articles/u-2-dragon-lady-oshkosh-pilot-interviews",
    date: "August 3, 2025",
    image: image7,
    imageAlt: "U-2 Dragon Lady at Oshkosh",
    author: howard,
  },
  {
    id: "wisconsin-ang-hq-16-sam-replica",
    category: { label: "EAA AirVenture", href: "/tag/eaa-airventure" },
    title: "Wisconsin ANG Shows Off Towable HQ-16 SAM Replica at EAA AirVenture Oshkosh",
    excerpt: "Part of the U.S. Military contingent at this year's EAA AirVenture event,…",
    href: "/articles/wisconsin-ang-hq-16-sam-replica-oshkosh",
    date: "July 30, 2025",
    image: image8,
    imageAlt: "Wisconsin ANG HQ-16 SAM replica",
    author: kai,
  },
  {
    id: "red-arrows-riat-2025-saf",
    category: { label: "BAE Hawk", href: "/tag/bae-hawk" },
    title: "Red Arrows Display at RIAT 2025 Will Use Sustainable Aviation Fuel",
    excerpt: "For the first time ever during a display, the RAF Red Arrows…",
    href: "/articles/red-arrows-riat-2025-sustainable-aviation-fuel",
    date: "July 9, 2025",
    image: image9,
    imageAlt: "Red Arrows over water",
    author: kai,
  },
];

/* Sidebar "Latest News" - site-wide latest, tag + title only */
const sidebarLatest = [
  {
    title: "Two Naval Aviators Eject Following Mishap on USS Eisenhower",
    href: "/articles/two-naval-aviators-eject-uss-eisenhower",
    category: { label: "Aircraft Carriers", href: "/aircraft-carriers" },
    image: image10,
    imageAlt: "Two Naval Aviators Eject USS Eisenhower",
  },
  {
    title: "Is An SR-71 Blackbird Returning to Flight 27 Years Later?",
    href: "/articles/sr-71-blackbird-returning-to-flight",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image11,
    imageAlt: "SR-71 Blackbird",
  },
  {
    title: "Marine MV-22B Osprey Conducts First Sonobuoy Lot Acceptance Test",
    href: "/articles/marine-mv-22b-sonobuoy-lot-acceptance-test",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image12,
    imageAlt: "MV-22B Sonobuoy Lot Acceptance Test",
  },
  {
    title: "[Updated] 'Major Incident' Near RAF Fairford After Arrests Made Under Explosives Act",
    href: "/articles/major-incident-raf-fairford",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image13,
    imageAlt: "RAF Fairford Bomb Threat",
  },
];

export default function AirshowsPage() {
  return (
    <CategoryTemplate
      title="Airshows"
      parents={[{ label: "Military Aviation", href: "/militaryaviation" }]}
      slides={[hero]}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "44", "45"]}
    />
  );
}
