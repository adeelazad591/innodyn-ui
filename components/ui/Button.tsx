interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ label, href = "#", onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-radial from-zinc-600/60 to-zinc-900/95 hover:from-zinc-600/80 hover:to-zinc-600/80 border border-white/10 text-white text-lg font-normal transition-colors"
    >
      {label}
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-600/80 text-base leading-none shrink-0">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden
          className="transition-transform duration-300 group-hover:-rotate-45"
        >
          <path
            d="M2.5 7h9M8.5 3.5 12 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
