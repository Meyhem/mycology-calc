import RecipeSelect from './RecipeSelect';
import RatingLine from './RatingLine';
import { SPECIES } from '../data/species';

const FAE_KEY = { low: 'faeLow', medium: 'faeMedium', high: 'faeHigh' };
const LIGHT_KEY = { none: 'lightNone', low: 'lightLow', medium: 'lightMedium' };

function range(arr, suffix = '') {
  return `${arr[0]}–${arr[1]}${suffix}`;
}

export default function SpeciesTab({ active, ui, texts, substrateTexts, grainTexts, speciesId, setSpeciesId }) {
  const t = texts[speciesId];
  const s = SPECIES[speciesId];

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-species">
      <div className="card">
        <div className="field">
          <label htmlFor="speciesSelect" id="speciesLabel">{ui.speciesLabel}</label>
          <RecipeSelect id="speciesSelect" value={speciesId} onChange={setSpeciesId} dataObj={SPECIES} i18nObj={texts} />
          <div className="desc" id="speciesDesc">{t.description}</div>
          <RatingLine id="speciesRating" stars={s.stars} note={t.ratingNote} />
        </div>

        <div className="field">
          <h2>{ui.colonizeHeader}</h2>
          <div className="profile-grid">
            <div className="profile-item">
              <div className="k">{ui.colonizeTempLabel}</div>
              <div className="v">{range(s.colonizeTempC, ' °C')}</div>
            </div>
          </div>
        </div>

        <div className="field">
          <h2>{ui.fruitingHeader}</h2>
          <div className="profile-grid">
            <div className="profile-item">
              <div className="k">{ui.fruitTempLabel}</div>
              <div className="v">{range(s.fruitTempC, ' °C')}</div>
            </div>
            <div className="profile-item">
              <div className="k">{ui.fruitHumidityLabel}</div>
              <div className="v">{range(s.fruitHumidityPct, ' %')}</div>
            </div>
            <div className="profile-item">
              <div className="k">{ui.faeLabel}</div>
              <div className="v">{ui[FAE_KEY[s.faeLevel]]}</div>
            </div>
            <div className="profile-item">
              <div className="k">{ui.lightLabel}</div>
              <div className="v">{ui[LIGHT_KEY[s.lightLevel]]}</div>
            </div>
            <div className="profile-item">
              <div className="k">{ui.daysToPinLabel}</div>
              <div className="v">{range(s.daysToPin)} {ui.daysUnit}</div>
            </div>
            <div className="profile-item">
              <div className="k">{ui.flushIntervalLabel}</div>
              <div className="v">{range(s.flushIntervalDays)} {ui.daysUnit}</div>
            </div>
            <div className="profile-item">
              <div className="k">{ui.numFlushesLabel}</div>
              <div className="v">{range(s.numFlushes)}</div>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="desc">{ui.recommendedSubstratesLabel}</div>
          <div className="pill-row">
            {s.recommendedSubstrates.map((id) => (
              <span className="pill" key={id}>{substrateTexts[id].name}</span>
            ))}
          </div>
        </div>

        <div className="field">
          <div className="desc">{ui.recommendedGrainsLabel}</div>
          <div className="pill-row">
            {s.recommendedGrains.map((id) => (
              <span className="pill" key={id}>{grainTexts[id].name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
