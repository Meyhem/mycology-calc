import RecipeSelect from './RecipeSelect';
import RatingLine from './RatingLine';
import ResultsTable from './ResultsTable';
import StepsList from './StepsList';
import { GRAIN_RECIPES } from '../data/grain';

export default function GrainTab({
  active,
  ui,
  texts,
  grainId,
  setGrainId,
  jarVol,
  setJarVol,
  jarCount,
  setJarCount,
  result,
  totalVolume,
  unit,
}) {
  const t = texts[grainId];
  const r = GRAIN_RECIPES[grainId];

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-grain">
      <div className="card">
        <div className="field">
          <label htmlFor="grainRecipe" id="grainLabel">{ui.grainLabel}</label>
          <RecipeSelect id="grainRecipe" value={grainId} onChange={setGrainId} dataObj={GRAIN_RECIPES} i18nObj={texts} />
          <div className="desc" id="grainDesc">{t.description}</div>
          <RatingLine id="grainRating" stars={r.stars} note={t.ratingNote} />
        </div>
        <div className="row">
          <div className="field">
            <label htmlFor="grainJarVol" id="grainJarVolLabel">{ui.grainJarVolLabel}</label>
            <input
              type="number"
              id="grainJarVol"
              value={jarVol}
              min="1"
              step="50"
              onChange={(e) => setJarVol(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="grainJarCount" id="grainJarCountLabel">{ui.jarCountLabel}</label>
            <input
              type="number"
              id="grainJarCount"
              value={jarCount}
              min="1"
              step="1"
              onChange={(e) => setJarCount(e.target.value)}
            />
          </div>
        </div>
        <div className="desc" id="grainNote">{ui.grainNote}</div>
        <button className="primary" id="grainCalcBtn" type="button">{ui.calcBtn}</button>
      </div>

      <ResultsTable
        cardId="grainResultsCard"
        headerId="grainIngredientsHeader"
        header={ui.grainIngredientsHeader}
        ingColId="grainIngCol"
        volColId="grainVolCol"
        wtColId="grainWtCol"
        ingCol={ui.ingCol}
        volCol={ui.volCol}
        wtCol={ui.wtCol}
        rowsBodyId="grainIngredientRows"
        names={t.ingredients}
        result={result}
        totalLabelId="grainTotalLabel"
        totalLabel={ui.grainTotalLabel}
        totalVolId="grainTotalVol"
        totalWeightId="grainTotalWeight"
        totalVolSuffix={result ? `${jarCount} ${ui.jarsWord}` : undefined}
        footnoteId="grainFootnote"
        footnote={ui.grainFootnote}
        unit={unit}
        copyLabel={ui.copyBtn}
        copiedLabel={ui.copiedBtn}
      />

      <StepsList
        cardId="grainStepsCard"
        headerId="grainStepsHeader"
        header={ui.stepsHeader}
        listId="grainStepsList"
        steps={t.steps}
        totalVolume={totalVolume}
        result={result}
        hygieneId="grainHygieneNote"
        hygiene={t.hygiene}
        unit={unit}
      />
    </div>
  );
}
