// assets/js/no_defer.js
// Local override of the al-folio no_defer script.
// The theme toggle is patched here because this file is the synchronous
// script that runs after assets/js/theme.js and before any click.

// al-folio cycles system -> light -> dark. When the stored setting is
// "system" and that already matches the painted theme, the first click only
// stores the same colors and the page does not change. The second click
// reaches the opposite theme. One click should switch the visible theme.
toggleThemeSetting = () => {
  const theme = determineComputedTheme();
  setThemeSetting(theme === "dark" ? "light" : "dark");
};

document.addEventListener("DOMContentLoaded", () => {
  const compatBootstrap = Boolean(window.alFolio && window.alFolio.compatBootstrap);
  const computedTheme =
    typeof determineComputedTheme === "function"
      ? determineComputedTheme()
      : document.documentElement.dataset.theme || "light";

  document.querySelectorAll("table").forEach((table) => {
    if (computedTheme === "dark") {
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
    }

    const insideExcludedParent =
      table.closest('[class*="news"]') ||
      table.closest('[class*="card"]') ||
      table.closest('[class*="archive"]') ||
      table.closest("pre") ||
      table.closest("code");

    if (!insideExcludedParent) {
      table.classList.add("table", "table-hover");
      table.parentElement?.classList.add("table-responsive");

      if (compatBootstrap) {
        table.setAttribute("data-toggle", "table");
      }
    }
  });
});
