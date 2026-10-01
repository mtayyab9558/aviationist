import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/F-35/F35-1.webp";
import image2 from "@/public/F-35/F35-2.webp";
import image3 from "@/public/F-35/F35-3.webp";
import image4 from "@/public/F-35/F35-4.webp";
import image5 from "@/public/F-35/F35-5.webp";
import image6 from "@/public/F-35/F35-6.webp";
import image7 from "@/public/F-35/F35-7.webp";
import image8 from "@/public/F-35/F35-8.webp";
import image9 from "@/public/F-35/F35-9.webp";
import image10 from "@/public/Airshows/AS10.webp";
import image11 from "@/public/Airshows/AS11.webp";
import image12 from "@/public/Airshows/AS12.webp";
import image13 from "@/public/Airshows/AS13.webp";

/* ------------------------------------------------------------------ */
/* Types + data (replace with your CMS / API later)                    */
/* ------------------------------------------------------------------ */

type Author = CatAuthor;
type Post = CatPost;

const cencio: Author = { name: "David Cenciotti", href: "/author/cencio4" };
const stefano: Author = { name: "Stefano D'Urso", href: "/author/stefano-durso" };
const parth: Author = { name: "Parth Satam", href: "/author/parthsatam" };
const kai: Author = { name: "Kai Greet", href: "/author/kaigreet" };

const f35Tag = { label: "F-35", href: "/f-35" };

/* Hero: single verified post (live page shows carousel dots, but only
   this slide's content is confirmed -- add more slides once you have
   the other posts' real title/excerpt/author/date). */
const hero: Post = {
  id: "f-35-canopy-china-big-deal",
  category: f35Tag,
  title: "Why An F-35 Canopy Ending Up In China Is Still A Big Deal",
  excerpt:
    "An F-35 canopy won't give away the secrets of the entire aircraft, but its radar-absorbent coating and construction could still…",
  href: "/articles/f-35-canopy-china-big-deal",
  date: "September 24, 2026",
  image: image1,
  imageAlt: "F-35 canopy",
  author: cencio,
};

/* Two static side cards (image + overlaid title + byline, no excerpt) */
const heroSide: Post[] = [
  {
    id: "denmark-f-35-greenland",
    title: "Denmark Deploys F-35s to Greenland for the First Time",
    href: "/articles/denmark-f-35-greenland",
    date: "September 21, 2026",
    image: image2,
    imageAlt: "Denmark F-35s Greenland",
    author: parth,
  },
  {
    id: "finland-f-35-home-soil",
    title: "Finland's F-35s Touch Down on Home Soil for the First Time",
    href: "/articles/finland-f-35-home-soil",
    date: "September 19, 2026",
    image: image3,
    imageAlt: "Finland F-35 home soil",
    author: parth,
  },
];

