import Link from "next/link";

/**
 * The official Kgori Capital lock-up: the kori bustard, the wordmark and the
 * "Invest with pride" line, supplied by the client as SVG.
 *
 * `tone="dark"` is the supplied two-tone artwork recoloured to the site palette.
 * `tone="light"` is the all-white cut for black and burgundy surfaces.
 */
export function Logo({
  className = "",
  tone = "dark",
  href = "/",
}: {
  className?: string;
  tone?: "dark" | "light";
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Kgori Capital, home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tone === "dark" ? "/brand/kgori-logo-dark.svg" : "/brand/kgori-logo-white.svg"}
        alt="Kgori Capital"
        width={209}
        height={39}
        className="h-[34px] w-auto md:h-[38px]"
      />
    </Link>
  );
}

export function BrandMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/kgori-mark.svg"
      alt=""
      aria-hidden
      width={52}
      height={39}
      className={className}
    />
  );
}
