import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const demographics = [
  { flag: "🇺🇸", country: "United States", value: "66%" },
  { flag: "🇬🇧", country: "United Kingdom", value: "7.7%" },
  { flag: "🇨🇦", country: "Canada", value: "3.2%" },
  { flag: "🇦🇺", country: "Australia", value: "3%" },
];

const trafficChannels = [
  { label: "Organic search", value: 49 },
  { label: "Direct + Discover + News", value: 40 },
  { label: "Social", value: 7.2 },
  { label: "Referral", value: 2.3 },
];

const socialStats = [
  { name: "Twitter", stat: "75k + followers on Twitter" },
  { name: "Youtube", stat: "10k subscribers on Youtube" },
  { name: "Instagram", stat: "260k + followers on Instagram" },
  { name: "Facebook", stat: "161k + followers on Facebook" },
];

/* ------------------------------------------------------------------ */
/* Building blocks (sizes measured from theaviationist.com)            */
/* ------------------------------------------------------------------ */

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-center font-work text-[28px] font-bold leading-[28px] text-[#282828] ${className}`}
    >
      {children}
    </h2>
  );
}

const cardTitle = "text-center font-work text-[24px] font-medium leading-[24px] text-[#282828]";
const featureTitle = "text-center font-work text-[22px] font-bold leading-[22px] text-[#282828]";
const featureText = "mt-[27px] text-center font-work text-[21px] font-light leading-[33px] text-[#282828]";

function XMark() {
  return <span className="text-[28px] font-bold leading-none text-black">𝕏</span>;
}
function YoutubeMark() {
  return (
    <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] bg-[#FF0000]">
      <span
        className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent border-l-white"
        aria-hidden="true"
      />
    </span>
  );
}
function InstagramMark() {
  return (
    <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]">
      <span className="h-[18px] w-[18px] rounded-[6px] border-2 border-white" aria-hidden="true" />
    </span>
  );
}
function FacebookMark() {
  return (
    <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-[22px] font-bold text-white">
      f
    </span>
  );
}

const socialMarks: Record<string, React.ReactNode> = {
  Twitter: <XMark />,
  Youtube: <YoutubeMark />,
  Instagram: <InstagramMark />,
  Facebook: <FacebookMark />,
};

/** Desktop screenshot with a phone overlapping its corner, as on the live page. */
function MockupPlaceholder({ label, phoneSide }: { label: string; phoneSide: "left" | "right" }) {
  return (
    <div className="relative w-full max-w-[530px] pb-[60px]">
      <div className="flex aspect-[530/249] w-full items-center justify-center rounded-[7px] border-[1.6px] border-[#282828] bg-[#f2f2f2]">
        <span className="px-6 text-center font-work text-xs text-[#999]">{label}</span>
      </div>
      <div
        className={`absolute bottom-0 flex h-[249px] w-[127px] items-center justify-center rounded-[12px] border-[2.4px] border-[#282828] bg-white ${
          phoneSide === "right" ? "right-0" : "left-0"
        }`}
      >
        <span className="font-work text-[10px] text-[#999]">Mobile</span>
      </div>
    </div>
  );
}

function FeatureCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[550px] rounded-[14px] border-[0.8px] border-[#282828] p-[14px] pb-6">
      <h3 className={featureTitle}>{title}</h3>
      <p className={featureText}>{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AdvertiseWithUsPage() {
  return (
    <div className="w-full bg-white pb-[77px] pt-6">
      <div className="ta-container">
        <Heading>Advertise With Us</Heading>
        <p className="mx-auto mt-[54px] max-w-[780px] text-center font-work text-[16px] leading-[29px] text-[#282828]">
          A leading military aviation website renowned for authoritative content and frequently
          cited. With detailed coverage and expert analysis, The Aviationist attracts a worldwide
          audience, becoming a go-to resource for aviation, defense, and intelligence news.
        </p>

        {/* Stat cards */}
        <div className="mt-[30px] flex flex-col items-center justify-center gap-5 md:flex-row md:items-start">
          <div className="w-full max-w-[360px] rounded-[24px] border-[0.8px] border-[#8f8f8f] p-[14px] md:h-[229px]">
            <h3 className={cardTitle}>Demographic</h3>
            <ul className="mx-auto mt-[23px] max-w-[291px] space-y-[10px]">
              {demographics.map((d) => (
                <li
                  key={d.country}
                  className="flex items-center justify-between font-work text-[16px] leading-[24px] text-[#282828]"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true">{d.flag}</span>
                    {d.country}
                  </span>
                  <span className="font-bold">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-[425px] rounded-[24px] border-[0.8px] border-[#8f8f8f] p-[14px] md:mt-1 md:h-[221px]">
            <h3 className={cardTitle}>Traffic Acquisition Channel</h3>
            <div className="mx-auto mt-[23px] flex max-w-[286px] flex-col gap-[10px]">
              {trafficChannels.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div
                    className="h-[26px] shrink-0 rounded-[2px] bg-[#d1ca03] px-2 font-work text-[13px] font-bold leading-[26px] text-black"
                    style={{ width: `${Math.max(48, c.value * 2.2)}px` }}
                  >
                    {c.value}%
                  </div>
                  <span className="font-work text-[14px] text-[#282828]">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full max-w-[191px] flex-col items-center rounded-[18px] border-[0.8px] border-[#8f8f8f] p-[14px] text-center md:mt-[5px] md:h-[219px]">
            <h3 className="font-work text-[24px] font-medium leading-[20px] text-[#282828]">
              Monthly Page Views
            </h3>
            <p className="mt-[23px] font-work text-[30px] font-medium leading-[51px] text-[#d1ca03]">
              1.2 Million
            </p>
            <svg
              className="mt-5 h-[60px] w-[60px] text-[#282828]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="13" rx="1.5" />
              <path d="M8 21h8M12 17v4" />
              <circle cx="15.5" cy="9.5" r="3" />
              <path d="M15.5 8v1.5l1 1" />
            </svg>
          </div>
        </div>

        <p className="mx-auto mt-[100px] max-w-[780px] text-center font-work text-[16px] leading-[29px] text-[#282828]">
          At The Aviationist, our platform attracts a global audience with 1.2 million page views
          per month, <strong>totaling 12 million views</strong> annually. Traffic is driven largely
          by <strong>organic search (49%)</strong>, alongside 40% from direct, discover, and news
          channels, with 7.2% from social and 2.3% from referral sources. These numbers highlight
          the high engagement and visibility your brand can achieve through our advertising
          opportunities.
        </p>

        {/* Social Media Reach */}
        <Heading className="mt-[93px]">Social Media Reach</Heading>
        <div className="mx-auto mt-[53px] grid max-w-[937px] grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-[65px]">
          {socialStats.map((s) => (
            <div key={s.name} className="flex items-center gap-3">
              {socialMarks[s.name]}
              <span className="font-work text-[14px] font-medium leading-[18px] text-[#282828]">
                {s.stat}
              </span>
            </div>
          ))}
        </div>

        {/* Lets Work Together */}
        <Heading className="mt-[103px]">Lets Work Together</Heading>

        <div className="mt-[62px] flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:px-5">
          <MockupPlaceholder label="Website desktop mockup: banner ad placement" phoneSide="right" />
          <FeatureCard title="Banner’s & Skin’s">
            Elevate your brand&apos;s visibility with premium banner and skin placements that
            captivate our audience of aviation professionals. These high-impact ad spaces provide
            maximum exposure, ensuring your message stands out on our most trafficked pages, making
            them ideal for brands looking to stay top of mind.
          </FeatureCard>
        </div>

        <div className="mt-[40px] flex flex-col items-center gap-10 md:flex-row-reverse md:items-start md:justify-between md:px-5">
          <MockupPlaceholder label="Article desktop mockup: sponsored post placement" phoneSide="right" />
          <FeatureCard title="Sponsored Posts">
            Showcase your brand&apos;s story through sponsored posts that resonate with our global
            aviation community. Our team will collaborate with you to create impactful content,
            positioning your brand as a key player in the industry and driving meaningful
            engagement.
          </FeatureCard>
        </div>

        <div className="mt-[40px] flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:px-5">
          <MockupPlaceholder label="Article desktop mockup: newsletter ad placement" phoneSide="left" />
          <FeatureCard title="Newsletter’s">
            Reach our highly engaged audience through newsletter sponsorships that deliver your
            brand directly to 14K subscribers. With targeted placements, you&apos;ll connect with
            aviation enthusiasts and decision-makers, keeping your brand front and center with key
            industry players.
          </FeatureCard>
        </div>

        {/* Let's get in touch */}
        <div className="mt-[114px] text-center">
          <Heading>Let&apos;s get in touch</Heading>
          <Link
            href="/contact"
            className="mt-[25px] inline-flex h-[43px] items-center rounded-[32px] border-[2.4px] border-[#ffda00] bg-[#ffda00] px-6 font-work text-[17px] font-bold leading-[14px] text-[#020202] transition-colors hover:bg-transparent"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
