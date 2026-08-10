import RecipeSelect from './RecipeSelect';
import RatingLine from './RatingLine';
import ResultsTable from './ResultsTable';
import StepsList from './StepsList';
import { AGAR_RECIPES } from '../data/recipes';

export default function AgarTab({
  active,
  ui,
  texts,
  agarId,
  setAgarId,
  plateVol,
  setPlateVol,
  plateCount,
  setPlateCount,
  result,
  totalVolume,
  unit,
}) {
  const t = texts[agarId];
  const r = AGAR_RECIPES[agarId];

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-agar">
      <div className="card">
        <div className="field">
          <label htmlFor="agarRecipe" id="agarLabel">{ui.agarLabel}</label>
          <RecipeSelect id="agarRecipe" value={agarId} onChange={setAgarId} dataObj={AGAR_RECIPES} i18nObj={texts} />
          <div className="desc" id="agarDesc">{t.description}</div>
          <RatingLine id="agarRating" stars={r.stars} note={t.ratingNote} />
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="agarPlateVol" id="plateVolLabel">{ui.plateVolLabel}</label>
            <input
              type="number"
              id="agarPlateVol"
              value={plateVol}
              min="1"
              step="5"
              onChange={(e) => setPlateVol(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="agarPlateCount" id="plateCountLabel">{ui.plateCountLabel}</label>
            <input
              type="number"
              id="agarPlateCount"
              value={plateCount}
              min="1"
              step="1"
              onChange={(e) => setPlateCount(e.target.value)}
            />
          </div>
        </div>
        <div className="desc" id="agarNote">{ui.agarNote}</div>
        <button className="primary" id="agarCalcBtn" type="button">{ui.calcBtn}</button>
      </div>

      <ResultsTable
        cardId="agarResultsCard"
        headerId="agarIngredientsHeader"
        header={ui.agarIngredientsHeader}
        ingColId="agarIngCol"
        volColId="agarVolCol"
        wtColId="agarWtCol"
        ingCol={ui.ingCol}
        volCol={ui.volCol}
        wtCol={ui.wtCol}
        rowsBodyId="agarIngredientRows"
        names={t.ingredients}
        result={result}
        totalLabelId="agarTotalLabel"
        totalLabel={ui.agarTotalLabel}
        totalVolId="agarTotalVol"
        totalWeightId="agarTotalWeight"
        totalVolSuffix={result ? `${plateCount} ${ui.platesWord}` : undefined}
        footnoteId="agarFootnote"
        footnote={ui.agarFootnote}
        unit={unit}
        copyLabel={ui.copyBtn}
        copiedLabel={ui.copiedBtn}
      />

      <StepsList
        cardId="agarStepsCard"
        headerId="agarStepsHeader"
        header={ui.stepsHeader}
        listId="agarStepsList"
        steps={t.steps}
        totalVolume={totalVolume}
        result={result}
        hygieneId="agarHygieneNote"
        hygiene={t.hygiene}
        unit={unit}
      />
    </div>
  );
}
