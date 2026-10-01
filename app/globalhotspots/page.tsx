import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/Global Hotspot/T1.webp";
import image2 from "@/public/Global Hotspot/T2.jpg";
import image3 from "@/public/Global Hotspot/T3.webp";
import image4 from "@/public/Global Hotspot/T4.webp";
import image5 from "@/public/Global Hotspot/T5.webp";

/* ------------------------------------------------------------------ */
/* Types + data (replace with your CMS / API later)                    */
/* ------------------------------------------------------------------ */

type Author = CatAuthor;
type Post = CatPost;

const cencio: Author = { name: "David Cenciotti", href: "/author/cencio4" };
const levente: Author = { name: "Levente Benedek", href: "/author/leventebenedek" };
const kai: Author = { name: "Kai Greet", href: "/author/kaigreet" };
const parth: Author = { name: "Parth Satam", href: "/author/parthsatam" };
const tom: Author = { name: "Tom Demerly", href: "/author/tom-demerly" };
const stefano: Author = { name: "Stefano D'Urso", href: "/author/stefano-durso" };

const subCategories = [
  { label: "Afghanistan", slug: "afghanistan" },
  { label: "Africa", slug: "africa" },
  { label: "China", slug: "china" },
  { label: "Gaza", slug: "gaza" },
  { label: "Iran", slug: "iran" },
  { label: "Iraq", slug: "iraq" },
  { label: "Kashmir", slug: "kashmir" },
  { label: "Kenya", slug: "kenya" },
  { label: "Lebanon", slug: "lebanon" },
  { label: "Libya", slug: "libya" },
  { label: "Mali", slug: "mali" },
  { label: "Nagorno-Karabakh", slug: "nagorno-karabakh" },
  { label: "North Africa", slug: "north-africa" },
  { label: "North Korea", slug: "north-korea" },
  { label: "Operation Martyr Yalcin", slug: "operation-martyr-yalcin" },
  { label: "Russia", slug: "russia" },
  { label: "Saudi Arabia", slug: "saudi-arabia" },
  { label: "Syria", slug: "syria" },
  { label: "Taiwan", slug: "taiwan" },
  { label: "Terrorism", slug: "terror" },
  { label: "Thailand-Cambodia", slug: "thailand-cambodia" },
  { label: "Turkey vs Greece", slug: "turkey-vs-greece" },
  { label: "Venezuela", slug: "venezuela" },
  { label: "War in Ukraine", slug: "war-in-ukraine" },
  { label: "War on ISIS", slug: "war-on-isis" },
  { label: "Yemen", slug: "yemen" },
];

/* Hero: 3-slide carousel (site shows one at a time, auto-rotating) */
const heroSlides: Post[] = [
  {
    id: "sj-f-15es-return",
    category: { label: "Iran", href: "/globalhotspots/iran" },
    title:
      "4th FW F-15Es Return From Iran Air War With Mortal Kombat-Themed Nose Art And Drone Kill Markings",
    excerpt:
      "Ten Seymour Johnson F-15Es returning from the Middle East stopped at RAF Mildenhall, revealing new Mortal Kombat-themed nose art and…",
    href: "/articles/sj-f-15es-return-from-operation-epic-fury",
    date: "September 26, 2026",
    image: image1,
    imageAlt: "F-15E kill markings",
    author: cencio,
  },
  {
    id: "thai-f16-bomb-markings",
    category: { label: "Thailand-Cambodia", href: "/globalhotspots/thailand-cambodia" },
    title: "Bomb Markings On Thai F-16s Shed New Light On Cambodia Combat Operations",
    excerpt:
      "Mission markings appearing on Royal Thai Air Force F-16s offer new clues about the weapons and aircraft employed during the…",
    href: "/articles/bomb-markings-on-thai-f-16s",
    date: "September 25, 2026",
    imageAlt: "Thai F-16s",
    author: levente,
  },
  {
    id: "thai-f16-strikes-cambodia",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    title: "Thai F-16 Strikes Cambodia as Border Dispute Intensifies",
    excerpt:
      "Thailand's armed forces have confirmed that one F-16 aircraft in a flight of six opened fire at what it claimed…",
    href: "/articles/thai-f-16-strikes-cambodia",
    date: "July 24, 2025",
    imageAlt: "Thai F-16 Strike Cambodia",
    author: kai,
  },
];

/* Two static side items next to the hero (no excerpt) */
const heroSide: Post[] = [
  {
    id: "thai-f16-kggb-bomb",
    title: "Thai F-16 Shown with South Korean KGGB Bomb Before Strikes Against Cambodia",
    href: "/articles/thai-f-16-kggb-bomb",
    date: "July 26, 2025",
    image: image2,
    imageAlt: "Thai F-16 KGGB Bomb",
    author: parth,
  },
  {
    id: "china-j-xds-new-image",
    title: "New Image of China's J-XDS Stealth Jet Reveal Interesting Features",
    href: "/articles/new-image-chinas-j-xds-stealth-jet",
    date: "September 19, 2026",
    image: image3,
    imageAlt: "New Image J-XDS",
    author: parth,
  },
];

