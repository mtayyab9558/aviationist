import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
/* Files live in /public/About/ and are referenced by plain string path. */

interface Figure {
  src: string;
  alt: string;
  caption: string;
}

const figures: Figure[] = [
  {
    src: "/About/A1.jpeg",
    alt: "Live on Rai 1, 2023",
    caption:
      "Live on Rai 1 during the airshow marking the 100th anniversary of the Italian Air Force, 2023.",
  },
  {
    src: "/About/A2.jpg",
    alt: "Rai 1 broadcast, Rivolto",
    caption:
      "Screenshots from the Rai 1 broadcast of the Frecce Tricolori's 60th anniversary, from Rivolto.",
  },
  {
    src: "/About/A3.jpg",
    alt: "Valore Tricolore Airshow, 2019",
    caption: "Live coverage of the Valore Tricolore Airshow, 2019.",
  },
  {
    src: "/About/A4.jpg",
    alt: "Punta Marina Airshow, 2018",
    caption: "Live broadcast for the Punta Marina Airshow on Rai 1, 2018.",
  },
  {
    src: "/About/A5.jpg",
    alt: "Grosseto Airshow, 2017",
    caption: "Screenshots from the Rai 1 live broadcast of the Grosseto Airshow, 2017.",
  },
];

interface LinkedImage {
  src: string;
  alt: string;
  href: string;
}

const videoImages: LinkedImage[] = [
  { src: "/About/A6.jpg", alt: "Diretta Rivolto", href: "https://www.youtube.com/watch?v=PKPANNISUSE" },
  { src: "/About/A7.jpg", alt: "TG5 interview", href: "https://www.youtube.com/watch?v=5KkJuCaMJq8" },
  { src: "/About/A8.jpg", alt: "RaiNews24", href: "https://www.youtube.com/watch?v=5KkJuCaMJq8" },
  { src: "/About/A9.jpg", alt: "RaiNews on MH370", href: "https://youtu.be/oTWcmgsK1lg" },
];

const contributors = [
  "Stefano D'Urso – Italy",
  "Jacek Siminski – Poland",
  "Tom Demerly – US",
  "Kai Greet – UK",
  "Jamie Gray – UK",
  "Andrew Stover – US",
  "Darrick Leiker – US",
  "Parth Satam – India",
  "Rin Sakurai – Japan",
  "Elia Silvestris – Italy",
];

const photographers = ["Tony Lovelock – UK", "Giovanni Maduli – Italy", "Alessandro Fucito – Italy"];

/* ------------------------------------------------------------------ */
/* Building blocks (styles measured from theaviationist.com/about)     */
/* ------------------------------------------------------------------ */

const linkClass = "text-[#1e73be] hover:underline";

function PullQuote({ children, cite }: { children: React.ReactNode; cite: string }) {
  return (
    <blockquote className="relative mb-[27px] px-[27px]">
      <span
        aria-hidden="true"
        className="absolute -top-[4px] left-0 font-oxygen text-[45px] leading-[45px] text-ta-red"
      >
        &ldquo;
      </span>
      <p className="font-encode text-[18px] font-bold leading-[27px] text-[#282828]">
        &ldquo;{children}&rdquo; &ndash; <em>{cite}</em>
      </p>
    </blockquote>
  );
}

