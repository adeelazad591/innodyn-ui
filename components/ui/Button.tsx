import { ArrowNewIcon } from "@/public/icons";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  className?: string;
  transparentIcon?: boolean;
  variant?: "default" | "light";
  isHeader?: boolean;
}

// function ArrowIcon({ transparent }: { transparent?: boolean }) {
//   return (
//     <span
//       className={`flex items-center justify-center w-11 h-11 rounded-full text-base  leading-none shrink-0 ml-1 ${
//         transparent
//           ? ""
//           : "bg-zinc-600/80 bg-[radial-gradient(ellipse_at_top,rgba(90,90,96,0.9)_0%,rgba(28,28,32,1)_100%)]"
//       }`}
//     >

//       <svg
//         width="14"
//         height="14"
//         viewBox="0 0 14 14"
//         fill="none"
//         aria-hidden
//         className="transition-transform duration-300 group-hover:-rotate-45"
//       >
//         <path
//           d="M2.5 7h9M8.5 3.5 12 7l-3.5 3.5"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//   );
// }
function ArrowIcon({ transparent }: { transparent?: boolean }) {
  return (
    <span
      className={`relative  flex items-center justify-center w-11 h-11 rounded-[50px] text-base leading-none shrink-0 ml-1 overflow-hidden ${
        transparent
          ? "bg-transparent"
          : "border border-white/6 bg-white/[0.11] before:absolute before:inset-0 before:rounded-[50px] before:bg-radial-[50%_100%_at_50%_0%] before:from-white/[0.42] before:to-white/0 before:content-['']"
      }`}
    >
      <div className="relative z-10 transition-transform duration-300 group-hover:-rotate-45">
        <ArrowNewIcon />
      </div>
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
  variant = "default",
  isHeader = false,
}: ButtonProps) {
  // const baseClass = `bg-black group text-[#F1F5F9] inline-flex items-center gap-2 pl-5 pr-3 py-3 rounded-full bg-radial-[at_50%_0%] from-zinc-600/80 to-zinc-900/95 hover:from-zinc-600/80 hover:to-zinc-600/80 border border-white/10  text-lg font-normal transition-colors ${className}`;
  const sharedClass =
    "group relative isolate inline-flex items-center gap-2 pl-5 pr-4 py-3 rounded-full overflow-hidden border border-white/6 text-neutral-100 text-lg font-normal transition-colors";

  const variantClass =
  variant === "light"
    ? "bg-white/[0.01] backdrop-blur-[10px] before:absolute before:inset-x-0 before:top-0 before:h-[80%] before:-z-10 before:rounded-full before:bg-radial-[50%_100%_at_50%_0%] before:from-white/[0.22] before:to-transparent before:content-['']"
    : "bg-white/[0.11] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-radial-[50%_75%_at_50%_0%] before:from-white/[0.42] before:via-white/[0.12] before:to-transparent before:content-['']";

  const baseClass = `${sharedClass} ${variantClass} ${className}`;
  const icon = isHeader ? (
    <div className="w-5 h-5 flex items-center overflow-hidden justify-center transition-transform duration-300 group-hover:-rotate-45">
      <ArrowNewIcon />
    </div>
  ) : (
    <ArrowIcon transparent={transparentIcon} />
  );
  if (type) {
    return (
      <button type={type} onClick={onClick} className={baseClass}>
        {label}
        {icon}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={baseClass}>
      {label}
      {icon}
    </a>
  );
}
