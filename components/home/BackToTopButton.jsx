"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTopButton({ theme, darkMode, scrollRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = scrollRef?.current;
    if (!element) return;

    const onScroll = () => {
      setVisible(element.scrollTop > 200);
    };

    onScroll();
    element.addEventListener("scroll", onScroll);
    return () => element.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  const scrollToTop = () => {
    const element = scrollRef?.current;
    if (!element) return;

    element.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
  type="button"
  aria-label="Back to top"
  onClick={scrollToTop}
  className={`fixed bottom-20 right-20 z-[9999] flex h-16 w-16 items-center justify-center rounded-full border shadow-xl transition-all duration-300 ${
    visible
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-4 opacity-0"
  } ${theme.topButton}`}
>
  <ChevronUp className="h-5 w-5" />
</button>
  );
}