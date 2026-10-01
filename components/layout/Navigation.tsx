"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import aviationist_logods from "@/public/aviationist_logods.png";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Military Aviation",
    href: "/militaryaviation",
    children: [
      { label: "Aircraft Carriers", href: "/aircraft-carriers" },
      { label: "Airshows", href: "/airshows" },
      { label: "F-104", href: "/f-104" },
      { label: "F-35", href: "/f-35" },
      { label: "Italian Air Force", href: "/italian-air-force" },
    ],
  },
  { label: "Helicopters", href: "/helicopters" },
  { label: "Drones", href: "/drones" },
  { label: "Global Hotspots", href: "/globalhotspots" },
  {
    label: "Explore",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Work with Us", href: "/work-with-us" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  { label: "Advertise with us", href: "/advertise-with-us" },
];

function isActive(item: NavItem, pathname: string | null) {
  if (!pathname) return false;
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href) return true;
  return item.children?.some((c) => c.href === pathname) ?? false;
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-ta-nav shadow-[0_4px_30px_rgba(0,0,0,0.07)]">
      <div className="mx-auto w-full max-w-[1280px] px-5">
        <nav className="flex h-[80px] items-center">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={aviationist_logods}
              alt="The Aviationist"
              className="h-[31px] w-auto"
              preload
            />
          </Link>

          {/* Desktop menu */}
          <ul className="ml-[20px] hidden h-full items-center lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item, pathname);
              return (
                <li key={item.label} className="group relative flex h-full items-center">
                  <Link
                    href={item.href}
                    className="flex h-full items-center whitespace-nowrap px-3 font-work text-[14px] font-bold leading-[21px] tracking-[-0.28px] text-white transition-colors duration-200 hover:text-ta-yellow"
                  >
                    <span
                      className={`relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-ta-yellow after:transition-[width] after:duration-200 after:content-[''] ${
                        active ? "after:w-full" : "after:w-0 group-hover:after:w-full"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.children ? (
                      <ChevronDown
                        className="ml-[3px] h-[14px] w-[14px] transition-transform duration-200 group-hover:-rotate-180"
                        strokeWidth={2.5}
                      />
                    ) : null}
                  </Link>

                  {item.children ? (
                    <ul className="invisible absolute left-0 top-[calc(100%-1px)] z-[100] w-[210px] rounded-[7px] bg-white py-[10px] opacity-0 shadow-[0_4px_30px_rgba(0,0,0,0.12)] transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block border-l-[2.4px] border-transparent px-5 py-[7px] font-encode text-[13px] font-medium leading-[16.25px] tracking-[-0.26px] text-[#282828] transition-colors hover:border-ta-red hover:bg-[#88888812] hover:text-ta-red"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>

          {/* Subscribe pill */}
          <Link
            href="/subscribe-to-our-newsletter"
            className="mx-[21.6px] hidden h-[37px] items-center whitespace-nowrap rounded-[3.4px] bg-ta-amber px-[10px] font-work text-[14px] font-bold leading-[21px] tracking-[-0.28px] text-[#0a0a0a] transition-opacity hover:opacity-85 lg:flex"
          >
            Subscribe to Newsletters
          </Link>

          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="ml-auto mr-[5px] flex h-[34px] w-5 items-center justify-center text-white transition-colors hover:text-ta-yellow"
          >
            <Search className="h-5 w-5" strokeWidth={2.25} />
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className="ml-4 flex items-center text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="border-t border-white/10 bg-ta-nav px-5 pb-5 lg:hidden">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-work text-[15px] font-bold text-white hover:text-ta-yellow"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 font-encode text-[14px] text-white/80 hover:text-ta-yellow"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link
            href="/subscribe-to-our-newsletter"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex h-[37px] items-center rounded-[3.4px] bg-ta-amber px-4 font-work text-[14px] font-bold text-[#0a0a0a]"
          >
            Subscribe to Newsletters
          </Link>
        </div>
      ) : null}
    </header>
  );
}
