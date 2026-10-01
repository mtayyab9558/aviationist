"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CategoryBadge,
  PostMeta,
  ReadMore,
  Thumb,
  type ImgSrc,
} from "@/components/post/PostParts";
import img1 from "@/public/Mojave-Short-Battlefield-Ops-1-860x484.jpg.webp";
import img2 from "@/public/P1.webp";
import img3 from "@/public/P2.webp";
import img4 from "@/public/P3.webp";
import img5 from "@/public/P4.webp";
import img6 from "@/public/L1.webp";
import img7 from "@/public/L2.webp";
import img8 from "@/public/L3.webp";
import img9 from "@/public/L4.webp";
import img10 from "@/public/L5.webp";
import img11 from "@/public/L6.webp";
import img12 from "@/public/L7.webp";
import img13 from "@/public/L8.webp";
import img14 from "@/public/M1.webp";
import img15 from "@/public/M2.webp";
import img16 from "@/public/M3.webp";
import img17 from "@/public/M4.webp";
import img18 from "@/public/M5.webp";
import img19 from "@/public/D1.webp";
import img20 from "@/public/D2.webp";
import img21 from "@/public/D3.webp";
import img22 from "@/public/D4.webp";
import img23 from "@/public/D5.webp";
import img24 from "@/public/A1.webp";
import img25 from "@/public/A2.webp";
import img26 from "@/public/A3.webp";
import img27 from "@/public/T1.webp";
import img28 from "@/public/T2.webp";
import img29 from "@/public/T3.webp";
import img30 from "@/public/T4.webp";
import img31 from "@/public/T5.webp";
import img32 from "@/public/W1.webp";
import img33 from "@/public/W2.webp";
import img34 from "@/public/W3.webp";
import img35 from "@/public/W4.webp";
import img36 from "@/public/W5.webp";
import img37 from "@/public/Ava1.jpeg";
import img38 from "@/public/Ava2.png";
import img39 from "@/public/Ava3.png";
import img40 from "@/public/Ava4.png";
import img41 from "@/public/Ava5.png";
import img42 from "@/public/Ava6.png";
import img43 from "@/public/Ava7.png";
import img44 from "@/public/Ava8.png";
import img45 from "@/public/Ava9.jpeg";
import img46 from "@/public/Ava10.png";
import img47 from "@/public/Ava11.png";
import img48 from "@/public/Ava12.png";
import img49 from "@/public/Ava13.png";
import img50 from "@/public/Ava14.png";
import img51 from "@/public/Ava15.png";

