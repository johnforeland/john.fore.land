import Photo from "./Photo";
import Name from "./Name";

export default function NamePhoto({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid place-items-center">
        <Photo className="mt-6 mx-10 md:mx-15 lg:mx-30 xl:mx-35" />
        <Name className="mr-20" />
      </div>
    </div>
  );
}
