import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function SiteHeader({
  darkMode,
  menuOpen,
  setMenuOpen,
  setDarkMode,
  menuItems,
  theme,
}) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <div
            className={`text-xl font-semibold uppercase tracking-[0.25em] ${theme.textPrimary}`}
          >
            Codesudio
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDarkMode((prev) => !prev)}
              className={`inline-flex items-center justify-center rounded-full border p-3 transition ${theme.topButton}`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`inline-flex items-center justify-center rounded-full border p-3 transition ${theme.topButton}`}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-40 flex min-h-screen items-center justify-center px-6 backdrop-blur-xl ${theme.overlay}`}
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 text-center"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className={`group relative px-4 py-3 text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl md:text-5xl lg:text-6xl ${theme.menuLink}`}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full ${
                        darkMode ? "w-0 bg-[#22c55e]" : "w-0 bg-[#16a34a]"
                      }`}
                    />
                  </span>
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}