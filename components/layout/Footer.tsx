import Image from "next/image";

const NAV_COLS = [
  {
    heading: "Quick link",
    links: ["Home", "About us", "Compounds"],
  },
  {
    heading: "Quick link",
    links: ["Standard", "How it works", "Contact Us"],
  },
  {
    heading: "Legal",
    links: ["Terms & Conditions", "Privacy Policy", "FAQ's"],
  },
];

function SendIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="relative overflow-hidden section-bg rounded-[60px] rounded-bl-none rounded-br-none px-8 sm:px-12 lg:px-16 pt-14 pb-10">
        {/* Grid decoration — top-right corner, fades toward center */}
        <div
          aria-hidden
          className="footer-grid pointer-events-none absolute top-0 right-0 w-[55%] h-[60%]"
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8 mb-14">
            {/* Left — brand + email */}
            <div className="flex flex-col gap-7 max-w-112.5 mb-10">
              <Image
                src="/images/footer-logo.png"
                alt="Innodyn"
                width={200}
                height={160}
                className="h-40 w-50"
              />
              <p className="text-base font-normal text-zinc-400 leading-[1.75]">
                A science-first platform built around precision, disciplined
                presentation, and a more refined standard for informed
                customers.
              </p>
              {/* Email subscribe */}
              <div className="flex items-center bg-[#111111] border border-white/8 rounded-xl overflow-hidden">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 bg-transparent text-zinc-300 placeholder:text-zinc-600 text-base px-4 py-3.5 outline-none min-w-0"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="flex items-center justify-center w-12 h-12 m-1 rounded-lg bg-zinc-600/70 text-white hover:bg-zinc-500/80 transition-colors shrink-0"
                >
                  <SendIcon />
                </button>
              </div>
            </div>

            {/* Right — nav columns */}
            <div className="grid grid-cols-3 gap-6 lg:pl-12">
              {NAV_COLS.map((col, i) => (
                <div key={i}>
                  <h4 className="text-white text-base md:text-lg font-bold mb-6">
                    {col.heading}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-base md:text-lg"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/8 mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © 2024 All Rights Reserved Innodyn .
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "GitHub", Icon: GitHubIcon },
                { label: "Twitter", Icon: TwitterIcon },
                { label: "LinkedIn", Icon: LinkedInIcon },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-700/50 border border-white/8 text-zinc-300 hover:text-white hover:bg-zinc-600/60 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
