export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 md:mb-12">
            {eyebrow && (
              <div className="inline-flex items-center rounded-full border bg-white/60 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}