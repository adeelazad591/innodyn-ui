interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  className?: string;
  transparentIcon?: boolean;
}

function ArrowIcon({ transparent }: { transparent?: boolean }) {
  return (
    <span
      className={`flex items-center justify-center w-11 h-11 rounded-full text-base leading-none shrink-0 ml-1 ${
        transparent
          ? ""
          : "bg-zinc-600/80 bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)]"
      }`}
    >
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
  );
}

export default function Button({
  label,
  href = "#",
  onClick,
  type,
  className = "",
  transparentIcon,
}: ButtonProps) {
  const baseClass = `bg-black group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-radial-[at_50%_0%] from-zinc-600/80 to-zinc-900/95 hover:from-zinc-600/80 hover:to-zinc-600/80 border border-white/10 text-white text-lg font-normal transition-colors ${className}`;

  if (type) {
    return (
      <button type={type} onClick={onClick} className={baseClass}>
        {label}
        <ArrowIcon transparent={transparentIcon} />
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={baseClass}>
      {label}
      <ArrowIcon transparent={transparentIcon} />
    </a>
  );
}
