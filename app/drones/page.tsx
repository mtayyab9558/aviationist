import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/Drones/D1.webp";
import image2 from "@/public/Drones/D2.webp";
import image3 from "@/public/Drones/D3.webp";
import image4 from "@/public/Drones/D4.webp";
import image5 from "@/public/Drones/D5.webp";
import image6 from "@/public/Drones/D6.webp";
import image7 from "@/public/Drones/D7.jpg";
import image8 from "@/public/Drones/D8.webp";
import image9 from "@/public/Drones/D9.webp";
import image10 from "@/public/Drones/D10.webp";
import image11 from "@/public/Drones/D11.webp";
import image12 from "@/public/Drones/D12.webp";
import image13 from "@/public/Drones/D13.webp";

/* ------------------------------------------------------------------ */
/* Types + data (replace with your CMS / API later)                    */
/* ------------------------------------------------------------------ */

type Author = CatAuthor;
type Post = CatPost;

const stefano: Author = { name: "Stefano D'Urso", href: "/author/stefano-durso" };
const parth: Author = { name: "Parth Satam", href: "/author/parthsatam" };
const kai: Author = { name: "Kai Greet", href: "/author/kaigreet" };

const dronesTag = { label: "Drones", href: "/drones" };

const subCategories = [{ label: "Captured Stealth Drone", slug: "captured-stealth-drone" }];

/* Hero: 3-slide carousel (site shows one at a time, auto-rotating) */
const heroSlides: Post[] = [
  {
    id: "fq-42-cca-f35-f15e",
    category: dronesTag,
    title: "FQ-42 Vengeance CCA Flies Alongside F-35 Lightning II and F-15E Strike Eagle",
    excerpt:
      "One of the FQ-42 Collaborative Combat Aircraft deployed at Creech AFB has flown alongside an F-35A and F-15E in preparation…",
    href: "/articles/fq-42-cca-alongside-f-35-f-15e",
    date: "September 21, 2026",
    image: image1,
    imageAlt: "FQ-42 F-35 F-15",
    author: stefano,
  },
  {
    id: "mojave-stol-battlefield",
    category: dronesTag,
    title: "Mojave STOL Drone Conducts First Battlefield Short-Field Operations in South Korea",
    excerpt:
      "The demonstration at a live-fire training range showcased the Mojave's ability to operate from austere, short-field locations in simulated battlefield…",
    href: "/articles/mojave-stol-battlefield-short-field-operations",
    date: "September 17, 2026",
    imageAlt: "Mojave STOL Battlefield",
    author: parth,
  },
  {
    id: "yfq-44a-fury-air-to-ground",
    category: dronesTag,
    title: "Anduril's YFQ-44A Fury Expands Its Weapons Options With Air-to-Ground Munitions",
    excerpt:
      "Anduril fit checked its YFQ-44A Fury CCA with various air-to-ground munitions, and conducted the first formation flights of the autonomous…",
    href: "/articles/andurils-yfq-44a-fury-air-to-ground-munitions",
    date: "September 16, 2026",
    imageAlt: "YFQ-44A Air-to-Ground",
    author: stefano,
  },
];

/* Two static side items next to the hero (no excerpt) */
const heroSide: Post[] = [
  {
    id: "mq-25-lrip",
    title: "Boeing Awarded LRIP Contract for MQ-25 Stingray",
    href: "/articles/boeing-awarded-lrip-contract-for-mq-25-stingray",
    date: "September 15, 2026",
    image: image2,
    imageAlt: "MQ-25 LRIP",
    author: stefano,
  },
  {
    id: "vectis-production",
    title: "Lockheed Martin Expands Vectis Production With Four Additional Aircraft",
    href: "/articles/lockheed-martin-expands-vectis-production",
    date: "September 15, 2026",
    image: image3,
    imageAlt: "Vectis Additional Aircraft",
    author: stefano,
  },
];

