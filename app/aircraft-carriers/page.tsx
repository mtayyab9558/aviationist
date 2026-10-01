import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/Aircraft/A1.webp";
import image2 from "@/public/Aircraft/A2.webp";
import image3 from "@/public/Aircraft/A3.webp";
import image4 from "@/public/Aircraft/A4.webp";
import image5 from "@/public/Aircraft/A5.webp";
import image6 from "@/public/Aircraft/A6.webp";
import image7 from "@/public/Aircraft/A7.webp";
import image8 from "@/public/Aircraft/A8.jpg";
import image9 from "@/public/Aircraft/A9.jpg";
import image10 from "@/public/Aircraft/A10.webp";
import image11 from "@/public/Aircraft/A11.webp";
import image12 from "@/public/Aircraft/A12.webp";
import image13 from "@/public/Aircraft/A13.webp";

/* ------------------------------------------------------------------ */
/* Types + data (replace with your CMS / API later)                    */
/* ------------------------------------------------------------------ */

type Author = CatAuthor;
type Post = CatPost;

const stefano: Author = { name: "Stefano D'Urso", href: "/author/stefano-durso" };
const kai: Author = { name: "Kai Greet", href: "/author/kaigreet" };
const parth: Author = { name: "Parth Satam", href: "/author/parthsatam" };

const carriersTag = { label: "Aircraft Carriers", href: "/aircraft-carriers" };

/* Hero: single verified post (the live page shows carousel dots, but
   only this slide's content is confirmed -- add more slides once you
   have the other posts' real title/excerpt/author/date). */
const hero: Post = {
  id: "eisenhower-eject-mishap",
  category: carriersTag,
  title: "Two Naval Aviators Eject Following Mishap on USS Eisenhower",
  excerpt:
    "The U.S. Navy said that two Naval Aviators ejected from their aircraft following a recovery mishap aboard the USS Eisenhower…",
  href: "/articles/two-naval-aviators-eject-uss-eisenhower",
  date: "September 29, 2026",
  image: image1,
  imageAlt: "Two Naval Aviators Eject USS Eisenhower",
  author: stefano,
};

/* Two static side cards (image + overlaid title + byline, no excerpt) */
const heroSide: Post[] = [
  {
    id: "uss-jfk-acceptance-trials",
    title: "The Future USS John F. Kennedy Begins Acceptance Trials Ahead of Delivery",
    href: "/articles/uss-jfk-acceptance-trials",
    date: "August 13, 2026",
    image: image2,
    imageAlt: "John F. Kennedy Sea Trials",
    author: kai,
  },
  {
    id: "russian-tu142-hms-pwls",
    title: "Russian Tu-142 Drops Sonobuoys Near HMS Prince of Wales in 'Unprofessional' Act",
    href: "/articles/russian-tu142-hms-pwls",
    date: "July 6, 2026",
    image: image3,
    imageAlt: "Russian Tu-142 Intercepted HMS Prince of Wales",
    author: kai,
  },
];

/* Latest Aircraft Carriers News */
const latest: Post[] = [
  {
    id: "c2-greyhound-last-time",
    category: { label: "C-2 Greyhound", href: "/tag/c-2-greyhound" },
    title: "C-2 Greyhound Flies Off an Aircraft Carrier for the Last Time",
    excerpt: "The C-2A Greyhound conducted its last ever catapult launch from a U.S…",
    href: "/articles/c-2-greyhound-flies-off-aircraft-carrier-last-time",
    date: "June 30, 2026",
    image: image4,
    imageAlt: "C-2A last carrier landing",
    author: stefano,
  },
  {
    id: "mq-25-stingray-nimitz",
    category: { label: "Boeing Defense and Space", href: "/tag/boeing-defense-and-space" },
    title: "MQ-25 Stingray Demonstrator Seen Embarked on USS Nimitz",
    excerpt: "The Boeing-owned MQ-25 Stingray T1 demonstrator has been embarked on the USS…",
    href: "/articles/mq-25-stingray-demonstrator-on-uss-nimitz",
    date: "June 29, 2026",
    image: image5,
    imageAlt: "MQ-25 USS Nimitz",
    author: stefano,
  },
  {
    id: "js-izumo-flight-deck",
    category: { label: "F-35B Lightning II", href: "/tag/f-35b-lightning-ii" },
    title: "JMSDF Reveals JS Izumo's Upgraded Flight Deck for F-35B Operations",
    excerpt: "JMSDF releases first images of JS Izumo's new rectangular flight deck as…",
    href: "/articles/js-izumo-upgraded-flight-deck",
    date: "April 21, 2026",
    image: image6,
    imageAlt: "JS Izumo's new rectangular flight deck",
    author: parth,
  },
  {
    id: "t-45-replacement-rfp",
    category: { label: "CNATRA", href: "/tag/cnatra" },
    title: "U.S. Navy Launches Competition for T-45's Replacement with Final RFP",
    excerpt: "The U.S. Navy has released the final Request for Proposals for the…",
    href: "/articles/us-navy-rfp-t-45s-replacement",
    date: "March 30, 2026",
    image: image7,
    imageAlt: "Request for Proposals for the Undergraduate Jet Training System",
    author: stefano,
  },
  {
    id: "france-next-carrier-name",
    category: { label: "Aircraft Carrier", href: "/tag/aircraft-carrier" },
    title: "Name Announced for France's Next Generation Nuclear Powered Aircraft Carrier",
    excerpt: "The France Libre, or Free France, will be powered by two nuclear…",
    href: "/articles/france-names-next-aircraft-carrier",
    date: "March 18, 2026",
    image: image8,
    imageAlt: "Next French Aircraft Carrier Named",
    author: kai,
  },
  {
    id: "uss-nimitz-decommissioning-delay",
    category: { label: "Aircraft Carrier", href: "/tag/aircraft-carrier" },
    title: "USS Nimitz Given Brief Lifeline as Decommissioning Pushed Back to 2027",
    excerpt: "Instead of decommissioning this year, Breaking Defense reports that the U.S. Navy's…",
    href: "/articles/uss-nimitz-decommissioning-pushed-back-2027",
    date: "March 14, 2026",
    image: image9,
    imageAlt: "USS Nimitz Decommissioning Delayed",
    author: kai,
  },
];

/* Sidebar "Latest News" - site-wide latest, tag + title only */
const sidebarLatest = [
  {
    title: "Two Naval Aviators Eject Following Mishap on USS Eisenhower",
    href: "/articles/two-naval-aviators-eject-uss-eisenhower",
    category: carriersTag,
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

export default function AircraftCarriersPage() {
  return (
    <CategoryTemplate
      title="Aircraft Carriers"
      parents={[{ label: "Military Aviation", href: "/militaryaviation" }]}
      slides={[hero]}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "60", "61"]}
    />
  );
}
