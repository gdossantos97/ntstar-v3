type BrandNameProps = {
  className?: string;
};

export function BrandName({
  className = "font-brand text-xl text-ice",
}: BrandNameProps) {
  return <span className={className}>ntstar</span>;
}
