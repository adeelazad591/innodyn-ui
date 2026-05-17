"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  const inputBase =
    "w-full bg-black/25 border border-white/[0.13] rounded-[10px] px-5 py-3.5 text-base text-white placeholder-zinc-500 outline-none focus:border-white/25 transition-colors duration-200";

  return (
    <section className="py-12 lg:py-20 px-4 md:px-10 min-[1400px]:px-30">
      <div className="max-w-350 mx-auto grid grid-cols-1 min-[1400px]:grid-cols-2 gap-5 items-stretch">
        {/* Left — image panel */}
        <div className="relative rounded-4xl overflow-hidden bg-[#0e0e0e] min-h-80 sm:min-h-100 min-[1400px]:min-h-120 order-2 min-[1400px]:order-1">
          <Image
            src="/images/frame-image-7.png"
            alt="Innodyn platform interface"
            fill
            sizes="(max-width: 1400px) 100vw, 50vw"
            className="object-contain object-center"
          />
        </div>

        {/* Right — contact form */}
        <div className="relative rounded-4xl bg-[#111113] border border-white/[0.07] overflow-hidden p-6 sm:p-8 min-[1400px]:p-10 flex flex-col order-1 min-[1400px]:order-2">
          <div
            aria-hidden
            className="absolute top-0 right-0 w-2/3 h-48 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(120,120,130,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 mb-8">
            <h2 className="text-[18px] sm:text-[24px] lg:text-[38px] xl:text-[48px] font-bold leading-tight tracking-tight mb-6">
              Let&apos;s{" "}
              <span className="text-silver-gradient font-serif italic">
                talk.
              </span>
            </h2>
            <p className="text-base sm:text-xl font-normal text-zinc-400 leading-[1.8] max-w-4xl mx-auto px-2">
              Our team is committed to maintaining the same level of discipline
              in communication that defines every other part of the company.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-3 flex-1"
          >
            <div className="grid grid-cols-2 gap-3">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className={inputBase}
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className={inputBase}
              />
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className={inputBase}
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className={inputBase}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave us a message..."
              rows={5}
              className={`${inputBase} resize-y min-h-30`}
            />

            <Button
              type="submit"
              label="Send Message"
              className="mt-2 w-full justify-center rounded-full cursor-pointer"
              transparentIcon
            />
          </form>
        </div>
      </div>
    </section>
  );
}
