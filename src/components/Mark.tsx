import Image from "next/image";

type MarkProps = {
  className?: string;
  variant?: "white" | "black";
};

export function Mark({ className = "h-7 w-auto", variant = "white" }: MarkProps) {
  const src =
    variant === "black"
      ? "/images/mark-black.png"
      : "/images/mark-white.png";

  return (
    <Image
      src={src}
      alt="ntstar"
      width={645}
      height={344}
      className={className}
      priority
    />
  );
}
