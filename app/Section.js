export default function Section({ id, children, className = "", darkMode, fullBleed = false }) {
  return (
    <section
      id={id}
      className={`relative min-h-screen md:snap-start overflow-hidden border-b ${
        darkMode ? "border-white/10" : "border-[#bfe8cc]"
      } ${className}`}
    >
      {fullBleed ? (
        children
      ) : (
        <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
          {children}
        </div>
      )}
    </section>
  );
}