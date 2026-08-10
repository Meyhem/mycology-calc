import { SPECIES } from '../data/species';

const FAE_ORDER = { low: 0, medium: 1, high: 2 };
const LIGHT_ORDER = { none: 0, low: 1, medium: 2 };

function rangeStatus(value, [lo, hi]) {
  if (value < lo) return 'low';
  if (value > hi) return 'high';
  return 'ok';
}

function StatusPill({ ok, label }) {
  return <span className={'status-pill ' + (ok ? 'status-ok' : 'status-bad')}>{label}</span>;
}

export default function ConditionsTab({
  active,
  ui,
  speciesTexts,
  speciesId,
  setSpeciesId,
  temp,
  setTemp,
  humidity,
  setHumidity,
  fae,
  setFae,
  light,
  setLight,
}) {
  const s = SPECIES[speciesId];

  const tempNum = parseFloat(temp);
  const humidityNum = parseFloat(humidity);
  const hasTemp = Number.isFinite(tempNum);
  const hasHumidity = Number.isFinite(humidityNum);

  const tempStatus = hasTemp ? rangeStatus(tempNum, s.fruitTempC) : null;
  const humidityStatus = hasHumidity ? rangeStatus(humidityNum, s.fruitHumidityPct) : null;
  const faeOk = FAE_ORDER[fae] >= FAE_ORDER[s.faeLevel];
  const lightOk = LIGHT_ORDER[light] >= LIGHT_ORDER[s.lightLevel];

  const tempLabel = !hasTemp ? null : tempStatus === 'ok' ? ui.conditionsStatusOk
    : tempStatus === 'low' ? ui.conditionsStatusTooCold : ui.conditionsStatusTooWarm;
  const humidityLabel = !hasHumidity ? null : humidityStatus === 'ok' ? ui.conditionsStatusOk
    : humidityStatus === 'low' ? ui.conditionsStatusTooDry : ui.conditionsStatusTooHumid;

  const overallOk = (tempStatus === 'ok' || tempStatus === null)
    && (humidityStatus === 'ok' || humidityStatus === null)
    && faeOk && lightOk;
  const hasAnyReading = hasTemp || hasHumidity;

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-conditions">
      <div className="card">
        <div className="field">
          <label htmlFor="conditionsSpecies" id="conditionsSpeciesLabel">{ui.conditionsSpeciesLabel}</label>
          <select id="conditionsSpecies" value={speciesId} onChange={(e) => setSpeciesId(e.target.value)}>
            {Object.keys(SPECIES).map((id) => (
              <option key={id} value={id}>{speciesTexts[id].name}</option>
            ))}
          </select>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="conditionsTemp" id="conditionsTempLabel">{ui.conditionsTempLabel}</label>
            <input
              type="number"
              id="conditionsTemp"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              step="0.5"
            />
          </div>
          <div className="field">
            <label htmlFor="conditionsHumidity" id="conditionsHumidityLabel">{ui.conditionsHumidityLabel}</label>
            <input
              type="number"
              id="conditionsHumidity"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              step="1"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="conditionsFae" id="conditionsFaeLabel">{ui.conditionsFaeLabel}</label>
          <select id="conditionsFae" value={fae} onChange={(e) => setFae(e.target.value)}>
            <option value="low">{ui.conditionsFaeLowOpt}</option>
            <option value="medium">{ui.conditionsFaeMediumOpt}</option>
            <option value="high">{ui.conditionsFaeHighOpt}</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="conditionsLight" id="conditionsLightLabel">{ui.conditionsLightLabel}</label>
          <select id="conditionsLight" value={light} onChange={(e) => setLight(e.target.value)}>
            <option value="none">{ui.conditionsLightNoneOpt}</option>
            <option value="low">{ui.conditionsLightLowOpt}</option>
            <option value="medium">{ui.conditionsLightMediumOpt}</option>
          </select>
        </div>

        <div className="field">
          <div className="status-row">
            <span className="k">
              {ui.conditionsTempResultLabel}
              <span className="target">{ui.conditionsTargetPrefix} {s.fruitTempC[0]}–{s.fruitTempC[1]} °C</span>
            </span>
            {tempLabel && <StatusPill ok={tempStatus === 'ok'} label={tempLabel} />}
          </div>
          <div className="status-row">
            <span className="k">
              {ui.conditionsHumidityResultLabel}
              <span className="target">{ui.conditionsTargetPrefix} {s.fruitHumidityPct[0]}–{s.fruitHumidityPct[1]} %</span>
            </span>
            {humidityLabel && <StatusPill ok={humidityStatus === 'ok'} label={humidityLabel} />}
          </div>
          <div className="status-row">
            <span className="k">{ui.conditionsFaeResultLabel}</span>
            <StatusPill ok={faeOk} label={faeOk ? ui.conditionsStatusOk : ui.conditionsStatusLowFae} />
          </div>
          <div className="status-row">
            <span className="k">{ui.conditionsLightResultLabel}</span>
            <StatusPill ok={lightOk} label={lightOk ? ui.conditionsStatusOk : ui.conditionsStatusLowLight} />
          </div>
        </div>

        {hasAnyReading && (
          <div className={'overall-banner ' + (overallOk ? 'ok' : 'issues')}>
            {overallOk ? ui.conditionsOverallGood : ui.conditionsOverallIssues}
          </div>
        )}

        <div className="footnote">{ui.conditionsDisclaimer}</div>
      </div>
    </div>
  );
}
