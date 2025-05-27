export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen py-16 pb-40">
      <span className="mb-2 text-7xl font-extrabold">404</span>
      <h1 className="mb-6 text-2xl font-bold">Page Not Found</h1>
      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
    </section>
  );
}
