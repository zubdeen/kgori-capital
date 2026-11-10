type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronDown({ className = "h-3.5 w-3.5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Plus({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function Close({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Phone({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13 11 21 19.4 21a1.5 1.5 0 0 0 1.6-1.5v-2a1 1 0 0 0-.8-1l-3.5-.7a1 1 0 0 0-1 .4l-.9 1.2a14.6 14.6 0 0 1-6.2-6.2l1.2-.9a1 1 0 0 0 .4-1L9.5 3.8a1 1 0 0 0-1-.8Z" />
    </svg>
  );
}

export function Mail({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function MapPin({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Download({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 3v12M7 11l5 5 5-5M4 20h16" />
    </svg>
  );
}

export function ChatIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H4l2-3.2A8.5 8.5 0 1 1 21 12Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="2" />
    </svg>
  );
}

export function SendIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" />
      <path d="m10 13 5-5" />
    </svg>
  );
}

export function LinkedIn({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.6 8.75 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.04-3.34-2.05 0-2.36 1.6-2.36 3.24V21h-4V9Z" />
    </svg>
  );
}

export function YouTube({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...props}>
      <path d="M21.6 7.2s-.2-1.4-.8-2c-.75-.8-1.6-.8-2-.85C15.9 4.1 12 4.1 12 4.1s-3.9 0-6.8.25c-.4.05-1.25.05-2 .85-.6.6-.8 2-.8 2S2.2 8.9 2.2 10.6v1.6c0 1.7.2 3.4.2 3.4s.2 1.4.8 2c.75.8 1.75.77 2.2.86 1.6.15 6.8.2 6.8.2s3.9 0 6.8-.25c.4-.05 1.25-.05 2-.85.6-.6.8-2 .8-2s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4ZM10 14.6V8.9l5.2 2.85L10 14.6Z" />
    </svg>
  );
}

export function UserIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function UsersIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M9 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.6a3 3 0 0 1 0 5.8" />
      <path d="M17.5 14.2A5.5 5.5 0 0 1 21 19.5" />
    </svg>
  );
}

export function BuildingIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M4 21V6.5L11 3v18" />
      <path d="M11 21h9V10.5L11 6.5" />
      <path d="M2.5 21h19" />
      <path d="M7 9v.01M7 13v.01M7 17v.01M15 12.5v.01M15 16.5v.01" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function CompassIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 5-5 2.2 2.2-5 5-2.2Z" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 3l7 2.8v5.6c0 4.5-3 7.9-7 9.6-4-1.7-7-5.1-7-9.6V5.8L12 3Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function ScaleIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 3.5V21M7 21h10M4 7.5h16" />
      <path d="M7 7.5 4 13.5h6L7 7.5Z" />
      <path d="M17 7.5l-3 6h6l-3-6Z" />
    </svg>
  );
}

export function LeafIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M4.5 20C4.5 12 10 5.5 20 4c1 10-4.5 16-12.5 16h-3Z" />
      <path d="M4.5 20c3-4.3 6.8-7.2 11-9" />
    </svg>
  );
}

export function TargetIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" />
    </svg>
  );
}

export function ChartIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M4 20V4M4 20h16" />
      <path d="m7.5 15 4-4.5 3 3 4.5-5.5" />
    </svg>
  );
}

export function FileIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

export function ClockIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.6 2.1" />
    </svg>
  );
}

export function LockIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <rect x="4" y="10" width="16" height="11" rx="1" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <path d="M12 14.5v2.5" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export function FlameIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 3c3 3.6 5.5 6.5 5.5 10a5.5 5.5 0 0 1-11 0c0-2 .8-3.7 2.1-5.1.2 1.4.9 2.2 1.9 2.6 0-2.6.8-5.2 1.5-7.5Z" />
    </svg>
  );
}

export function CycleIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M20 12a8 8 0 0 1-13.7 5.7M4 12a8 8 0 0 1 13.7-5.7" />
      <path d="M17.7 2.8v3.7h-3.7M6.3 21.2v-3.7h3.7" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="m12 3.5 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9L6.6 20l1-6-4.3-4.2 6-.9L12 3.5Z" />
    </svg>
  );
}

export function GraduationIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M2.5 8.5 12 4l9.5 4.5L12 13 2.5 8.5Z" />
      <path d="M6 10.6V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.4" />
      <path d="M21.5 8.5V14" />
    </svg>
  );
}

export function NewspaperIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M4 5h13v14H5a1 1 0 0 1-1-1V5Z" />
      <path d="M17 8h3v10a1 1 0 0 1-1 1h-2" />
      <path d="M7 9h7M7 12h7M7 15h4" />
    </svg>
  );
}

export function SearchIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

/*
 * One mark per PRIDE value, in the same order as the values list. The artwork is
 * the client's own set from kgoricapital.com, served from /brand/values and
 * masked so it takes the colour of the surrounding text.
 */
const valueMarks = [
  "/brand/values/passion.svg",
  "/brand/values/reliability.svg",
  "/brand/values/integrity.svg",
  "/brand/values/dynamism.svg",
  "/brand/values/excellence.svg",
] as const;

function valueMark(src: string) {
  return function ValueMark({ className = "h-5 w-5" }: { className?: string }) {
    return (
      <span
        aria-hidden="true"
        className={`value-mark ${className}`}
        style={{ maskImage: `url("${src}")`, WebkitMaskImage: `url("${src}")` }}
      />
    );
  };
}

export const valueIcons = valueMarks.map(valueMark);

export function GaugeIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M3.5 16.5a8.5 8.5 0 0 1 17 0" />
      <path d="M12 16.5 16.5 11" />
      <circle cx="12" cy="16.5" r="1.2" />
    </svg>
  );
}

export function PieIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9h9" />
    </svg>
  );
}

export function BanknoteIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <rect x="2.5" y="7" width="19" height="10" rx="1.5" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M6 10v4M18 10v4" />
    </svg>
  );
}

export function NetworkIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="5" cy="5.5" r="2.1" />
      <circle cx="19" cy="5.5" r="2.1" />
      <circle cx="12" cy="19.5" r="2.1" />
      <path d="m10.2 10.2-3.4-3M13.8 10.2l3.4-3M12 14.6v2.8" />
    </svg>
  );
}

export function MedalIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.6 13.6-1.6 7 5-2.6 5 2.6-1.6-7" />
    </svg>
  );
}

export function BookIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5A1.5 1.5 0 0 0 20 18.5v-13Z" />
    </svg>
  );
}

export function Spinner({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`animate-spin ${className}`} aria-hidden fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
