import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/IAF/IAF-1.webp";
import image2 from "@/public/IAF/IAF-2.webp";
import image3 from "@/public/IAF/IAF-3.jpg";
import image4 from "@/public/IAF/IAF-4.jpg";
import image5 from "@/public/IAF/IAF-5.jpg";
import image6 from "@/public/IAF/IAF-6.jpg";
import image7 from "@/public/IAF/IAF-7.jpg";
import image8 from "@/public/IAF/IAF-8.jpg";
import image9 from "@/public/IAF/IAF-9.jpg";
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

const findMore = [{ label: "ItAF Museum", href: "/militaryaviation/italian-air-force/itaf-museum" }];

/* Hero: single verified post (live page shows carousel dots, but only
   this slide's content is confirmed -- add more slides once you have
   the other posts' real title/excerpt/author/date). */
const hero: Post = {
  id: "italy-eurofighters-sampt-gulf-allies",
  category: { label: "Iran", href: "/globalhotspots/iran" },
  title: "Italy Quietly Deployed Eurofighters, SAMP/T And Counter-Drone Systems To Defend Gulf Allies",
  excerpt:
    "Eurofighters, an E-550A CAEW, radars and counter-drone systems are officially confirmed, while reports indicate that SAMP/T and Skynex batteries are…",
  href: "/articles/italy-eurofighters-sampt-counter-drone-gulf-allies",
  date: "July 31, 2026",
  image: image1,
  imageAlt: "Italy Eurofighters Gulf allies",
  author: cencio,
};

/* Two static side cards (image + overlaid title + byline, no excerpt) */
const heroSide: Post[] = [
  {
    id: "f-35bs-pantelleria-nervi-hangar",
    title: 'Interesting Photo Shows Two Italian Air Force F-35Bs Inside Pantelleria\'s Historic "Nervi Hangar"',
    href: "/articles/f-35bs-pantelleria-nervi-hangar",
    date: "May 14, 2026",
    image: image2,
    imageAlt: "F-35Bs inside Nervi Hangar Pantelleria",
    author: cencio,
  },
  {
    id: "italy-multinational-f-35-training-center",
    title: "Italy Approves First Multinational F-35 Pilot Training Center Outside The U.S.",
    href: "/articles/italy-multinational-f-35-pilot-training-center",
    date: "January 7, 2026",
    image: image3,
    imageAlt: "Multinational F-35 training center",
    author: cencio,
  },
];

/* Latest Italian Air Force News */
const latest: Post[] = [
  {
    id: "italian-air-force-new-f-35b-squadron",
    category: { label: "101° Gruppo", href: "/tag/101-gruppo" },
    title: "Italian Air Force Stands Up New F-35B Squadron",
    excerpt: "The 101st Gruppo (Squadron), reactivated after a period in \"quadro\" (dormant) status,…",
    href: "/articles/italian-air-force-new-f-35b-squadron",
    date: "July 1, 2025",
    image: image4,
    imageAlt: "101 Gruppo F-35B squadron",
    author: cencio,
  },
  {
    id: "first-two-g650ers-italian-air-force",
    category: { label: "31° Stormo", href: "/tag/31-stormo" },
    title: "First Two Gulfstream G650ERs Delivered to Italian Air Force",
    excerpt: "The new G650ER aircraft will take over the urgent medical transport missions…",
    href: "/articles/first-two-g650ers-italian-air-force",
    date: "April 15, 2025",
    image: image5,
    imageAlt: "Gulfstream G650ER 31 Stormo",
    author: stefano,
  },
  {
    id: "aa292-eurofighter-interception",
    category: { label: "AA292", href: "/tag/aa292" },
    title: "Dissecting the Interception of American Airlines Flight AA292 by Italian Air Force Eurofighters",
    excerpt: "We attempt to answer all the questions about AA292, which was intercepted…",
    href: "/articles/aa292-eurofighter-interception",
    date: "February 24, 2025",
    image: image6,
    imageAlt: "AA292 Eurofighter interception",
    author: cencio,
  },
  {
    id: "f-104-final-operational-flight-20-years",
    category: { label: "F-104", href: "/f-104" },
    title: "20 Years Ago Today: The Final Operational Flight of the Iconic F-104 Starfighter",
    excerpt: "The final chapter in the operational career of the legendary F-104 unfolded…",
    href: "/articles/f-104-final-operational-flight-20-years-ago",
    date: "October 31, 2024",
    image: image7,
    imageAlt: "F-104 Starfighter final operational flight",
    author: cencio,
  },
  {
    id: "ea-37b-compass-call-fms-italy",
    category: { label: "Compass Call", href: "/tag/compass-call" },
    title: "U.S. Approves EA-37B Compass Call Foreign Military Sale to Italy",
    excerpt: "The State Department approved the FMS to Italy of an unspecified number…",
    href: "/articles/ea-37b-compass-call-fms-italy",
    date: "October 8, 2024",
    image: image8,
    imageAlt: "EA-37B Compass Call",
    author: stefano,
  },
  {
    id: "italy-additional-f-35s-m-346s",
    category: { label: "Aeronautica Militare", href: "/tag/aeronautica-militare" },
    title: "Italy to Acquire Additional F-35s and M-346s as Part of New Defense Planning",
    excerpt: "The Italian MoD is still continuing the heavy modernization efforts of the…",
    href: "/articles/italy-additional-f-35s-m-346s",
    date: "September 18, 2024",
    image: image9,
    imageAlt: "Italy F-35s M-346s",
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

export default function ItalianAirForcePage() {
  return (
    <CategoryTemplate
      title="Italian Air Force"
      parents={[{ label: "Military Aviation", href: "/militaryaviation" }]}
      findMore={findMore}
      slides={[hero]}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "92", "93"]}
    />
  );
}
