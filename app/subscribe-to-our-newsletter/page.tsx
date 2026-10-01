"use client";

import Link from "next/link";
import { useState } from "react";
import BotCheckSlot from "@/components/forms/BotCheckSlot";

const labelClass = "block font-oxygen text-[16px] font-bold leading-[19px] text-white";
const fieldClass =
  "mt-[15px] h-[43px] w-full rounded-[3px] border-[0.8px] border-black/25 bg-white px-[14px] font-oxygen text-[16px] text-[#282828] focus:outline-none focus:ring-2 focus:ring-ta-amber";

function Required() {
  return <span className="ml-[3px] font-normal text-[#d63637]">*</span>;
}

export default function SubscribeToNewsletterPage() {
  const [form, setForm] = useState({ email: "", name: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Wire this up to your newsletter provider / API route.
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify(form) });
    setStatus("sent");
  };

  return (
    <div className="w-full bg-white pb-[33px] pt-[10px]">
      <div className="ta-container">
        <h1 className="text-center font-encode text-[28px] font-bold leading-[28px] text-[#282828]">
          Subscribe to our Newsletter
        </h1>
        <p className="mt-5 text-center font-oxygen text-[18px] leading-[30.6px] text-[#282828]">
          Latest news &amp; expert insights on Aviation, Military Tech, &amp; Intelligence.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-[33px] max-w-[601px] rounded-[3px] bg-[#001325] px-[25px] pb-2 pt-5"
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
              className={fieldClass}
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
              className={fieldClass}
            />
          </div>

          <div className="mt-[29px] bg-[#002b45] px-[10px] py-3 text-center font-[Arial,sans-serif] text-[14px] leading-[23.8px] text-white">
            You can unsubscribe anytime. For more details, review our{" "}
            <Link href="/privacy-policy" className="font-medium text-ta-yellow hover:underline">
              Privacy Policy
            </Link>
            .
          </div>

          <BotCheckSlot className="mt-[25px]" />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="-mx-[18px] mt-[27px] h-[41px] w-[calc(100%+36px)] rounded-[3px] bg-ta-amber px-[15px] text-center font-oxygen text-[17px] font-bold leading-[17px] text-black transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting"
              ? "Subscribing..."
              : status === "sent"
                ? "Subscribed"
                : "Subscribe Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
