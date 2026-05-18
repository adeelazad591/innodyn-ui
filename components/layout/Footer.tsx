import Image from "next/image";

const NAV_COLS = [
  {
    heading: "Quick link",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Compounds", href: "/compounds" },
    ],
  },
  {
    heading: "Quick link",
    links: [
      { label: "Standard", href: "/standards" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "FAQ's", href: "/faqs" },
    ],
  },
];

function SendIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
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
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
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
        <div className="max-w-7xl mx-auto px-0 lg:px-0">
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
              <p className="text-base md:text-lg font-normal text-zinc-400 leading-[1.75]">
                A science-first platform built around precision, disciplined
                presentation, and a more refined standard for informed
                customers.
              </p>
              {/* Email subscribe */}
              <div className="flex items-center gap-4 w-full max-w-180">
                <div className="flex-1 h-16 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(80,80,84,0.45)_0%,rgba(12,12,14,1)_75%)] backdrop-blur-xl overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full h-full bg-transparent px-7 text-white placeholder:text-zinc-400 text-[20px] font-medium outline-none"
                  />
                </div>

                <button
                  type="button"
                  aria-label="Subscribe"
                  className="cursor-pointer w-16 h-16 rounded-2xl  bg-[radial-gradient(circle_at_top,rgba(120,120,124,0.9)_0%,rgba(60,60,64,0.95)_100%)] flex items-center justify-center text-white transition-all duration-300 hover:scale-[1.03]"
                >
                  <SendIcon className="w-8 h-8 -rotate-2" />
                </button>
              </div>
            </div>

            {/* Right — nav columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:pl-12">
              {NAV_COLS.map((col, i) => (
                <div key={i}>
                  <h4 className="text-white text-base md:text-lg font-bold mb-6">
                    {col.heading}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-zinc-400 hover:text-white transition-colors text-base md:text-lg"
                        >
                          {link.label}
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
            <p className="text-zinc-400 text-sm md:text-lg">
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
                  className="flex items-center justify-center w-12 h-12 bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)] rounded-full bg-zinc-700/50 border border-white/8 text-zinc-300 hover:text-white hover:bg-zinc-600/60  transition-all duration-300 hover:scale-[1.05]"
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
