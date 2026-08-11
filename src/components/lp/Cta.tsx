export const WHATSAPP_URL = "https://wa.me/message/ACLSCPEIWSEWO1";

export function Cta({
  children,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "text-primary-foreground shadow-[var(--shadow-gold)] hover:shadow-[0_26px_60px_-18px_oklch(0.78_0.135_78/0.6)]"
      : "hairline text-foreground hover:bg-secondary";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      style={
        variant === "solid"
          ? { backgroundImage: "var(--gradient-gold)" }
          : undefined
      }
    >
      {children}
    </a>
  );
}