interface HeroSlide {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
  author: {
    name: string;
    avatar?: ImgSrc;
  };
  date: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "mojave-stol-drone",
    category: "Drones",
    title:
      "Mojave STOL Drone Conducts First Battlefield Short-Field Operations in South Korea",
    excerpt:
      "The demonstration at a live-fire training range showcased the Mojave's ability to operate from austere, short-field locations in simulated battlefield conditions. The Mojave Short Take-Off Landing (STOL) Unmanned Aerial System…",
    href: "/articles/mojave-stol-drone",
    image: {
      src: img1,
      alt: "Mojave STOL drone flying over a forested hillside",
    },
    author: {
      name: "Parth Satam",
      avatar: img37,
    },
    date: "September 17, 2026",
  },
  {
    id: "fq-42-vengeance-cca-hero",
    category: "Drones",
    title: "FQ-42 Vengeance CCA Flies Alongside F-35 Lightning II and F-15E Strike Eagle",
    excerpt:
      "One of the FQ-42 Collaborative Combat Aircraft deployed at Creech AFB has flown alongside an F-35 Lightning II and an F-15E Strike Eagle…",
    href: "/articles/fq-42-vengeance-cca-f-35-f-15e",
    image: {
      src: img19,
      alt: "F-35 and F-15E flying alongside an FQ-42 Vengeance drone",
    },
    author: {
      name: "Stefano D'Urso",
      avatar: img46,
    },
    date: "September 21, 2026",
  },
  {
    id: "davis-monthan-a-10c-hero",
    category: "Military Aviation",
    title: "Davis-Monthan AFB Inactivates its Last A-10C Thunderbolt II Units",
    excerpt:
      "The 355th Operations Group, 357th Fighter Squadron, 357th Fighter Generation Squadron, and…",
    href: "/articles/davis-monthan-a-10c-inactivation",
    image: {
      src: img6,
      alt: "Two A-10 Thunderbolt II aircraft flying in formation",
    },
    author: {
      name: "Parth Satam",
      avatar: img38,
    },
    date: "September 21, 2026",
  },
  {
    id: "lockheed-aim-260-hero",
    category: "Weapons",
    title: "Lockheed Martin and Pentagon Agree Framework to Ramp Up AIM-260 JATM Production",
    excerpt:
      "The agreement lays the foundation for future multi-year procurement of the AIM-260 Joint Advanced Tactical Missile…",
    href: "/articles/lockheed-pentagon-aim-260-jatm",
    image: {
      src: img32,
      alt: "Fighter jets releasing flares during a training exercise",
    },
    author: {
      name: "Kai Greet",
      avatar: img51,
    },
    date: "September 20, 2026",
  },
  {
    id: "ukraine-storm-shadow-hero",
    category: "Ukraine",
    title:
      "Ukraine Receives Storm Shadow Production License from UK in Exchange for Avenger AI Data",
    excerpt:
      "UK Prime Minister Keir Starmer announced Wednesday that Ukraine will receive a…",
    href: "/articles/ukraine-storm-shadow-license-uk",
    image: {
      src: img31,
      alt: "Fighter jets carrying Storm Shadow cruise missiles",
    },
    author: {
      name: "James Gray",
      avatar: img50,
    },
    date: "August 26, 2026",
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

interface PopularPost {
  id: string;
  category: string;
  title: string;
  href: string;
  date: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
}

const popularPosts: PopularPost[] = [
  {
    id: "raf-fairford-security-alert",
    category: "Aviation",
    title:
      "Security Alert at RAF Fairford After Civilian Jet Mistakenly Lands at U.S. Bomber Base",
    href: "/articles/raf-fairford-security-alert",
    date: "September 13, 2026",
    image: {
      src: img2,
      alt: "Civilian jet on the runway at RAF Fairford next to a U.S. bomber",
    },
  },
  {
    id: "av-8b-harrier-retired",
    category: "Military Aviation",
    title: "Last AV-8B Harrier Built for USMC Retired as Museum Display",
    href: "/articles/av-8b-harrier-retired",
    date: "September 11, 2026",
    image: {
      src: img3,
      alt: "AV-8B Harrier being lifted by crane for museum display",
    },
  },
  {
    id: "air-force-new-f-16s",
    category: "Military Aviation",
    title: "U.S. Air Force Considering Once Again Buying New F-16s",
    href: "/articles/air-force-new-f-16s",
    date: "September 17, 2026",
    image: {
      src: img4,
      alt: "F-16 fighter jet taking off with afterburner engaged",
    },
  },
  {
    id: "china-j-xds-stealth-jet",
    category: "China",
    title: "New Image of China's J-XDS Stealth Jet Reveals Interesting Features",
    href: "/articles/china-j-xds-stealth-jet",
    date: "September 19, 2026",
    image: {
      src: img5,
      alt: "China's J-XDS stealth jet in flight against a blue sky",
    },
  },
];

interface LatestPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
  author: {
    name: string;
    avatar?: ImgSrc;
  };
}

