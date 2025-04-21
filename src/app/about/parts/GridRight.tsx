export default function Intro({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 mx-10">
      <div className={`col-span-2 col-start-2 ${className}`}>{children}</div>
    </div>
  );
}
