export default function LanguageSwitch({ lang, onChange, label }) {
  return (
    <div className="lang-switch">
      <label htmlFor="langSelect" id="langLabel">{label}</label>
      <select id="langSelect" value={lang} onChange={(e) => onChange(e.target.value)}>
        <option value="en">English</option>
        <option value="sk">Slovenčina</option>
      </select>
    </div>
  );
}
