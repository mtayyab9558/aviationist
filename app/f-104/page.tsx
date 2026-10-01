import CategoryTemplate, { type CatAuthor, type CatPost } from "@/components/category/CategoryTemplate";
import workImage from "@/public/Work/W1.png";
import image1 from "@/public/F-104/F104-1.jpg";
import image2 from "@/public/F-104/F104-2.jpg";
import image3 from "@/public/F-104/F104-3.jpg";
import image4 from "@/public/F-104/F104-4.jpg";
import image5 from "@/public/F-104/F104-5.jpg";
import image6 from "@/public/F-104/F104-6.jpg";
import image7 from "@/public/F-104/F104-7.jpg";
import image8 from "@/public/F-104/F104-8.jpg";
import image9 from "@/public/F-104/F104-9.jpg";
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
const dario: Author = { name: "Dario Leone", href: "/author/darioleone" };

const f104Tag = { label: "F-104", href: "/f-104" };

/* Hero: single verified post (live page shows carousel dots, but only
   this slide's content is confirmed -- add more slides once you have
   the other posts' real title/excerpt/author/date). */
const hero: Post = {
  id: "f-104-final-operational-flight-20-years",
  category: f104Tag,
  title: "20 Years Ago Today: The Final Operational Flight of the Iconic F-104 Starfighter",
  excerpt:
    "The final chapter in the operational career of the legendary F-104 unfolded at Grazzanise Air Base on Oct. 31, 2004…",
  href: "/articles/f-104-final-operational-flight-20-years-ago",
  date: "October 31, 2024",
  image: image1,
  imageAlt: "F-104 Starfighter final operational flight",
  author: cencio,
};

/* Two static side cards (image + overlaid title + byline, no excerpt) */
const heroSide: Post[] = [
  {
    id: "black-beauty-f-104-special-colors",
    title: "\"Black Beauty\": One Of The Last (And Most Beautiful) Special Colored F-104 Starfighters Of The Italian Air Force",
    href: "/articles/black-beauty-f-104-special-colors-italian-air-force",
    date: "November 29, 2019",
    image: image2,
    imageAlt: "Black Beauty F-104 special colors",
    author: cencio,
  },
  {
    id: "tf-104-escort-one-more-orbit-g650er",
    title: "Watch Starfighters' TF-104 Intercept and Escort \"One More Orbit\" G650ER World Record Flight To NASA's KSC",
    href: "/articles/tf-104-escort-one-more-orbit-g650er-nasa-ksc",
    date: "August 23, 2019",
    image: image3,
    imageAlt: "TF-104 escort One More Orbit G650ER",
    author: cencio,
  },
];

/* Latest F-104 News */
const latest: Post[] = [
  {
    id: "cf-104d-first-flight-33-years-norway",
    category: { label: "F-104 Starfighter", href: "/tag/f-104-starfighter" },
    title: "Check out these stunning videos of the iconic F-104 Starfighter flying for the first time in 33 years in Norway",
    excerpt: "A civilian-owned CF-104D Starfighter flew for its first time in 33 years…",
    href: "/articles/cf-104d-first-flight-33-years-norway",
    date: "September 30, 2016",
    image: image4,
    imageAlt: "F-104 Starfighter flying in Norway",
    author: cencio,
  },
  {
    id: "nf-104-astronaut-trainer-story",
    category: { label: "Edwards Air Force Base", href: "/tag/edwards-air-force-base" },
    title: "How the legendary Starfighter was used to train astronauts: the story of the NF-104",
    excerpt: "The story of how the Starfighter was used to train future astronauts…",
    href: "/articles/nf-104-astronaut-trainer-story",
    date: "April 10, 2015",
    image: image5,
    imageAlt: "NF-104 astronaut trainer",
    author: dario,
  },
  {
    id: "fighter-jet-sea-twisters-photo",
    category: { label: "F-104 Starfighter", href: "/tag/f-104-starfighter" },
    title: "[Photo] Fighter jet flies between sea twisters",
    excerpt: "Each time we receive a weird photo we always wonder whether the…",
    href: "/articles/photo-fighter-jet-sea-twisters",
    date: "November 28, 2013",
    image: image6,
    imageAlt: "F-104 between sea twisters",
    author: cencio,
  },
  {
    id: "f-104-return-to-flight-hoax",
    category: { label: "Aeronautica Militare", href: "/tag/aeronautica-militare" },
    title: "The \"F-104 return to flight\" hoax",
    excerpt: "After reading some news dealing with the presumed imminent return to flight…",
    href: "/articles/f-104-return-to-flight-hoax",
    date: "April 1, 2010",
    image: image7,
    imageAlt: "F-104 return to flight hoax",
    author: cencio,
  },
  {
    id: "starfighter-pilots-view",
    title: "Starfighter pilots' view",
    excerpt: "In the last days I had the opportunity to watch the last…",
    href: "/articles/starfighter-pilots-view",
    date: "March 31, 2010",
    image: image8,
    imageAlt: "Starfighter pilots' view",
    author: cencio,
  },
  {
    id: "italian-starfighters-book",
    category: { label: "156° Gruppo", href: "/tag/156-gruppo" },
    title: "\"Italian Starfighters\": how to buy the ultimate F-104 book",
    excerpt: "Hardcover: 216 pages; Glossy Paper (gr. 170); Four-colour printing; Case bound cover…",
    href: "/articles/italian-starfighters-book",
    date: "March 10, 2010",
    image: image9,
    imageAlt: "Italian Starfighters book",
    author: cencio,
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

export default function F104Page() {
  return (
    <CategoryTemplate
      title="F-104"
      parents={[{ label: "Military Aviation", href: "/militaryaviation" }]}
      slides={[hero]}
      side={heroSide}
      latest={latest}
      sidebarLatest={sidebarLatest}
      workImage={workImage}
      pages={["2", "3", "…", "8", "9"]}
    />
  );
}
