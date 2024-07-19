import React from "react";

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button
        id="global-theme-toggler"
        className={`btn btn-${theme} txt-${theme}`}
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </>
  );
};
export { ThemeToggleButton };
