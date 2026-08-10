import { SPECIES } from '../data/species';
import { CULINARY_RECIPES } from '../data/culinaryRecipes';

const DIFFICULTY_KEY = { 1: 'recipeDifficultyEasy', 2: 'recipeDifficultyMedium', 3: 'recipeDifficultyAdvanced' };

export default function RecipesTab({ active, ui, speciesTexts, recipeTexts, speciesId, setSpeciesId }) {
  const recipeList = CULINARY_RECIPES[speciesId] || [];
  const speciesRecipeTexts = recipeTexts[speciesId] || {};

  return (
    <div className={'tab-panel' + (active ? ' active' : '')} id="tab-recipes">
      <div className="card">
        <div className="field">
          <label htmlFor="recipesSpecies" id="recipesSpeciesLabel">{ui.recipesSpeciesLabel}</label>
          <select id="recipesSpecies" value={speciesId} onChange={(e) => setSpeciesId(e.target.value)}>
            {Object.keys(SPECIES).map((id) => (
              <option key={id} value={id}>{speciesTexts[id].name}</option>
            ))}
          </select>
        </div>
      </div>

      {recipeList.map((recipe) => {
        const t = speciesRecipeTexts[recipe.id];
        if (!t) return null;
        return (
          <div className="card" key={recipe.id}>
            <h2>{t.name}</h2>
            <div className="pill-row">
              <span className="pill">{ui[DIFFICULTY_KEY[recipe.difficulty]]}</span>
              <span className="pill">{recipe.timeMinutes} {ui.recipeTimeUnit}</span>
              <span className="pill">{ui.recipeServingsLabel}: {recipe.servings}</span>
            </div>
            <div className="desc">{t.description}</div>

            <div className="field">
              <h2>{ui.recipeIngredientsHeader}</h2>
              <ul className="ingredients">
                {t.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
              </ul>
            </div>

            <div className="field">
              <h2>{ui.recipeStepsHeader}</h2>
              <ol className="steps">
                {t.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
          </div>
        );
      })}

      <div className="footnote">{ui.recipesFootnote}</div>
    </div>
  );
}