const latestPosts: LatestPost[] = [
  {
    id: "davis-monthan-a-10c-inactivation",
    category: "Military Aviation",
    title: "Davis-Monthan AFB Inactivates its Last A-10C Thunderbolt II Units",
    excerpt:
      "The 355th Operations Group, 357th Fighter Squadron, 357th Fighter Generation Squadron, and…",
    href: "/articles/davis-monthan-a-10c-inactivation",
    date: "September 21, 2026",
    image: {
      src: img6,
      alt: "Two A-10 Thunderbolt II aircraft flying in formation",
    },
    author: {
      name: "Parth Satam",
      avatar: img38,
    },
  },
  {
    id: "denmark-f-35-greenland",
    category: "F-35",
    title: "Denmark Deploys F-35s to Greenland for the First Time",
    excerpt:
      "Two Royal Danish Air Force F-35A Lightning IIs landed at Kangerlussuaq Airport…",
    href: "/articles/denmark-f-35-greenland",
    date: "September 21, 2026",
    image: {
      src: img7,
      alt: "F-35A on the tarmac in Greenland with ground crew",
    },
    author: {
      name: "Parth Satam",
      avatar: img38,
    },
  },
  {
    id: "f-22-stealth-pods-underside",
    category: "Military Aviation",
    title: "F-22 Raptor Spotted Again With Stealth Pods and Unusually Colored Underside",
    excerpt:
      "New photos provide another look at an F-22A Raptor carrying the external…",
    href: "/articles/f-22-stealth-pods-underside",
    date: "September 21, 2026",
    image: {
      src: img8,
      alt: "F-22 Raptor underside showing stealth pods",
    },
    author: {
      name: "Stefano D'Urso",
      avatar: img39,
    },
  },
  {
    id: "a-10-final-weapons-school-sortie",
    category: "Military Aviation",
    title: "A-10 Thunderbolt II Flies Final Weapons School Training Sortie at Nellis AFB",
    excerpt:
      "The A-10C completed its final training sortie with the 66th Weapons Squadron…",
    href: "/articles/a-10-final-weapons-school-sortie",
    date: "September 20, 2026",
    image: {
      src: img9,
      alt: "A-10 Thunderbolt II aircraft parked on the ramp at Nellis AFB",
    },
    author: {
      name: "Stefano D'Urso",
      avatar: img40,
    },
  },
  {
    id: "treetop-thunderchiefs-f-105-vietnam",
    category: "Military History",
    title: "Treetop Thunderchiefs: How the F-105 Became a Low-Level Threat in Vietnam",
    excerpt: "Fast and agile at low altitudes, the F-105 gained new respect for…",
    href: "/articles/treetop-thunderchiefs-f-105-vietnam",
    date: "September 20, 2026",
    image: {
      src: img10,
      alt: "F-105 Thunderchief in flight",
    },
    author: {
      name: "Darrick Leiker",
      avatar: img41,
    },
  },
  {
    id: "finland-f-35-home-soil",
    category: "F-35",
    title: "Finland's F-35s Touch Down on Home Soil for the First Time",
    excerpt:
      "The first two F-35A Lightning IIs of the Finnish Air Force, which…",
    href: "/articles/finland-f-35-home-soil",
    date: "September 19, 2026",
    image: {
      src: img11,
      alt: "F-35A Lightning II landing head-on with mountains in background",
    },
    author: {
      name: "Parth Satam",
      avatar: img42,
    },
  },
  {
    id: "china-j-xds-stealth-jet-latest",
    category: "China",
    title: "New Image of China's J-XDS Stealth Jet Reveal Interesting Features",
    excerpt:
      "While the J-XDS was recently seen with a painted radome, an exhibition…",
    href: "/articles/china-j-xds-stealth-jet-latest",
    date: "September 19, 2026",
    image: {
      src: img12,
      alt: "China's J-XDS stealth jet in flight against a blue sky",
    },
    author: {
      name: "Parth Satam",
      avatar: img43,
    },
  },
  {
    id: "finland-joins-france-forward-deterrence",
    category: "Military Aviation",
    title: "Finland Joins France's Expanding Forward Deterrence Initiative",
    excerpt:
      "Finland has joined France's Forward Deterrence initiative, a framework intended to deepen…",
    href: "/articles/finland-joins-france-forward-deterrence",
    date: "September 18, 2026",
    image: {
      src: img13,
      alt: "Formation of fighter jets flying together",
    },
    author: {
      name: "James Gray",
      avatar: img44,
    },
  },
];

interface MilitaryAviationPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
  author?: {
    name: string;
    avatar?: ImgSrc;
  };
}

const militaryAviationFeatured: MilitaryAviationPost = {
  id: "davis-monthan-a-10c-inactivation-featured",
  category: "Military Aviation",
  title: "Davis-Monthan AFB Inactivates its Last A-10C Thunderbolt II Units",
  excerpt:
    "The 355th Operations Group, 357th Fighter Squadron, 357th Fighter Generation Squadron, and…",
  href: "/articles/davis-monthan-a-10c-inactivation",
  date: "September 21, 2026",
  image: {
    src: img18,
    alt: "Two A-10 Thunderbolt II aircraft flying in formation",
  },
  author: {
    name: "Parth Satam",
    avatar: img45,
  },
};

const militaryAviationList: MilitaryAviationPost[] = [
  {
    id: "german-navy-jsm-p-8a",
    category: "Military Aviation",
    title: "German Navy Eyes Joint Strike Missile for P-8A Poseidon",
    excerpt:
      "The integration would restore Germany's naval aviation long-range anti-ship strike capability, lost…",
    href: "/articles/german-navy-jsm-p-8a",
    date: "September 18, 2026",
    image: {
      src: img14,
      alt: "P-8A Poseidon taxiing on the runway",
    },
  },
  {
    id: "f-35-fms-saudi-arabia",
    category: "F-35",
    title: "U.S. Approves F-35 Foreign Military Sale to Saudi Arabia",
    excerpt: "The U.S. Department of State has approved a possible Foreign Military Sale…",
    href: "/articles/f-35-fms-saudi-arabia",
    date: "September 17, 2026",
    image: {
      src: img15,
      alt: "F-35 fighter jet banking against a blue sky",
    },
  },
  {
    id: "bae-shadow-ew-family",
    category: "Military Aviation",
    title: "BAE Systems Launches Shadow EW Family of Compact Electronic Warfare Systems",
    excerpt:
      "The new low-cost, software-defined Shadow EW systems are designed to bring electronic…",
    href: "/articles/bae-shadow-ew-family",
    date: "September 17, 2026",
    image: {
      src: img16,
      alt: "Fighter jet flying through clouds with electronic warfare pod",
    },
  },
  {
    id: "mountain-home-strike-eagles-nose-art",
    category: "Military Aviation",
    title: "Mountain Home Strike Eagles Rotate Home from Middle East Sporting New Nose Art",
    excerpt:
      "After deploying in March 2026, twelve 'MO' F-15E Strike Eagles touched down…",
    href: "/articles/mountain-home-strike-eagles-nose-art",
    date: "September 17, 2026",
    image: {
      src: img17,
      alt: "F-15E Strike Eagle crew and nose art collage",
    },
  },
];

