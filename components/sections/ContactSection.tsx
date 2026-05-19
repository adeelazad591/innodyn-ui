"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { MailIcon, PhoneIcon } from "@/public/icons";
import Link from "next/link";

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
      <div className="max-w-350 mx-auto grid grid-cols-1 min-[1400px]:grid-cols-2 gap-5 items-stretch ">
        {/* Left — image panel */}
        <div className="pt-8 px-4.5 pb-4.5 flex flex-col overflow-hidden bg-[#28282847]/28 border border-[#5253545C]/36 rounded-[36px] ">
         {/* <Image
            src="/images/TaskStatistics2.png"
            alt="Innodyn platform interface"
            width={808}
            height={400}
            className=" -mr-4.5 self-end"
          /> */}
          <Image
            src="/images/TaskStatistics.png"
            alt="Innodyn platform interface"
            width={808}
            height={400}
            className=" h-auto w-auto -mr-4.5 self-end"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="py-6 px-4.5 flex flex-col text-neutral-400 text-xl font-medium gap-4.5 items-center bg-[#2828286B]/42 border border-[#52535447]/28 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center border border-white/6 rounded-2xl relative overflow-hidden">
                <div className="bg-[#57CCD266]/40 absolute w-10.5 h-10.5 rounded-full -top-5 -right-2 blur-[15px]" />
                <PhoneIcon />
              </div>

              <Link
                href="tel:+10000000000"
                className="hover:text-white transition-colors"
              >
                +1 (000) 000-0000
              </Link>
            </div>

            <div className="py-6 px-4.5 flex flex-col text-neutral-400 text-xl font-medium gap-4.5 items-center bg-[#2828286B]/42 border border-[#52535447]/28 rounded-2xl">
              <div className="w-12 h-12 flex items-center justify-center border border-white/6 rounded-2xl relative overflow-hidden">
                <div className="bg-[#F2C84C66]/40 absolute w-10.5 h-10.5 rounded-full -top-5 -right-2 blur-[15px]" />
                <MailIcon />
              </div>

              <Link
                href="mailto:hello@innodyn.com"
                className="hover:text-white transition-colors"
              >
                hello@innodyn.com
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="relative rounded-4xl overflow-hidden bg-[#0e0e0e] min-h-80 sm:min-h-100 min-[1400px]:min-h-120 order-2 min-[1400px]:order-1">
          <Image
            src="/images/frame-image-7.png"
            alt="Innodyn platform interface"
            fill
            sizes="(max-width: 1400px) 100vw, 50vw"
            className="object-contain object-center"
          />
        </div> */}

        {/* Right — contact form */}
        <div className="relative  rounded-4xl bg-[#111113] border border-white/[0.07] overflow-hidden p-6 sm:p-8 min-[1400px]:py-8 min-[1400px]:px-10.5 flex flex-col order-1 min-[1400px]:order-2">
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
            <p className="text-base sm:text-xl font-normal text-neutral-400 leading-[1.8] max-w-4xl mx-auto px-2">
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
              variant="light"
              className="mt-2 w-full justify-center rounded-full cursor-pointer"
              transparentIcon
            />
          </form>
        </div>
      </div>
    </section>
  );
}
