import Link from "next/link";

const variants = {
  primary:
    "bg-ink text-cream hover:bg-pine focus-visible:outline-ink",
  secondary:
    "border border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-paper",
  inverse:
    "bg-cream text-ink hover:bg-paper focus-visible:outline-cream",
  inverseQuiet:
    "border border-cream/40 text-cream hover:bg-cream hover:text-ink focus-visible:outline-cream",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonClasses(variant: ButtonVariant, className = "") {
  return `inline-flex min-h-11 items-center justify-center px-5 text-sm font-medium tracking-[-0.03em] transition-colors duration-200 ${variants[variant]} ${className}`;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  );
}