/* Latest Drones News (left column list) */
const latest: Post[] = [
  {
    id: "fq-42-fq-44-names",
    category: { label: "Air Space & Cyber Conference", href: "/tag/air-space-cyber-conference" },
    title: 'U.S. Air Force Names CCAs as FQ-42 "Vengeance" and FQ-44 "Fury"',
    excerpt: "Secretary of the Air Force Troy Meink announced the popular names for…",
    href: "/articles/fq-42-vengeance-and-fq-44-fury",
    date: "September 14, 2026",
    image: image4,
    imageAlt: "FQ-42 Vengeance FQ-44 Fury",
    author: stefano,
  },
  {
    id: "akinci-uav-300",
    category: { label: "Air-Launched Ballistic Missile", href: "/tag/air-launched-ballistic-missile" },
    title: "Turkey's Akinci UCAV Fires UAV-300 Air-Launched Ballistic Missile for the First Time",
    excerpt: "The UAV-300 had also been carried by the Akinci during a recent…",
    href: "/articles/turkeys-akinci-ucav-fires-uav-300-albm",
    date: "September 12, 2026",
    image: image5,
    imageAlt: "Akinci UAV-300",
    author: parth,
  },
  {
    id: "vectis-teaser",
    category: { label: "Collaborative Combat Aircraft", href: "/tag/collaborative-combat-aircraft" },
    title: "Lockheed Martin's Latest Teaser Hints at Vectis Update",
    excerpt: "A shadowy aircraft in Lockheed Martin's latest teaser appears consistent with published…",
    href: "/articles/lm-mysterious-aircraft",
    date: "September 12, 2026",
    image: image6,
    imageAlt: "Vectis teaser",
    author: stefano,
  },
  {
    id: "italy-mq-9a-block5",
    category: { label: "General Atomics Aeronautical Systems", href: "/tag/general-atomics-aeronautical-systems" },
    title: "Italy Orders Two More MQ-9A Block 5 Drones",
    excerpt: "The Italian Air Force has ordered two additional MQ-9A Block 5 Remotely…",
    href: "/articles/italy-orders-two-more-mq-9a-block-5-drones",
    date: "September 9, 2026",
    image: image7,
    imageAlt: "New Italian MQ-9 Block 5",
    author: stefano,
  },
  {
    id: "aevum-ravn-x",
    // no tag on the live page for this item
    title: "Aevum's Sleek Space Launch Drone Turns Heads at Long Beach Airport",
    excerpt: "After years of little activity, the Ravn X rolled out of a…",
    href: "/articles/aevum-ravn-x-long-beach",
    date: "September 6, 2026",
    image: image8,
    imageAlt: "Aevum Ravn X",
    author: kai,
  },
  {
    id: "cobra-600-first-flight",
    category: { label: "air-to-air missile", href: "/tag/air-to-air-missile" },
    title: "Cobra 600 Air Defense Drone Completes First Flight",
    excerpt: "Unveiled at the recent ILA Berlin air show, the Cobra 600 is…",
    href: "/articles/cobra-600-air-defense-drone-completes-first-flight",
    date: "August 23, 2026",
    image: image9,
    imageAlt: "Cobra 600 first flight",
    author: parth,
  },
];

/* Sidebar "Latest News" - tag + title only, no author/date (site-wide latest) */
const sidebarLatest = [
  {
    title: "Marine MV-22B Osprey Conducts First Sonobuoy Lot Acceptance Test",
    href: "/articles/marine-mv-22b-sonobuoy-lot-acceptance-test",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image10,
    imageAlt: "MV-22B Sonobuoy Lot Acceptance Test",
  },
  {
    title: "[Updated] 'Major Incident' Near RAF Fairford After Arrests Made Under Explosives Act",
    href: "/articles/major-incident-raf-fairford",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image11,
    imageAlt: "RAF Fairford Bomb Threat",
  },
  {
    title:
      "4th FW F-15Es Return From Iran Air War With Mortal Kombat-Themed Nose Art And Drone Kill Markings",
    href: "/articles/sj-f-15es-return-from-operation-epic-fury",
    category: { label: "Iran", href: "/category/troubled-areas/iran" },
    image: image12,
    imageAlt: "F-15E kill markings",
  },
  {
    title: "Canada Advances Negotiations with Saab for GlobalEye",
    href: "/articles/canada-negotiations-saab-globaleye",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image13,
    imageAlt: "Canada Negotiations GlobalEye",
  },
];

export default function DronesPage() {
  return (
    <CategoryTemplate
      title="Drones"
      findMore={subCategories.map((c) => ({ label: c.label, href: "/category/drones/" + c.slug }))}
      slides={heroSlides}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "117", "118"]}
    />
  );
}
