import CategoryTemplate, { type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/Military Aviation/MA1.webp";
import image2 from "@/public/Military Aviation/MA2.webp";
import image3 from "@/public/Military Aviation/MA3.webp";
import image4 from "@/public/Military Aviation/MA4.webp";
import image5 from "@/public/Military Aviation/MA5.webp";
import image6 from "@/public/Military Aviation/MA6.webp";
import image7 from "@/public/Military Aviation/MA7.webp";
import image8 from "@/public/Military Aviation/MA8.webp";
import image9 from "@/public/Military Aviation/MA9.webp";
import image10 from "@/public/Military Aviation/MA10.webp";
import image11 from "@/public/Military Aviation/MA11.webp";
import image12 from "@/public/Military Aviation/MA12.png";
import image13 from "@/public/Military Aviation/MA13.webp";
import image14 from "@/public/Military Aviation/MA14.webp";

/* ------------------------------------------------------------------ */
/* Types + data (replace with your CMS / API later)                    */
/* ------------------------------------------------------------------ */

type Post = CatPost;

const kai = { name: "Kai Greet", href: "/author/kaigreet" };
const cencio = { name: "David Cenciotti", href: "/author/cencio4" };
const parth = { name: "Parth Satam", href: "/author/parthsatam" };
const stefano = { name: "Stefano D'Urso", href: "/author/stefano-durso" };
const rin = { name: "Rin Sakurai", href: "/author/sakurairin" };

const featured: Post[] = [
  {
    id: "major-incident-raf-fairford",
    category: { label: "Military Aviation", href: "/category/military-aviation" },
    title:
      "[Updated] ‘Major Incident’ Near RAF Fairford After Arrests Made Under Explosives Act",
    excerpt:
      "After U.S. forces at RAF Fairford rapidly stepped up security precautions yesterday, police have now confirmed that arrests have been…",
    href: "/articles/major-incident-raf-fairford",
    date: "September 27, 2026",
    image: image1,
    imageAlt: "RAF Fairford Bomb Threat",
    author: kai,
  },
  {
    id: "sj-f-15es-return",
    category: { label: "Iran", href: "/category/troubled-areas/iran" },
    title:
      "4th FW F-15Es Return From Iran Air War With Mortal Kombat-Themed Nose Art And Drone Kill Markings",
    excerpt:
      "Ten Seymour Johnson F-15Es returning from the Middle East stopped at RAF Mildenhall, revealing new Mortal Kombat-themed nose art and…",
    href: "/articles/sj-f-15es-return-from-operation-epic-fury",
    date: "September 26, 2026",
    image: image2,
    imageAlt: "F-15E kill markings",
    author: cencio,
  },
  {
    id: "canada-globaleye",
    category: { label: "Military Aviation", href: "/category/military-aviation" },
    title: "Canada Advances Negotiations with Saab for GlobalEye",
    excerpt:
      "While not a formal purchase contract, the term sheet agreement establishes the framework for negotiation after Canada identified Saab as…",
    href: "/articles/canada-negotiations-saab-globaleye",
    date: "September 26, 2026",
    image: image3,
    imageAlt: "Canada Negotiations GlobalEye",
    author: parth,
  },
  {
    id: "australian-tiger-retire",
    title: "Australian Army to Retire its Tiger Attack Helicopters",
    href: "/articles/australian-army-to-retire-its-tiger-attack-helicopters",
    date: "September 25, 2026",
    image: image4,
    imageAlt: "Australian Army to Retires Tiger",
    author: parth,
  },
  {
    id: "blackbeard-super-hornet",
    title:
      "New Video Offers Clearest Look Yet At Blackbeard Hypersonic Missile On F/A-18F Super Hornet",
    href: "/articles/blackbeard-missile-super-hornet",
    date: "September 25, 2026",
    image: image5,
    imageAlt: "Blackbeard hypersonic missile",
    author: cencio,
  },
];

const latest: Post[] = [
  {
    id: "final-a-10c-nellis",
    category: { label: "A-10C Thunderbolt II", href: "/tag/a-10c-thunderbolt-ii" },
    title: "Final A-10C Thunderbolt II Leaves Nellis AFB",
    excerpt: "A month after the final training sortie with the 66th Weapons Squadron,…",
    href: "/articles/final-a-10c-thunderbolt-ii-leaves-nellis-afb",
    date: "September 24, 2026",
    image: image6,
    imageAlt: "Last A-10 Nellis",
    author: stefano,
  },
  {
    id: "f-35-canopy-china",
    category: { label: "China", href: "/tag/china" },
    title: "Why An F-35 Canopy Ending Up In China Is Still A Big Deal",
    excerpt: "An F-35 canopy won't give away the secrets of the entire aircraft,…",
    href: "/articles/f-35-canopy-china",
    date: "September 24, 2026",
    image: image7,
    imageAlt: "F-35 canopy",
    author: cencio,
  },
  {
    id: "french-rafales-japan",
    category: {
      label: "Armée de l'Air et de l’Espace",
      href: "/tag/armee-de-lair-et-de-lespace",
    },
    title: "French Rafales Return to Japan for PEGASE 2026",
    excerpt:
      "Four Rafale F4s, supported by three A330 MRTTs and two A400Ms, stopped…",
    href: "/articles/french-rafales-japan-pegase-2026",
    date: "September 24, 2026",
    image: image8,
    imageAlt: "French Rafales Japan",
    author: rin,
  },
  {
    id: "canada-first-f-35",
    category: { label: "Canada", href: "/tag/canada" },
    title: "Canada’s First F-35 Conducts Maiden Flight",
    excerpt: "The Royal Canadian Air Force’s first F-35A Lightning II flew for the…",
    href: "/articles/canadas-first-f-35-conducts-maiden-flight",
    date: "September 23, 2026",
    image: image9,
    imageAlt: "Canada First F-35",
    author: stefano,
  },
  {
    id: "rafale-ai",
    category: { label: "Dassault Aviation", href: "/tag/dassault-aviation" },
    title: "Dassault Tests Rafale with New AI Technologies for Crew Support",
    excerpt: "The flight tests support Dassault Aviation’s efforts to integrate AI into the…",
    href: "/articles/dassault-tests-rafale-ai-technologies",
    date: "September 23, 2026",
    image: image10,
    imageAlt: "Rafale AI Technologies",
    author: parth,
  },
  {
    id: "legion-data-link",
    category: {
      label: "Air Force Reserve Command Test Center",
      href: "/tag/air-force-reserve-command-test-center",
    },
    title: "Lockheed Martin Demonstrates Legion IRST Networking with Pod-to-Pod Data Link",
    excerpt: "The new capability allows two F-16s equipped with Legion sensor pods to…",
    href: "/articles/legion-irst-networking-pod-to-pod-data-link",
    date: "September 23, 2026",
    image: image11,
    imageAlt: "Legion data link",
    author: stefano,
  },
];

const sidebarLatest = [
  { 
    title: featured[0].title, 
    href: featured[0].href, 
    category: featured[0].category!, 
    imageAlt: featured[0].imageAlt,
    image: image12,
  },
  { 
    title: featured[1].title, 
    href: featured[1].href, 
    category: featured[1].category!,
    imageAlt: featured[1].imageAlt,
    image: image13,
  },
  { 
    title: featured[2].title,
    href: featured[2].href, 
    category: featured[2].category!, 
    imageAlt: featured[2].imageAlt,
    image: image14,
  },
  { 
    title: featured[4].title, 
    href: featured[4].href, 
    category: { label: "Military Aviation", href: "/category/military-aviation" },
    imageAlt: featured[4].imageAlt,
    image: featured[4].image,
  },
];

const subCategories = [
  { label: "Aircraft Carriers", href: "/aircraft-carriers" },
  { label: "Airshows", href: "/airshows" },
  { label: "F-104", href: "/f-104" },
  { label: "F-35", href: "/f-35" },
  { label: "Italian Air Force", href: "/italian-air-force" },
  { label: "Mil Ops", href: "/category/military-aviation/mil-ops" },
  { label: "Patches", href: "/category/military-aviation/patches" },
  { label: "Stealth Black Hawk", href: "/category/military-aviation/stealth-black-hawk" },
  { label: "Tales From The Cockpit", href: "/category/military-aviation/tales-from-the-cockpit" },
];

export default function MilitaryAviationPage() {
  return (
    <CategoryTemplate
      title="Military Aviation"
      findMore={subCategories}
      slides={featured.slice(0, 3)}
      side={featured.slice(3, 5)}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "1,087", "1,088"]}
    />
  );
}
