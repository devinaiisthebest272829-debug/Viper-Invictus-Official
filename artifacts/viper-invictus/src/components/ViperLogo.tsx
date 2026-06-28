import logoSrc from "@/assets/viper-logo.png";

export function ViperLogo({ className = "", size }: { className?: string; size?: number }) {
  return (
    <img
      src={`${logoSrc}?v=2`}
      alt="Viper Invictus"
      className={className}
      width={size}
      height={size}
    />
  );
}
