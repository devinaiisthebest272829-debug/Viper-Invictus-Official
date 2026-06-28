const BASE = import.meta.env.BASE_URL || "/";

export function ViperLogo({ className = "", size }: { className?: string; size?: number }) {
  return (
    <img
      src={`${BASE}viper-logo-official.png`}
      alt="Viper Invictus"
      className={className}
      width={size}
      height={size}
    />
  );
}
