"use client";

import { useEffect, useState } from "react";
import { getTheme } from "./theme";

export function useThemeMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  const theme = getTheme(darkMode);

  return { darkMode, theme, setDarkMode };
}