interface DronePost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
  author?: {
    name: string;
    avatar?: ImgSrc;
  };
}

const dronesFeatured: DronePost = {
  id: "fq-42-vengeance-cca-f-35-f-15e",
  category: "Drones",
  title:
    "FQ-42 Vengeance CCA Flies Alongside F-35 Lightning II and F-15E Strike Eagle",
  excerpt:
    "One of the FQ-42 Collaborative Combat Aircraft deployed at Creech AFB has…",
  href: "/articles/fq-42-vengeance-cca-f-35-f-15e",
  date: "September 21, 2026",
  image: {
    src: img19,
    alt: "F-35 and F-15E flying alongside an FQ-42 Vengeance drone",
  },
  author: {
    name: "Stefano D'Urso",
    avatar: img46,
  },
};

const dronesList: DronePost[] = [
  {
    id: "fq-42-vengeance-cca-list",
    category: "Drones",
    title:
      "FQ-42 Vengeance CCA Flies Alongside F-35 Lightning II and F-15E Strike Eagle",
    excerpt:
      "One of the FQ-42 Collaborative Combat Aircraft deployed at Creech AFB has…",
    href: "/articles/fq-42-vengeance-cca-f-35-f-15e",
    date: "September 21, 2026",
    image: {
      src: img20,
      alt: "FQ-42 Vengeance drone in flight",
    },
  },
  {
    id: "mojave-stol-drone-list",
    category: "Drones",
    title:
      "Mojave STOL Drone Conducts First Battlefield Short-Field Operations in South Korea",
    excerpt:
      "The demonstration at a live-fire training range showcased the Mojave's ability to…",
    href: "/articles/mojave-stol-drone",
    date: "September 17, 2026",
    image: {
      src: img21,
      alt: "Mojave STOL drone flying over a forested hillside",
    },
  },
  {
    id: "anduril-yfq-44a-fury-air-to-ground",
    category: "Drones",
    title: "Anduril's YFQ-44A Fury Expands Its Weapons Options With Air-to-Ground Munitions",
    excerpt: "Anduril lit checked its YFQ-44A Fury CCA with various air-to-ground munitions, and…",
    href: "/articles/anduril-yfq-44a-fury-air-to-ground",
    date: "September 16, 2026",
    image: {
      src: img22,
      alt: "YFQ-44A Fury drone on the runway",
    },
  },
  {
    id: "boeing-lrip-mq-25-stingray",
    category: "Drones",
    title: "Boeing Awarded LRIP Contract for MQ-25 Stingray",
    excerpt: "The U.S. Navy has awarded Boeing a contract for the Lot 1…",
    href: "/articles/boeing-lrip-mq-25-stingray",
    date: "September 15, 2026",
    image: {
      src: img23,
      alt: "MQ-25 Stingray drone on an aircraft carrier deck",
    },
  },
];

interface AviationSafetyPost {
  id: string;
  category: string;
  title: string;
  href: string;
  date: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
  author: {
    name: string;
    avatar?: ImgSrc;
  };
}

const aviationSafetyPosts: AviationSafetyPost[] = [
  {
    id: "raf-hawk-t2-crash-raf-valley",
    category: "Aviation Safety",
    title: "Royal Air Force Hawk T2 Crash Near RAF Valley, Two Parachutes Seen",
    href: "/articles/raf-hawk-t2-crash-raf-valley",
    date: "September 23, 2026",
    image: {
      src: img24,
      alt: "RAF Hawk T2 jets flying near RAF Valley",
    },
    author: {
      name: "Kai Greet",
      avatar: img47,
    },
  },
  {
    id: "hawker-hunter-miss-demeanour-crash",
    category: "Aviation Safety",
    title: "Hawker Hunter Formerly Known As 'Miss Demeanour' Crashes off California",
    href: "/articles/hawker-hunter-miss-demeanour-crash",
    date: "September 23, 2026",
    image: {
      src: img25,
      alt: "Hawker Hunter jet painted in colorful livery in flight",
    },
    author: {
      name: "Kai Greet",
      avatar: img48,
    },
  },
  {
    id: "f-16-goes-down-spangdahlem",
    category: "Aviation Safety",
    title: "U.S. Air Force F-16 Goes Down at Spangdahlem Air Base",
    href: "/articles/f-16-goes-down-spangdahlem",
    date: "September 23, 2026",
    image: {
      src: img26,
      alt: "Smoke rising from a crash site at Spangdahlem Air Base",
    },
    author: {
      name: "Kai Greet",
      avatar: img49,
    },
  },
];

