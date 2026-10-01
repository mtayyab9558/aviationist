import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/Helicopter/heli1.webp";
import image2 from "@/public/Helicopter/heli2.webp";
import image3 from "@/public/Helicopter/heli3.webp";

/* ------------------------------------------------------------------ */
/* Types + data (replace with your CMS / API later)                    */
/* ------------------------------------------------------------------ */

type Author = CatAuthor;
type Post = CatPost;

const kai: Author = { name: "Kai Greet", href: "/author/kaigreet" };
const cencio: Author = { name: "David Cenciotti", href: "/author/cencio4" };
const parth: Author = { name: "Parth Satam", href: "/author/parthsatam" };
const stefano: Author = { name: "Stefano D'Urso", href: "/author/stefano-durso" };

const helicoptersTag = { label: "Helicopters", href: "/helicopters" };

/* Hero: 3-slide carousel (site shows one at a time, auto-rotating) */
const heroSlides: Post[] = [
  {
    id: "australian-tiger-retire",
    category: helicoptersTag,
    title: "Australian Army to Retire its Tiger Attack Helicopters",
    excerpt:
      "The 1st Aviation Regiment will hold a sundown ceremony on Sept. 30 in Darwin, marking 20 years of Tiger service…",
    href: "/articles/australian-army-to-retire-its-tiger-attack-helicopters",
    date: "September 25, 2026",
    image: image1,
    imageAlt: "Australian Army to Retires Tiger",
    author: parth,
  },
  {
    id: "rnzaf-nh90",
    category: helicoptersTag,
    title: "RNZAF NH90 Becomes First of Type to Clock 3,000 Flight Hours",
    excerpt:
      "The Royal New Zealand Air Force has achieved impressive availability rates with its NH90 fleet, and one of its helicopters…",
    href: "/articles/rnzaf-nh90-3000-flight-hours",
    date: "September 8, 2026",
    imageAlt: "RNZAF NH90 3,000 FH",
    author: parth,
  },
  {
    id: "mh-139-ioc",
    category: helicoptersTag,
    title: "USAF MH-139 Grey Wolf Reaches Initial Operational Capability",
    excerpt:
      "The IOC for the Grey Wolf comes as the U.S. prepares to transition to the Sentinel ICBM from the legacy…",
    href: "/articles/mh-139-grey-wolf-ioc",
    date: "September 3, 2026",
    imageAlt: "MH-139 Grey Wolf",
    author: parth,
  },
];

/* Two static side items next to the hero (no excerpt) */
const heroSide: Post[] = [
  {
    id: "h-60m-altius-700",
    title:
      "H-60M Black Hawk Executes Rocket-Launch Of Anduril's Altius-700 During Latest U.S. Army A-LE Test",
    href: "/articles/h-60m-black-hawk-executes-rocket-launch-of-andurils-altius-700",
    date: "September 1, 2026",
    image: image2,
    imageAlt: "Altius-700 H-60",
    author: cencio,
  },
  {
    id: "sweden-nh90-phase-out",
    title: "Sweden to Begin Phasing Out NH90 TTH Helicopters by 2027 – Reports",
    href: "/articles/sweden-phasing-out-nh90-tth-by-2027",
    date: "August 27, 2026",
    image: image3,
    imageAlt: "Sweden NH90 phase-out",
    author: parth,
  },
];