/* Latest Troubled Areas News (left column list) */
const latest: Post[] = [
  {
    id: "italian-eurofighter-saudi",
    category: { label: "Eurofighter Typhoon", href: "/tag/eurofighter-typhoon" },
    title: "Italian Eurofighter Typhoon Struck In Houthi Attack On Saudi Air Base",
    excerpt: "The Italian MOD has just announced that an Italian Air Force Eurofighter…",
    href: "/articles/italian-eurofighter-hit-saudi-arabia",
    date: "September 18, 2026",
    image: image4,
    imageAlt: "Italian Air Force Eurofighter Saudi Arabia",
    author: cencio,
  },
  {
    id: "saudi-f35-fms",
    category: { label: "F-35A Lightning II", href: "/tag/f-35a-lightning-ii" },
    title: "U.S. Approves F-35 Foreign Military Sale to Saudi Arabia",
    excerpt: "The U.S. Department of State has approved a possible Foreign Military Sale…",
    href: "/articles/u-s-approves-f-35-foreign-military-sale-to-saudi-arabia",
    date: "September 17, 2026",
    image: image5,
    imageAlt: "Saudi F-35 FMS",
    author: stefano,
  },
  {
    id: "dude-44-rescue-footage",
    category: { label: "Boeing F-15E Strike Eagle", href: "/tag/boeing-f-15e-strike-eagle" },
    title: "New DUDE 44 Rescue Footage Reveals More About Aircraft Used in Iran Operation",
    excerpt: "Newly declassified footage aired by '60 Minutes' offers a closer look at…",
    href: "/articles/new-dude-44-rescue-footage",
    date: "September 14, 2026",
    image: image4,
    imageAlt: "Dude 44",
    author: tom,
  },
  {
    id: "dude-44-wso-interview",
    category: { label: "CSAR", href: "/tag/csar" },
    title: "New Details About DUDE 44 Shootdown Emerge in First Interview of WSO",
    excerpt: "For the first time, the Weapon Systems Officer of the F-15E Strike…",
    href: "/articles/dude-44-interview-of-wso",
    date: "September 14, 2026",
    image: image5,
    imageAlt: "DUDE 44 WSO Interview",
    // co-authored on the live page (Stefano D'Urso and David Cenciotti)
    author: stefano,
    coAuthor: cencio,
  },
  {
    id: "iranian-strike-muwaffaq-salti",
    category: { label: "A-10C Thunderbolt II", href: "/tag/a-10c-thunderbolt-ii" },
    title: "Iranian Missile Strike Damages U.S. Aircraft at Muwaffaq Salti Air Base",
    excerpt: "An A-10 Thunderbolt II reportedly lost a wing while around eight F-15s…",
    href: "/articles/iranian-strike-damages-u-s-aircraft-muwaffaq-salti-ab",
    date: "September 10, 2026",
    image: image4,
    imageAlt: "Iranian Missile Strike Damages U.S. Aircraft",
    author: stefano,
  },
  {
    id: "su-57-munitions-el-alamein",
    category: { label: "Egypt", href: "/tag/egypt" },
    title: "Russia Unveils Stealthy Munitions for the Su-57 at El Alamein Airshow",
    excerpt: "The new munitions blur the line between low-cost attack drones and cruise…",
    href: "/articles/russia-stealthy-munitions-su-57-el-alamein-airshow",
    date: "September 8, 2026",
    image: image5,
    imageAlt: "Su-57 munitions",
    author: parth,
  },
];

/* Sidebar "Latest News" - tag + title only, no author/date (site-wide latest) */
const sidebarLatest = [
  {
    title: "Marine MV-22B Osprey Conducts First Sonobuoy Lot Acceptance Test",
    href: "/articles/marine-mv-22b-sonobuoy-lot-acceptance-test",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image2,
    imageAlt: "MV-22B Sonobuoy Lot Acceptance Test",
  },
  {
    title: "[Updated] 'Major Incident' Near RAF Fairford After Arrests Made Under Explosives Act",
    href: "/articles/major-incident-raf-fairford",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image3,
    imageAlt: "RAF Fairford Bomb Threat",
  },
  {
    title:
      "4th FW F-15Es Return From Iran Air War With Mortal Kombat-Themed Nose Art And Drone Kill Markings",
    href: "/articles/sj-f-15es-return-from-operation-epic-fury",
    category: { label: "Iran", href: "/globalhotspots/iran" },
    image: image4,
    imageAlt: "F-15E kill markings",
  },
  {
    title: "Canada Advances Negotiations with Saab for GlobalEye",
    href: "/articles/canada-negotiations-saab-globaleye",
    category: { label: "Military Aviation", href: "/militaryaviation" },
    image: image5,
    imageAlt: "Canada Negotiations GlobalEye",
  },
];

export default function GlobalHotspotsPage() {
  return (
    <CategoryTemplate
      title="Troubled Areas"
      findMore={subCategories.map((c) => ({ label: c.label, href: "/category/globalhotspots/" + c.slug }))}
      slides={heroSlides}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "367", "368"]}
    />
  );
}
