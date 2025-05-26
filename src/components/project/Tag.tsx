export function Tag({ tag }: { tag: string }) {
  return (
    <div className="inline-block bg-blue-100 opacity-55 text-gray-800 text-sm font-medium px-3 py-1 mt-3 rounded-full">
      {tag}
    </div>
  );
}
