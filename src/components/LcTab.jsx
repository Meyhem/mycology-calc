import RecipeSelect from './RecipeSelect';
import RatingLine from './RatingLine';
import ResultsTable from './ResultsTable';
import StepsList from './StepsList';
import { LC_RECIPES } from '../data/recipes';

export default function LcTab({
  active,
  ui,
  texts,
  lcId,
  setLcId,
  jarVol,
  setJarVol,
  jarCount,
  setJarCount,
  result,
  totalVolume,
  unit,
}) {
  const t = texts[lcId];
  const r = LC_RECIPES[lcId];

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-lc">
      <div className="card">
        <div className="field">
          <label htmlFor="lcRecipe" id="lcLabel">{ui.lcLabel}</label>
          <RecipeSelect id="lcRecipe" value={lcId} onChange={setLcId} dataObj={LC_RECIPES} i18nObj={texts} />
          <div className="desc" id="lcDesc">{t.description}</div>
          <RatingLine id="lcRating" stars={r.stars} note={t.ratingNote} />
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="lcJarVol" id="jarVolLabel">{ui.jarVolLabel}</label>
            <input
              type="number"
              id="lcJarVol"
              value={jarVol}
              min="1"
              step="10"
              onChange={(e) => setJarVol(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="lcJarCount" id="jarCountLabel">{ui.jarCountLabel}</label>
            <input
              type="number"
              id="lcJarCount"
              value={jarCount}
              min="1"
              step="1"
              onChange={(e) => setJarCount(e.target.value)}
            />
          </div>
        </div>
        <div className="desc" id="jarNote">{ui.jarNote}</div>
        <button className="primary" id="lcCalcBtn" type="button">{ui.calcBtn}</button>
      </div>

      <ResultsTable
        cardId="lcResultsCard"
        headerId="lcIngredientsHeader"
        header={ui.lcIngredientsHeader}
        ingColId="lcIngCol"
        volColId="lcVolCol"
        wtColId="lcWtCol"
        ingCol={ui.ingCol}
        volCol={ui.volCol}
        wtCol={ui.wtCol}
        rowsBodyId="lcIngredientRows"
        names={t.ingredients}
        result={result}
        totalLabelId="lcTotalLabel"
        totalLabel={ui.lcTotalLabel}
        totalVolId="lcTotalVol"
        totalWeightId="lcTotalWeight"
        totalVolSuffix={result ? `${jarCount} ${ui.jarsWord}` : undefined}
        footnoteId="lcFootnote"
        footnote={ui.lcFootnote}
        unit={unit}
        copyLabel={ui.copyBtn}
        copiedLabel={ui.copiedBtn}
      />

      <StepsList
        cardId="lcStepsCard"
        headerId="lcStepsHeader"
        header={ui.stepsHeader}
        listId="lcStepsList"
        steps={t.steps}
        totalVolume={totalVolume}
        result={result}
        hygieneId="lcHygieneNote"
        hygiene={t.hygiene}
        unit={unit}
      />
    </div>
  );
}
