"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, SunIcon } from "@hugeicons/core-free-icons";
import { useContext } from "react";
import { ThemeContext } from "@/app/themeContext";
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { theme, onChange } = useContext(ThemeContext);

  return (
    <button
      onClick={() => onChange(theme === "light" ? "dark" : "light")}
      className={styles.toggle}
    >
      <HugeiconsIcon
        icon={theme === "dark" ? SunIcon : Moon02Icon}
        className={`${theme === "dark" ? "text-yellow-400" : "text-gray-700"}`}
      />
    </button>
  );
};

export default ThemeToggle;