interface TroubledAreaPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
  author?: {
    name: string;
    avatar?: ImgSrc;
  };
}

const troubledAreasFeatured: TroubledAreaPost = {
  id: "ukraine-storm-shadow-license-uk",
  category: "Ukraine",
  title:
    "Ukraine Receives Storm Shadow Production License from UK in Exchange for Avenger AI Data",
  excerpt:
    "UK Prime Minister Keir Starmer announced Wednesday that Ukraine will receive a…",
  href: "/articles/ukraine-storm-shadow-license-uk",
  date: "August 26, 2026",
  image: {
    src: img31,
    alt: "Fighter jets carrying Storm Shadow cruise missiles",
  },
  author: {
    name: "James Gray",
    avatar: img50,
  },
};

const troubledAreasList: TroubledAreaPost[] = [
  {
    id: "china-j-xds-stealth-jet-troubled",
    category: "China",
    title: "New Image of China's J-XDS Stealth Jet Reveal Interesting Features",
    excerpt:
      "While the J-XDS was recently seen with a painted radome, an exhibition…",
    href: "/articles/china-j-xds-stealth-jet-latest",
    date: "September 19, 2026",
    image: {
      src: img27,
      alt: "China's J-XDS stealth jet in flight against a blue sky",
    },
  },
  {
    id: "italian-eurofighter-typhoon-saudi-airbase",
    category: "Aviation",
    title: "Italian Eurofighter Typhoon Struck In Houthi Attack On Saudi Airbase",
    excerpt:
      "The Italian MOD has just announced that its Italian Air Force Eurofighter…",
    href: "/articles/italian-eurofighter-typhoon-saudi-airbase",
    date: "September 19, 2026",
    image: {
      src: img28,
      alt: "Eurofighter Typhoon jet in flight",
    },
  },
  {
    id: "f-35-fms-saudi-arabia-troubled",
    category: "F-35",
    title: "U.S. Approves F-35 Foreign Military Sale to Saudi Arabia",
    excerpt: "The U.S. Department of State has approved a possible Foreign Military Sale…",
    href: "/articles/f-35-fms-saudi-arabia",
    date: "September 17, 2026",
    image: {
      src: img29,
      alt: "F-35 fighter jet banking against a blue sky",
    },
  },
  {
    id: "new-dukr-44-rescue-footage-iran",
    category: "Iran",
    title: "New DUKR-44 Rescue Footage Reveals More About Aircraft Used in Iran Operation",
    excerpt:
      "Newly declassified footage sheds new light on 10 minutes offers a closer…",
    href: "/articles/new-dukr-44-rescue-footage-iran",
    date: "September 13, 2026",
    image: {
      src: img30,
      alt: "Rescue helicopter footage still frame",
    },
  },
];

interface WeaponPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image: {
    src?: ImgSrc;
    alt: string;
  };
  author?: {
    name: string;
    avatar?: ImgSrc;
  };
}

const weaponsFeatured: WeaponPost = {
  id: "lockheed-pentagon-aim-260-jatm-featured",
  category: "Weapons",
  title: "Lockheed Martin and Pentagon Agree Framework to Ramp Up AIM-260 JATM Production",
  excerpt:
    "The agreement lays the foundation for future multi-year procurement of the…",
  href: "/articles/lockheed-pentagon-aim-260-jatm",
  date: "September 20, 2026",
  image: {
    src: img32,
    alt: "Fighter jets releasing flares during a training exercise",
  },
  author: {
    name: "Kai Greet",
    avatar: img51,
  },
};