/* Latest F-35 News */
const latest: Post[] = [
  {
    id: "us-approves-f-35-fms-saudi-arabia",
    category: { label: "F-35A Lightning II", href: "/tag/f-35a-lightning-ii" },
    title: "U.S. Approves F-35 Foreign Military Sale to Saudi Arabia",
    excerpt: "The U.S. Department of State has approved a possible Foreign Military Sale…",
    href: "/articles/us-approves-f-35-fms-saudi-arabia",
    date: "September 17, 2026",
    image: image4,
    imageAlt: "F-35A Lightning II",
    author: stefano,
  },
  {
    id: "rafael-spice-1000-f-35i-adir",
    category: { label: "F-35I Adir", href: "/tag/f-35i-adir" },
    title: "Rafael is Integrating SPICE 1000 on the Israeli F-35I Adir",
    excerpt: "Rafael and Lockheed Martin are integrating the Israeli SPICE 1000 stand-off weapon…",
    href: "/articles/rafael-spice-1000-f-35i-adir",
    date: "September 16, 2026",
    image: image5,
    imageAlt: "F-35I Adir SPICE 1000",
    author: stefano,
  },
  {
    id: "germanys-first-f-35-has-flown",
    category: { label: "F-35A Lightning II", href: "/tag/f-35a-lightning-ii" },
    title: "Germany's First F-35 Has Flown",
    excerpt: "The German Air Force's first F-35A Lightning II conducted its maiden flight…",
    href: "/articles/germanys-first-f-35-has-flown",
    date: "September 8, 2026",
    image: image6,
    imageAlt: "Germany's first F-35",
    author: stefano,
  },
  {
    id: "usmc-vmfa-115-first-f-35c-flight",
    category: { label: "2nd Marine Aircraft Wing", href: "/tag/2nd-marine-aircraft-wing" },
    title: "USMC VMFA-115 Sets Stage for Reactivation with First F-35C Flight",
    excerpt: "After being disbanded in November 2023 following the last flight with legacy…",
    href: "/articles/usmc-vmfa-115-first-f-35c-flight",
    date: "August 5, 2026",
    image: image7,
    imageAlt: "VMFA-115 first F-35C flight",
    author: parth,
  },
  {
    id: "usmc-f-35b-crashes-mcas-miramar",
    category: f35Tag,
    title: "U.S. Marine Corps F-35B Crashes at MCAS Miramar",
    excerpt: "The U.S. Marine Corps has confirmed an 'aircraft mishap' occurred at MCAS…",
    href: "/articles/usmc-f-35b-crashes-mcas-miramar",
    date: "July 31, 2026",
    image: image8,
    imageAlt: "F-35B crash MCAS Miramar",
    author: kai,
  },
  {
    id: "first-polish-f-35-cameri-faco",
    category: { label: "Cameri FACO", href: "/tag/cameri-faco" },
    title: "First Polish F-35 Built at Cameri's FACO has Flown",
    excerpt: "The first Polish F-35 to be built at Cameri's Final Assembly Check…",
    href: "/articles/first-polish-f-35-cameri-faco",
    date: "July 22, 2026",
    image: image9,
    imageAlt: "First Polish F-35 Cameri FACO",
    author: stefano,
  },
];

/* Sidebar "Latest News" - site-wide latest, tag + title only */
const sidebarLatest = [
  {
    title: "Boeing Awarded Contract to Build U.S. Navy's F/A-XX Fighter",
    href: "/articles/boeing-awarded-contract-f-a-xx-fighter",
    category: { label: "Aircraft Carriers", href: "/aircraft-carriers" },
    image: image10,
    imageAlt: "F/A-XX Fighter",
  },
  {
    title: "Phantom Flogger: How An Unarmed and Unmanned MiG-23 Crossed Into NATO Airspace",
    href: "/articles/phantom-flogger-unmanned-mig-23-nato-airspace",
    category: { label: "Military History", href: "/tag/military-history" },
    image: image11,
    imageAlt: "Unmanned MiG-23 Flogger",
  },
  {
    title: "U.S. Navy Advances New W93 Nuclear Warhead for Trident Submarine-Launched Ballistic Missiles",
    href: "/articles/w93-nuclear-warhead-trident-slbm",
    category: { label: "Weapons", href: "/category/weapons" },
    image: image12,
    imageAlt: "W93 warhead Trident SLBM",
  },
  {
    title: "[Updated] Two Naval Aviators Eject Following Mishap on USS Eisenhower",
    href: "/articles/two-naval-aviators-eject-uss-eisenhower",
    category: { label: "Aircraft Carriers", href: "/aircraft-carriers" },
    image: image13,
    imageAlt: "Two Naval Aviators Eject USS Eisenhower",
  },
];

export default function F35Page() {
  return (
    <CategoryTemplate
      title="F-35"
      parents={[{ label: "Military Aviation", href: "/militaryaviation" }]}
      slides={[hero]}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "101", "102"]}
    />
  );
}
