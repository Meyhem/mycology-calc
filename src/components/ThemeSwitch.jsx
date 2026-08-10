export default function ThemeSwitch({ theme, onChange, label, options }) {
  return (
    <div className="lang-switch">
      <label htmlFor="themeSelect" id="themeLabel">{label}</label>
      <select id="themeSelect" value={theme} onChange={(e) => onChange(e.target.value)}>
        <option value="auto">{options.auto}</option>
        <option value="light">{options.light}</option>
        <option value="dark">{options.dark}</option>
      </select>
    </div>
  );
}
