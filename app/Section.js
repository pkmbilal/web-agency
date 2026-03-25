export default function Section({
  id,
  children,
  className = "",
  darkMode,
  fullBleed = false,
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-b md:min-h-screen md:snap-start ${
        darkMode ? "border-white/10" : "border-[#bfe8cc]"
      } ${className}`}
    >
      {fullBleed ? (
        children
      ) : (
        <div className="mx-auto flex w-full max-w-7xl items-center px-6 py-10 sm:px-8 sm:py-16 md:min-h-screen lg:px-12 lg:py-20">
          {children}
        </div>
      )}
    </section>
  );
}