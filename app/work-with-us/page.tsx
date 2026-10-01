import Link from "next/link";
import Image from "next/image";
import workImage from "@/public/Work/W1.png";

export default function WorkWithUsPage() {
  return (
    <div className="w-full bg-white pb-[100px] pt-[27px] lg:pb-[152px]">
      <div className="ta-container">
        <h1 className="text-center font-inter text-[40px] font-bold leading-[44px] text-[#06193e] sm:text-[52px] sm:leading-[52px]">
          Work with Us
        </h1>

        <div className="mt-12 flex flex-col items-center gap-12 lg:mt-[83px] lg:flex-row lg:items-start lg:gap-[72px] lg:pl-[55px]">
          {/* Text */}
          <div className="lg:w-[464px] lg:shrink-0 lg:pt-[22px]">
            <p className="font-inter text-[18px] leading-[30.6px] text-[#282828]">
              The Aviationist is a leading source for military aviation, defense, and intelligence
              news, known for its in-depth coverage and expert analysis. Our content reaches a
              global audience, making us a trusted, independent, authoritative resource for
              aviation enthusiasts, professionals, and industry insiders.
            </p>
            <p className="mt-[27px] font-inter text-[18px] leading-[30.6px] text-[#282828]">
              We&apos;re always looking for passionate contributors who share our love for
              aviation and want to help us create engaging, informative stories on the topics we
              cover daily. If you have a knack for writing and a keen interest in the world of
              aviation, we&apos;d love to see your work and discuss potential opportunities to
              collaborate.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex h-[58px] items-center rounded-[12px] border-4 border-white bg-[#001325] px-[18px] font-inter text-[19px] font-medium leading-[14px] text-white transition-opacity hover:opacity-90"
            >
              Click Here to Apply
            </Link>
          </div>

          {/* Promo graphic */}
          <div className="relative aspect-[528/582] w-full max-w-[528px] overflow-hidden bg-[#f2f2f2] lg:w-[528px]">
            <Image
              src={workImage}
              alt="Work with us — The Aviationist"
              fill
              sizes="(min-width: 1024px) 528px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
