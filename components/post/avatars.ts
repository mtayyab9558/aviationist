import type { StaticImageData } from "next/image";
import ava1 from "@/public/Ava1.jpeg";
import ava2 from "@/public/Ava2.png";
import ava3 from "@/public/Ava3.png";
import ava4 from "@/public/Ava4.png";
import ava5 from "@/public/Ava5.png";
import ava6 from "@/public/Ava6.png";
import ava7 from "@/public/Ava7.png";
import ava8 from "@/public/Ava8.png";
import ava9 from "@/public/Ava9.jpeg";
import ava10 from "@/public/Ava10.png";
import ava11 from "@/public/Ava11.png";
import ava12 from "@/public/Ava12.png";
import ava13 from "@/public/Ava13.png";
import ava14 from "@/public/Ava14.png";
import ava15 from "@/public/Ava15.png";

const AVATARS: StaticImageData[] = [
  ava1, ava2, ava3, ava4, ava5, ava6, ava7, ava8,
  ava9, ava10, ava11, ava12, ava13, ava14, ava15,
];

// Fixed picks for the site's regular authors so each one keeps the same
// face on every page. Swap these for real author photos when you have them.
const AUTHOR_AVATARS: Record<string, StaticImageData> = {
  "Parth Satam": ava1,
  "Stefano D'Urso": ava3,
  "David Cenciotti": ava2,
  "Kai Greet": ava11,
  "James Gray": ava14,
  "Darrick Leiker": ava5,
  "Rin Sakurai": ava7,
  "Tom Demerly": ava8,
  "Levente Benedek": ava9,
  "Howard German": ava10,
  "Dario Leone": ava12,
};

/** Avatar for an author with no picture set: a fixed pick, else one chosen from the name. */
export function avatarFor(name: string): StaticImageData {
  const fixed = AUTHOR_AVATARS[name];
  if (fixed) return fixed;
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return AVATARS[hash % AVATARS.length];
}