const weaponsList: WeaponPost[] = [
  {
    id: "lockheed-pentagon-aim-260-jatm-list",
    category: "Weapons",
    title: "Lockheed Martin and Pentagon Agree Framework to Ramp Up AIM-260 JATM Production",
    excerpt:
      "The agreement lays the foundation for future multi-year procurement of the…",
    href: "/articles/lockheed-pentagon-aim-260-jatm",
    date: "September 20, 2026",
    image: {
      src: img33,
      alt: "AIM-260 JATM missile mounted under a fighter jet wing",
    },
  },
  {
    id: "lockheed-agm-158-flex-jassm",
    category: "Weapons",
    title: "Lockheed Martin Introduces AGM-158 FLEX Modular Airframe for JASSM Family",
    excerpt:
      "The new AGM-158 FLEX architecture is designed to accommodate different senior packages…",
    href: "/articles/lockheed-agm-158-flex-jassm",
    date: "September 19, 2026",
    image: {
      src: img34,
      alt: "AGM-158 JASSM cruise missile on display",
    },
  },
  {
    id: "agm-180-havoc-spear-missile-trials",
    category: "Weapons",
    title: "AGM-180 Havoc Spear Small Cruise Missile Undergoes New Trials",
    excerpt: "The AFSOC said the latest control evolution took place this spring within…",
    href: "/articles/agm-180-havoc-spear-missile-trials",
    date: "September 18, 2026",
    image: {
      src: img35,
      alt: "Small cruise missile in flight over water",
    },
  },
  {
    id: "sentinel-icbm-flight-test-assembled",
    category: "Weapons",
    title: "First Sentinel ICBM Fully Assembled for Planned 2027 Test Launch",
    excerpt:
      "An LGM-35A Sentinel intercontinental ballistic missile (ICBM) has been vertically stacked in…",
    href: "/articles/sentinel-icbm-flight-test-assembled",
    date: "September 17, 2026",
    image: {
      src: img36,
      alt: "LGM-35A Sentinel ICBM silo at sunset",
    },
  },
];


const AD_GAP = <div aria-hidden="true" className="h-[70px]" />;

type CardPost = {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  href: string;
  date: string;
  image: { src?: ImgSrc; alt: string };
  author?: { name: string; avatar?: ImgSrc };
};

function SectionHeading({
  title,
  className = "h-[52px] pt-[13px]",
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`ta-container ${className}`}>
      <h2 className="ta-section-title">{title}</h2>
    </div>
  );
}

