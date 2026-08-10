export default function UnitSwitch({ unit, onChange, label }) {
  return (
    <div className="lang-switch">
      <label htmlFor="unitSelect" id="unitLabel">{label}</label>
      <select id="unitSelect" value={unit} onChange={(e) => onChange(e.target.value)}>
        <option value="metric">g / mL / L</option>
        <option value="us">oz / lb / fl oz</option>
      </select>
    </div>
  );
}