function FigureBlock({ figure }: { figure: Figure }) {
  return (
    <figure className="mb-[27px] mt-[18px] w-full max-w-[460px]">
      <div className="relative aspect-[460/269] w-full overflow-hidden bg-[#f2f2f2]">
        <Image src={figure.src} alt={figure.alt} fill sizes="460px" className="object-cover" />
      </div>
      <figcaption className="pt-[5px] font-encode text-[13px] leading-[22.1px] text-[#282828]">
        {figure.caption}
      </figcaption>
    </figure>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <div className="w-full bg-white pb-[80px]">
      <div className="mx-auto max-w-[1280px] px-5 pt-10">
        <nav
          aria-label="Breadcrumb"
          className="font-encode text-[13px] leading-[19.5px] text-[#282828]"
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-[6px]">&gt;</span>
          <span>About Us</span>
        </nav>

        <h1 className="mt-3 font-encode text-[34px] font-bold leading-[42px] text-[#282828] sm:text-[40px] sm:leading-[48px]">
          About Us
        </h1>
      </div>

      <div className="mx-auto mt-5 max-w-[852px] px-4 font-oxygen text-[18px] leading-[30.6px] text-[#282828]">
        <PullQuote cite="Wired's Danger Room">Ace aviation reporter David Cenciotti&hellip;</PullQuote>

        <div className="mb-[27px] space-y-[27px]">
          <p>
            The Aviationist is run by David Cenciotti (
            <a href="mailto:cenciotti@theaviationist.com" className={linkClass}>
              cenciotti@theaviationist.com
            </a>
            ), a journalist based in Rome, Italy, who founded the site in 2006. In the years since,
            it has grown into one of the most widely cited military aviation publications online,
            regularly referenced by outlets including the Huffington Post, Al Jazeera, Al Arabiya,
            the Independent, the Daily Mail, the New York Times, Corriere della Sera, Business
            Insider, Stern, and Der Spiegel.
          </p>
          <p>
            You can read more about David on his page on{" "}
            <ExtLink href="https://en.wikipedia.org/wiki/David_Cenciotti">Wikipedia</ExtLink>.
          </p>
        </div>

        <PullQuote cite="C.J. Chivers, The New York Times Investigations Desk & Magazine">
          a living library of aircraft knowledge
        </PullQuote>

        <div className="mb-[27px] space-y-[27px]">
          <p>
            Born in 1975, Cenciotti is a private pilot and a graduate in Computer Engineering who
            served as a second lieutenant in the Italian Air Force.
          </p>
          <p>
            Writing professionally since 1996, he has covered aviation, defense, intelligence, and
            cyber security for major outlets across the U.S. and Europe. His reporting has taken
            him to the U.S., Europe, and Australia, and he has flown in several combat aircraft
            with different air forces.
          </p>
        </div>

        <PullQuote cite="Gizmodo">has strong credentials</PullQuote>

        <div className="mb-[27px] space-y-[27px]">
          <p>
            His work has appeared in publications including Air Forces Monthly, Revista Força
            Aérea, Combat Aircraft, RID, VICE News, Gizmodo, and War Is Boring, and he is a
            frequent guest on television and radio.
          </p>
        </div>

        <PullQuote cite="SeattlePI">no sensationalism or pandering</PullQuote>

        <div className="mb-[27px] space-y-[27px]">
          <p>
            Since January 2013, David has been a featured contributor to Business Insider&apos;s
            Military &amp; Defense section — read the archive of{" "}
            <ExtLink href="http://www.businessinsider.com/author/david-cenciotti">
              his work on Business Insider
            </ExtLink>
            .
          </p>
          <p>
            He has authored five books, including the bestselling &ldquo;Frecce Tricolori &ndash;
            an exciting 50 year flight,&rdquo; the Italian Air Force&apos;s official book marking
            the 50th anniversary of its aerobatic display team, published by DeAgostini in 2010.
          </p>
        </div>

        <PullQuote cite="Wired's Danger Room">rivals ace Aviation Week reporter Bill Sweetman</PullQuote>

        <div className="mb-[27px] space-y-[27px]">
          <p>
            Alongside journalism, he works as an information security and cloud networking
            professional, holding ISO 27001 Lead Auditor and ITIL v3 certifications among others.
            The views expressed on the site are his own and do not reflect those of his employer.
          </p>
        </div>

        <PullQuote cite="Bruce Schneier">consistently had the best analysis</PullQuote>

        <div className="mb-[27px] space-y-[27px]">
          <p>
            You can follow David on{" "}
            <ExtLink href="https://twitter.com/cencio4">
              <strong>Twitter</strong>
            </ExtLink>
            , <ExtLink href="https://www.facebook.com/TheAviationist">Facebook</ExtLink>,{" "}
            <ExtLink href="https://www.instagram.com/theaviationist/">
              <strong>Instagram</strong>
            </ExtLink>
            , <ExtLink href="https://pinterest.com/theaviationist/">Pinterest</ExtLink>.
          </p>
          <p>
            He has provided live expert commentary during Italian airshows broadcast on Rai 1 in
            2017, 2018, 2019, 2021 (for the 60th anniversary of the Frecce Tricolori), and 2023
            (the Italian Air Force&apos;s centennial airshow at Pratica di Mare).
          </p>
        </div>

        {figures.map((figure) => (
          <FigureBlock key={figure.caption} figure={figure} />
        ))}

        <div className="mb-[27px]">
          <p className="mb-[27px]">Click on the thumbnails below to watch some of his TV interviews.</p>
          <div className="flex flex-wrap gap-[5px]">
            {videoImages.map((v) => (
              <a
                key={v.href + v.alt}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-[96px] w-[128px] overflow-hidden bg-[#f2f2f2]"
              >
                <Image
                  src={v.src}
                  alt={v.alt}
                  fill
                  sizes="128px"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[90px]">
          <p className="font-bold">Editorial Team:</p>
          <p className="mt-[22px]">
            Below is a list of contributors who help keep this site updated with pictures,
            reports, tips, and suggestions.
          </p>

          <p className="mt-[31px] font-bold">Contributors:</p>
          <ul className="mt-[22px] list-inside list-[circle] space-y-[9px]">
            {contributors.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <p className="mt-[31px] font-bold">Photographers:</p>
          <ul className="mt-[22px] list-inside list-[circle] space-y-[9px]">
            {photographers.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <p className="mt-[27px]">
          If there are any questions you may contact DC Media Srls, Via Rinaldo D&apos;Ami 20,
          00127, Rome (VAT IT12871451006), by phone at{" "}
          <a href="tel:+393428020729" className={linkClass}>
            +39 342 802 0729
          </a>{" "}
          or by email at{" "}
          <a href="mailto:contacts@theaviationist.com" className={linkClass}>
            contacts@theaviationist.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