/* ---------- Hero carousel ---------- */

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="w-full pb-10 lg:h-[440px] lg:pb-0">
      <div className="ta-container pt-5">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {heroSlides.map((slide, index) => (
              <article
                key={slide.id}
                aria-hidden={index !== active}
                className="flex w-full shrink-0 flex-col gap-6 lg:flex-row lg:gap-[30px]"
              >
                <Thumb
                  src={slide.image.src}
                  alt={slide.image.alt || slide.title}
                  href={slide.href}
                  sizes="(min-width: 1024px) 470px, 100vw"
                  preload={index === 0}
                  className="aspect-[470/282] w-full shrink-0 rounded-[6px] lg:h-[282px] lg:w-[470px]"
                />
                <div className="min-w-0 lg:w-[640px]">
                  <CategoryBadge category={slide.category} />
                  <h3 className="mt-3 text-[24px] leading-[30px] lg:text-[30px] lg:leading-[36px]">
                    <Link href={slide.href} className="ta-title !text-black hover:!text-ta-yellow">
                      {slide.title}
                    </Link>
                  </h3>
                  <PostMeta
                    author={slide.author}
                    date={slide.date}
                    dateColor="#696969"
                    className="mt-[13px]"
                  />
                  <p className="ta-excerpt mt-[13px] line-clamp-3 text-[16px] leading-[27.2px]">
                    {slide.excerpt}
                  </p>
                  <ReadMore href={slide.href} className="mt-[15px]" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-[10px] flex justify-center">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show story ${index + 1}: ${slide.title}`}
              aria-current={index === active}
              className={`flex h-4 w-4 items-center justify-center transition-opacity ${
                index === active ? "opacity-100" : "opacity-40 hover:opacity-100"
              }`}
            >
              <span className="block h-[7px] w-[7px] rounded-full bg-[#282828]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable card layouts ---------- */

/** Small horizontal item used in Military Aviation / Drones / Troubled Areas / Weapons. */
function ListPost({ post }: { post: CardPost }) {
  return (
    <article className="flex gap-4">
      <Thumb
        src={post.image.src}
        alt={post.image.alt}
        href={post.href}
        sizes="184px"
        className="h-[110px] w-[140px] shrink-0 rounded-[8px] sm:w-[184px]"
      />
      <div className="min-w-0 pt-[2px] lg:w-[334px]">
        <h3 className="text-[17px] leading-[25px] tracking-[-0.75px]">
          <Link href={post.href} className="ta-title">
            {post.title}
          </Link>
        </h3>
        <CategoryBadge category={post.category} className="mt-2" />
        <PostMeta date={post.date} className="mt-[5px]" />
        {post.excerpt ? (
          <p className="ta-excerpt mt-[5px] line-clamp-2 text-[15px] leading-[25.5px]">{post.excerpt}</p>
        ) : null}
        <ReadMore href={post.href} className="mt-[9px]" />
      </div>
    </article>
  );
}

/** Large featured card (image on top) used beside the list. */
function FeaturedPost({
  post,
  titleClass = "lg:text-[34px] lg:leading-[47px]",
}: {
  post: CardPost;
  titleClass?: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-[8px] pb-[32.5px] after:pointer-events-none after:absolute after:inset-0 after:rounded-[8px] after:border-[0.8px] after:border-[#88888826] after:content-['']">
      <Thumb
        src={post.image.src}
        alt={post.image.alt}
        href={post.href}
        sizes="(min-width: 1024px) 550px, 100vw"
        className="aspect-[550/330] w-full rounded-t-[8px]"
      />
      <div className="px-[28px] pt-4">
        <CategoryBadge category={post.category} />
        <h3 className={`mt-[15px] text-[26px] leading-[36px] tracking-[-1.47px] ${titleClass}`}>
          <Link href={post.href} className="ta-title">
            {post.title}
          </Link>
        </h3>
        <PostMeta author={post.author} date={post.date} className="mt-[17px]" />
        {post.excerpt ? (
          <p className="ta-excerpt mt-3 line-clamp-2 text-[14px] leading-[23.8px]">{post.excerpt}</p>
        ) : null}
        <ReadMore href={post.href} className="mt-[15px]" />
      </div>
    </article>
  );
}

/** Two-column block: featured card + list, in either order. */
function FeaturedBlock({
  featured,
  list,
  featuredSide,
  minHeight,
  titleClass,
}: {
  featured: CardPost;
  list: CardPost[];
  featuredSide: "left" | "right";
  minHeight: string;
  titleClass?: string;
}) {
  const listCol = (
    <div className="flex flex-col gap-5 lg:w-[534px] lg:pt-2">
      {list.map((post) => (
        <ListPost key={post.id} post={post} />
      ))}
    </div>
  );
  const featuredCol = (
    <div className="lg:w-[550px] lg:shrink-0">
      <FeaturedPost post={featured} titleClass={titleClass} />
    </div>
  );

  return (
    <section className={`w-full pb-10 lg:pb-0 ${minHeight}`}>
      <div className="ta-container pt-5">
        <div
          className={`flex flex-col gap-8 lg:flex-row lg:gap-[28px] ${
            featuredSide === "right" ? "lg:pl-[18px] lg:pr-[10px]" : "lg:pl-[10px] lg:pr-[18px]"
          }`}
        >
          {featuredSide === "left" ? (
            <>
              {featuredCol}
              {listCol}
            </>
          ) : (
            <>
              {listCol}
              {featuredCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 73" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="6" width="74" height="54" rx="5" stroke="#fff" strokeWidth="3" />
      <path d="M8 10l35 26 35-26" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="78" cy="52" r="15" fill="#ffcc00" />
      <path
        d="M71 52l5 5 9-10"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your newsletter provider / API route.
    setNewsletterEmail("");
  };

  return (
    <>
      <HeroSlider />

      {/* Popular Posts */}
      <SectionHeading title="Popular Posts" className="h-[46px] pt-[10px]" />
      <section className="w-full lg:h-[374px]">
        <div className="ta-container pb-[10px] pt-[25px] lg:px-[10px]">
          <div className="rounded-[3px] p-[18px] shadow-[0_0_15px_2px_rgba(0,0,0,0.07)] sm:p-[32px]">
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-[35px] md:grid-cols-2">
              {popularPosts.map((post) => (
                <article key={post.id} className="flex gap-4 sm:gap-[30px]">
                  <Thumb
                    src={post.image.src}
                    alt={post.image.alt}
                    href={post.href}
                    sizes="200px"
                    className="h-[96px] w-[140px] shrink-0 rounded-[8px] sm:h-[120px] sm:w-[200px]"
                  />
                  <div className="min-w-0 pt-[2px]">
                    <h3 className="text-[14px] leading-[20.8px] tracking-[-0.57px]">
                      <Link href={post.href} className="ta-title">
                        {post.title}
                      </Link>
                    </h3>
                    <CategoryBadge category={post.category} className="mt-[13px]" />
                    <PostMeta date={post.date} className="mt-[10px]" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="w-full">
        <div className="ta-container pb-[10px] pt-[13px]">
          <h2 className="ta-section-title">Latest Posts</h2>
          <div className="mt-[25px] grid grid-cols-1 gap-x-10 gap-y-[35px] sm:grid-cols-2 lg:grid-cols-4">
            {latestPosts.map((post) => (
              <article key={post.id}>
                <Thumb
                  src={post.image.src}
                  alt={post.image.alt}
                  href={post.href}
                  sizes="(min-width: 1024px) 254px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[254/152] w-full rounded-[8px]"
                />
                <CategoryBadge category={post.category} className="-mt-[18px]" />
                <h3 className="mt-3 text-[17px] leading-[24.65px] tracking-[-0.5px]">
                  <Link href={post.href} className="ta-title">
                    {post.title}
                  </Link>
                </h3>
                <p className="ta-excerpt mt-[15px] line-clamp-3 text-[14px] leading-[23.8px]">
                  {post.excerpt}
                </p>
                <PostMeta author={post.author} date={post.date} className="mt-[14px]" />
              </article>
            ))}
          </div>
          <div className="mt-[21px] flex justify-center">
            <Link href="/militaryaviation" className="ta-btn">
              View All
            </Link>
          </div>
        </div>
      </section>

      {AD_GAP}

      <SectionHeading title="Military Aviation" />
      <FeaturedBlock
        featured={militaryAviationFeatured}
        list={militaryAviationList}
        featuredSide="right"
        minHeight="lg:min-h-[900px]"
      />

      <SectionHeading title="Drones" />
      <FeaturedBlock
        featured={dronesFeatured}
        list={dronesList}
        featuredSide="left"
        minHeight="lg:min-h-[900px]"
      />

      {/* Aviation Safety / Air Crashes */}
      <section className="w-full">
        <div className="ta-container pb-[18px] pt-[13px]">
          <h2 className="ta-section-title">Aviation Safety / Air Crashes</h2>
          <div className="mt-[31px] grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-[8px]">
            {aviationSafetyPosts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-[9px] bg-[#fafafa] pb-[22.4px]"
              >
                <Thumb
                  src={post.image.src}
                  alt={post.image.alt}
                  href={post.href}
                  sizes="(min-width: 1024px) 348px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[348/209] w-full rounded-t-[9px]"
                />
                <div className="pl-[18px] pr-[17px]">
                  <CategoryBadge category={post.category} className="-mt-[18px]" />
                  <h3 className="mt-[11px] text-[17px] leading-[24.56px] tracking-[-0.5px]">
                    <Link href={post.href} className="ta-title">
                      {post.title}
                    </Link>
                  </h3>
                  <PostMeta author={post.author} date={post.date} className="mt-[13px]" />
                  <ReadMore href={post.href} className="mt-[17px]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {AD_GAP}

      <SectionHeading title="Troubled Areas" />
      <FeaturedBlock
        featured={troubledAreasFeatured}
        list={troubledAreasList}
        featuredSide="right"
        minHeight="lg:min-h-[875px]"
        titleClass="lg:text-[33px] lg:leading-[48px]"
      />

      {/* Newsletter */}
      <section className="w-full">
        <div className="ta-container pb-5 pt-10 lg:px-[10px]">
          <div className="flex flex-col gap-6 rounded-[15px] border-[0.8px] border-[#282828] bg-[#0c0c0c] p-8 lg:h-[201px] lg:flex-row lg:items-start lg:gap-0 lg:p-0">
            <div className="flex items-start gap-[31px] lg:pl-[61px]">
              <EmailIcon className="h-[73px] w-[100px] shrink-0 lg:mt-[49px]" />
              <div className="lg:mt-[52px] lg:w-[279px]">
                <h2 className="font-work text-[19px] font-bold leading-[24px] text-white">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-[10px] font-inter text-[16px] leading-[21px] text-white">
                  Our updates ensure you&apos;re informed, engaged, connected to the current
                  moment!
                </p>
              </div>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full flex-col lg:ml-auto lg:mr-[31px] lg:mt-[44px] lg:w-[582px]"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Email"
                aria-label="Email address"
                className="h-[43px] w-full rounded-[3px] border-[0.8px] border-black/25 bg-white px-[14px] font-oxygen text-[16px] text-[#282828] placeholder:text-[#888] focus:outline-none"
              />
              <button
                type="submit"
                className="mx-[2px] mt-[11px] h-[41px] rounded-[3px] bg-ta-amber px-[15px] font-oxygen text-[17px] font-medium leading-[17px] text-black transition-opacity hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <SectionHeading title="Weapons" />
      <FeaturedBlock
        featured={weaponsFeatured}
        list={weaponsList}
        featuredSide="left"
        minHeight="lg:min-h-[925px]"
      />
    </>
  );
}