/* Latest Helicopters News (left column list), each with its real tag */
const latest: Post[] = [
  {
    id: "norway-uh-60m",
    category: { label: "Foreign Military Sales", href: "/tag/foreign-military-sales" },
    title: "Norway Approved for 21 UH-60M Black Hawks After Reversing Plans for HH-60W",
    excerpt: "The U.S. has approved a possible foreign military sale (FMS) of up…",
    href: "/articles/norway-uh60m-blackhawk-fms",
    date: "August 23, 2026",
    image: image1,
    imageAlt: "Norway UH-60M Black Hawks",
    author: kai,
  },
  {
    id: "ge-t901",
    category: { label: "GE Aerospace", href: "/tag/ge-aerospace" },
    title: "GE's T901 Engine Clears Preliminary Flight Rating for UH-60 Black Hawk",
    excerpt: "The next-generation T901, developed as part of the ITEP program, cleared the…",
    href: "/articles/ge-t901-engine-preliminary-flight-rating",
    date: "August 17, 2026",
    image: image2,
    imageAlt: "T901 Preliminary Flight Rating",
    author: parth,
  },
  {
    id: "m1-flight-school-next",
    category: { label: "Flight School Next", href: "/tag/flight-school-next" },
    title: "U.S. Army Selects M1 for Flight School Next Program",
    excerpt: "The U.S. Army M1 Support Services to train new pilots as part…",
    href: "/articles/us-army-selects-m1-flight-school-next",
    date: "August 14, 2026",
    image: image3,
    imageAlt: "M1 Flight School Next",
    author: stefano,
  },
  {
    id: "mi-24-adversary",
    category: { label: "Adversary", href: "/tag/adversary" },
    title: "Mi-24 Hind Plays 'Adversary' in U.S. Marine Corps Exercise",
    excerpt:
      "Since 2020, two Mi-24D Hind helicopter gunships have provided invaluable threat replication…",
    href: "/articles/mi-24-hind-plays-adversary-usmc-exercise",
    date: "August 12, 2026",
    image: image1,
    imageAlt: "Mi-24 threat replication",
    author: parth,
  },
  {
    id: "france-nh90-sof",
    category: { label: "Airbus Helicopters", href: "/tag/airbus-helicopters" },
    title: "France Receives First NH90 Special Operations Helicopter",
    excerpt: "Airbus delivered to the French military the first NH90 Caïman Standard 2,…",
    href: "/articles/france-receives-first-nh90-special-operations-helicopter",
    date: "August 1, 2026",
    image: image2,
    imageAlt: "France NH90 special operations helicopter",
    author: parth,
  },
  {
    id: "armed-black-hawk",
    category: { label: "Armed Black Hawk", href: "/tag/armed-black-hawk" },
    title:
      "Sikorsky Details Armed Black Hawk and U-Hawk Plans, Including Optional Piloting and Export Interest",
    excerpt:
      "Sikorsky details plans to bring optional piloting into production, expand the Black…",
    href: "/articles/armed-black-hawk-fia",
    date: "July 30, 2026",
    image: image3,
    imageAlt: "Armed Black Hawk",
    author: cencio,
  },
];

/* Sidebar "Latest News" - tag + title only, no author/date (site-wide latest, not helicopter-specific) */
const sidebarLatest = [
  {
    title: "[Updated] 'Major Incident' Near RAF Fairford After Arrests Made Under Explosives Act",
    href: "/articles/major-incident-raf-fairford",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image1,
    imageAlt: "RAF Fairford Bomb Threat",
  },
  {
    title:
      "4th FW F-15Es Return From Iran Air War With Mortal Kombat-Themed Nose Art And Drone Kill Markings",
    href: "/articles/sj-f-15es-return-from-operation-epic-fury",
    category: { label: "Iran", href: "/category/troubled-areas/iran" },
    image: image2,
    imageAlt: "F-15E kill markings",
  },
  {
    title: "Canada Advances Negotiations with Saab for GlobalEye",
    href: "/articles/canada-negotiations-saab-globaleye",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image1,
    imageAlt: "Canada Negotiations GlobalEye",
  },
  {
    title:
      "New Video Offers Clearest Look Yet At Blackbeard Hypersonic Missile On F/A-18F Super Hornet",
    href: "/articles/blackbeard-missile-super-hornet",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image2,
    imageAlt: "Blackbeard hypersonic missile",
  },
];

export default function HelicoptersPage() {
  return (
    <CategoryTemplate
      title="Helicopters"
      slides={heroSlides}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "91", "92"]}
    />
  );
}
