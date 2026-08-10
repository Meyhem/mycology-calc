import RecipeSelect from './RecipeSelect';
import RatingLine from './RatingLine';
import ResultsTable from './ResultsTable';
import StepsList from './StepsList';
import { SUBSTRATES } from '../data/recipes';

export default function SubstrateTab({ active, ui, texts, substrateId, setSubstrateId, spawn, setSpawn, result, unit }) {
  const t = texts[substrateId];
  const s = SUBSTRATES[substrateId];

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-substrate">
      <div className="card">
        <div className="field">
          <label htmlFor="substrate" id="substrateLabel">{ui.substrateLabel}</label>
          <RecipeSelect id="substrate" value={substrateId} onChange={setSubstrateId} dataObj={SUBSTRATES} i18nObj={texts} />
          <div className="desc" id="substrateDesc">{t.description}</div>
          <RatingLine id="substrateRating" stars={s.stars} note={t.ratingNote} />
        </div>
        <div className="field">
          <label htmlFor="spawn" id="spawnLabel">{ui.spawnLabel}</label>
          <input
            type="number"
            id="spawn"
            value={spawn}
            min="1"
            step="50"
            onChange={(e) => setSpawn(e.target.value)}
          />
          <div className="desc" id="spawnTip">{ui.spawnTip}</div>
        </div>
        <button className="primary" id="calcBtn" type="button">{ui.calcBtn}</button>
      </div>

      <ResultsTable
        cardId="resultsCard"
        headerId="subIngredientsHeader"
        header={ui.subIngredientsHeader}
        ingColId="subIngCol"
        volColId="subVolCol"
        wtColId="subWtCol"
        ingCol={ui.ingCol}
        volCol={ui.volCol}
        wtCol={ui.wtCol}
        rowsBodyId="ingredientRows"
        names={t.ingredients}
        result={result}
        totalLabelId="subTotalLabel"
        totalLabel={ui.subTotalLabel}
        totalVolId="totalVol"
        totalWeightId="totalWeight"
        footnoteId="substrateFootnote"
        footnote={ui.substrateFootnote}
        unit={unit}
        copyLabel={ui.copyBtn}
        copiedLabel={ui.copiedBtn}
      />

      <StepsList
        cardId="stepsCard"
        headerId="subStepsHeader"
        header={ui.stepsHeader}
        listId="stepsList"
        steps={t.steps}
        totalVolume={Number(spawn)}
        result={result}
        hygieneId="hygieneNote"
        hygiene={t.hygiene}
        unit={unit}
      />
    </div>
  );
}
