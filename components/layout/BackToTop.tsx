"use client";

import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";

// Matches the live site's #back-top: 40px dark square, fades in after scrolling.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-[3px] bg-[#191c20] text-white transition-all duration-300 hover:bg-ta-red ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <ChevronsUp className="h-4 w-4" strokeWidth={2.5} />
    </button>
  );
}
