import { SPECIES } from '../data/species';

const THICKNESS_MULTIPLIER = { thin: 0.7, medium: 1, thick: 1.5 };

export default function DryingTab({ active, ui, speciesTexts, speciesId, setSpeciesId, thickness, setThickness }) {
  const s = SPECIES[speciesId];
  const mult = THICKNESS_MULTIPLIER[thickness];
  const timeLow = Math.round(s.dryTimeHours[0] * mult * 10) / 10;
  const timeHigh = Math.round(s.dryTimeHours[1] * mult * 10) / 10;

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-drying">
      <div className="card">
        <div className="field">
          <label htmlFor="dryingSpecies" id="dryingSpeciesLabel">{ui.dryingSpeciesLabel}</label>
          <select id="dryingSpecies" value={speciesId} onChange={(e) => setSpeciesId(e.target.value)}>
            {Object.keys(SPECIES).map((id) => (
              <option key={id} value={id}>{speciesTexts[id].name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="dryingThickness" id="dryingThicknessLabel">{ui.dryingThicknessLabel}</label>
          <select id="dryingThickness" value={thickness} onChange={(e) => setThickness(e.target.value)}>
            <option value="thin">{ui.dryingThicknessThin}</option>
            <option value="medium">{ui.dryingThicknessMedium}</option>
            <option value="thick">{ui.dryingThicknessThick}</option>
          </select>
        </div>

        <div className="result-line">
          <span className="k">{ui.dryingTempResultLabel}</span>
          <span className="v">{s.dryTempC[0]}–{s.dryTempC[1]} °C</span>
        </div>
        <div className="result-line">
          <span className="k">{ui.dryingTimeResultLabel}</span>
          <span className="v">{timeLow}–{timeHigh} h</span>
        </div>
        <div className="footnote">{ui.dryingFootnote}</div>
      </div>
    </div>
  );
}
