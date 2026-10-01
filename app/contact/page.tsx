"use client";

import { useState } from "react";
import BotCheckSlot from "@/components/forms/BotCheckSlot";

const labelClass = "block font-oxygen text-[16px] font-bold leading-[19px] text-white";
const fieldClass =
  "mt-[15px] w-full rounded-[3px] border-[0.8px] border-black/25 bg-white font-oxygen text-[16px] text-[#282828] focus:outline-none focus:ring-2 focus:ring-ta-amber";
const linkClass = "text-[#1e73be] hover:underline";

function Required() {
  return <span className="ml-[3px] font-normal text-[#d63637]">*</span>;
}

export default function ContactPage() {
  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Wire this up to your form endpoint / API route.
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    setStatus("sent");
  };

  return (
    <div className="w-full bg-white pb-[66px] pt-[10px]">
      <div className="ta-container">
        <h1 className="text-center font-encode text-[28px] font-bold leading-[28px] text-[#282828]">
          Contact Us
        </h1>
        <p className="mt-5 text-center font-oxygen text-[18px] leading-[30.6px] text-[#282828]">
          Let&apos;s get in touch. Our support team is always ready!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-[33px] max-w-[684px] rounded-[3px] bg-[#001325] px-[25px] pb-[7px] pt-5"
        >
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
              <Required />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={`${fieldClass} h-[43px] px-[14px]`}
            />
          </div>

          <div className="mt-[29px]">
            <label htmlFor="name" className={labelClass}>
              Name
              <Required />
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className={`${fieldClass} h-[43px] px-[14px]`}
            />
          </div>

          <div className="mt-[29px]">
            <label htmlFor="message" className={labelClass}>
              Message
              <Required />
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              className={`${fieldClass} h-[120px] resize-y p-[14px]`}
            />
          </div>

          <BotCheckSlot className="mt-[25px]" />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="-mx-[18px] mt-[27px] h-[41px] w-[calc(100%+36px)] rounded-[3px] bg-ta-amber px-[15px] text-center font-oxygen text-[17px] font-bold leading-[17px] text-black transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : status === "sent" ? "Sent" : "Submit"}
          </button>
        </form>

        {/* Contact info */}
        <div className="mt-[99px] space-y-[27px] font-oxygen text-[18px] leading-[30.6px] text-[#282828]">
          <p>
            <strong>Headquarter:</strong>
            <br />
            <strong>Address:</strong> DC Media Srls, via Rinaldo D&apos;Ami 20, 00127, Rome
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:contacts@theaviationist.com" className={linkClass}>
              contacts@theaviationist.com
            </a>
            <br />
            <strong>Phone:</strong>{" "}
            <a href="tel:+393428020729" className="hover:underline">
              +39 342 802 0729
            </a>
          </p>
          <p>
            <strong>US Office:</strong>
            <br />
            <strong>Address:</strong> 16192 Coastal Highway, County of Sussex, Lewes, DE &ndash;
            19958
            <br />
            <strong>Phone:</strong>{" "}
            <a href="tel:+12067479931" className="hover:underline">
              +1-206-747-9931
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:contacts@theaviationist.com" className={linkClass}>
              contacts@theaviationist.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
