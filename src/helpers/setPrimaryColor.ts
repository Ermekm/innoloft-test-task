export function setPrimaryColor(color: string): void {
  const hex = color.replace(/^#/, "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const rgbValue = r + " " + g + " " + b;
  document.documentElement.style.setProperty("--color-primary", rgbValue);
}
