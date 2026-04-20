const html = document.documentElement;
const toggleSwitch = document.querySelector("#theme-toggle");

function handleThemeChange(event) {
  const isDark = toggleSwitch.checked;
  html.classList.toggle("dark", isDark);
  localStorage.setItem("isDarkMode", isDark);
}

function getSavedTheme() {
  const isDark = localStorage.getItem("isDarkMode") === "true";
  html.classList.toggle("dark", isDark);
  toggleSwitch.checked = isDark;
}

getSavedTheme();

toggleSwitch?.addEventListener("change", handleThemeChange);
