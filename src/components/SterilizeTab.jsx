import { fmtVol } from '../lib/format';
import { PC_CONTAINERS, psiForAltitude } from '../data/sterilization';

const MAX_HOME_CANNER_PSI = 17;

export default function SterilizeTab({
  active,
  ui,
  containerId,
  setContainerId,
  jarCount,
  setJarCount,
  altitude,
  setAltitude,
  dilutionTargetVol,
  setDilutionTargetVol,
  dilutionTargetConc,
  setDilutionTargetConc,
  dilutionStockConc,
  setDilutionStockConc,
  unit,
}) {
  const container = PC_CONTAINERS[containerId];
  const altitudeNum = parseFloat(altitude) || 0;
  const psi = psiForAltitude(altitudeNum);

  const targetVolNum = parseFloat(dilutionTargetVol);
  const targetConcNum = parseFloat(dilutionTargetConc);
  const stockConcNum = parseFloat(dilutionStockConc);
  const dilutionValid = targetVolNum > 0 && targetConcNum > 0 && stockConcNum > targetConcNum;
  const dilutionAttempted = targetVolNum > 0 && targetConcNum > 0 && stockConcNum > 0;
  let stockNeeded = 0, waterNeeded = 0;
  if (dilutionValid) {
    stockNeeded = (targetVolNum * targetConcNum) / stockConcNum;
    waterNeeded = targetVolNum - stockNeeded;
  }

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-sterilize">
      <div className="card">
        <h2>{ui.tabSterilize}</h2>
        <div className="field">
          <label htmlFor="pcContainer" id="pcJarSizeLabel">{ui.pcJarSizeLabel}</label>
          <select id="pcContainer" value={containerId} onChange={(e) => setContainerId(e.target.value)}>
            <option value="pint">{ui.pcContainerPint}</option>
            <option value="quart">{ui.pcContainerQuart}</option>
            <option value="halfGallon">{ui.pcContainerHalfGallon}</option>
            <option value="growBag5lb">{ui.pcContainerGrowBag}</option>
          </select>
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="pcJarCount" id="pcJarCountLabel">{ui.pcJarCountLabel}</label>
            <input type="number" id="pcJarCount" value={jarCount} min="1" step="1" onChange={(e) => setJarCount(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="pcAltitude" id="pcAltitudeLabel">{ui.pcAltitudeLabel}</label>
            <input type="number" id="pcAltitude" value={altitude} min="0" step="100" onChange={(e) => setAltitude(e.target.value)} />
          </div>
        </div>
        <div className="desc" id="pcJarCountNote">{ui.pcJarCountNote}</div>

        <div className="result-line">
          <span className="k">{ui.pcResultLabel}</span>
          <span className="v">{container.minutes} min</span>
        </div>
        <div className="result-line">
          <span className="k">{ui.pcPsiResultLabel}</span>
          <span className="v">{psi} psi</span>
        </div>
        <div className="footnote">{ui.pcPsiNote}</div>
        {psi > MAX_HOME_CANNER_PSI && <div className="badge">⚠ {ui.pcMaxPsiWarning}</div>}
      </div>

      <div className="card">
        <h2 id="dilutionHeader">{ui.dilutionHeader}</h2>
        <div className="field">
          <label htmlFor="dilutionTargetVol" id="dilutionTargetVolLabel">{ui.dilutionTargetVolLabel}</label>
          <input type="number" id="dilutionTargetVol" value={dilutionTargetVol} min="1" step="50" onChange={(e) => setDilutionTargetVol(e.target.value)} />
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="dilutionTargetConc" id="dilutionTargetConcLabel">{ui.dilutionTargetConcLabel}</label>
            <input type="number" id="dilutionTargetConc" value={dilutionTargetConc} min="0" step="1" onChange={(e) => setDilutionTargetConc(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="dilutionStockConc" id="dilutionStockConcLabel">{ui.dilutionStockConcLabel}</label>
            <input type="number" id="dilutionStockConc" value={dilutionStockConc} min="0" step="1" onChange={(e) => setDilutionStockConc(e.target.value)} />
          </div>
        </div>

        {dilutionValid ? (
          <>
            <div className="result-line">
              <span className="k">{ui.dilutionResultLabel}</span>
              <span className="v">{fmtVol(stockNeeded, unit)}</span>
            </div>
            <div className="result-line">
              <span className="k">{ui.dilutionWaterLabel}</span>
              <span className="v">{fmtVol(waterNeeded, unit)}</span>
            </div>
          </>
        ) : (
          dilutionAttempted && <div className="badge">⚠ {ui.dilutionInvalid}</div>
        )}
      </div>
    </div>
  );
}
