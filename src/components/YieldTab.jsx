import { fmtWeight } from '../lib/format';
import { SPECIES, SUBSTRATE_CATEGORY } from '../data/species';
import { SUBSTRATES } from '../data/recipes';

export default function YieldTab({
  active,
  ui,
  speciesTexts,
  substrateTexts,
  speciesId,
  setSpeciesId,
  substrateId,
  setSubstrateId,
  wetWeight,
  setWetWeight,
  unit,
}) {
  const s = SPECIES[speciesId];
  const validSubstrateIds = Object.keys(SUBSTRATES).filter((id) => s.yieldPctWet[SUBSTRATE_CATEGORY[id]]);
  const effectiveSubstrateId = validSubstrateIds.includes(substrateId) ? substrateId : validSubstrateIds[0];
  const pctRange = s.yieldPctWet[SUBSTRATE_CATEGORY[effectiveSubstrateId]];

  const wetWeightNum = parseFloat(wetWeight);
  const hasResult = wetWeightNum > 0;
  let totalLow = 0, totalHigh = 0, perFlushLow = 0, perFlushHigh = 0;
  if (hasResult) {
    totalLow = (wetWeightNum * pctRange[0]) / 100;
    totalHigh = (wetWeightNum * pctRange[1]) / 100;
    perFlushLow = totalLow / s.numFlushes[1];
    perFlushHigh = totalHigh / s.numFlushes[0];
  }

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-yield">
      <div className="card">
        <div className="field">
          <label htmlFor="yieldSpecies" id="yieldSpeciesLabel">{ui.yieldSpeciesLabel}</label>
          <select id="yieldSpecies" value={speciesId} onChange={(e) => setSpeciesId(e.target.value)}>
            {Object.keys(SPECIES).map((id) => (
              <option key={id} value={id}>{speciesTexts[id].name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="yieldSubstrate" id="yieldSubstrateLabel">{ui.yieldSubstrateLabel}</label>
          <select id="yieldSubstrate" value={effectiveSubstrateId} onChange={(e) => setSubstrateId(e.target.value)}>
            {validSubstrateIds.map((id) => (
              <option key={id} value={id}>{substrateTexts[id].name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="yieldWeight" id="yieldWeightLabel">{ui.yieldWeightLabel} (g)</label>
          <input
            type="number"
            id="yieldWeight"
            value={wetWeight}
            min="1"
            step="100"
            onChange={(e) => setWetWeight(e.target.value)}
          />
        </div>
      </div>

      <div className={'card' + (hasResult ? '' : ' hidden')} id="yieldResultsCard">
        <div className="result-line">
          <span className="k">{ui.yieldResultLabel}</span>
          <span className="v">{hasResult ? `${fmtWeight(totalLow, unit)} – ${fmtWeight(totalHigh, unit)}` : '—'}</span>
        </div>
        <div className="result-line">
          <span className="k">{ui.yieldPerFlushLabel}</span>
          <span className="v">{hasResult ? `${fmtWeight(perFlushLow, unit)} – ${fmtWeight(perFlushHigh, unit)}` : '—'}</span>
        </div>
        <div className="footnote">{ui.yieldDisclaimer}</div>
      </div>
    </div>
  );
}
