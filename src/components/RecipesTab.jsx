import { useState } from 'react';
import { SPECIES } from '../data/species';
import { CULINARY_RECIPES } from '../data/culinaryRecipes';

const DIFFICULTY_KEY = { 1: 'recipeDifficultyEasy', 2: 'recipeDifficultyMedium', 3: 'recipeDifficultyAdvanced' };

export default function RecipesTab({ active, ui, speciesTexts, recipeTexts, speciesId, setSpeciesId }) {
  const recipeList = CULINARY_RECIPES[speciesId] || [];
  const speciesRecipeTexts = recipeTexts[speciesId] || {};
  const [openIds, setOpenIds] = useState({});
  const toggle = (id) => setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));

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
        const isOpen = !!openIds[recipe.id];
        return (
          <div className="card recipe-card" key={recipe.id}>
            <button
              type="button"
              className="recipe-toggle"
              aria-expanded={isOpen}
              onClick={() => toggle(recipe.id)}
            >
              <h2>{t.name}</h2>
              <div className="pill-row">
                <span className="pill">{ui[DIFFICULTY_KEY[recipe.difficulty]]}</span>
                <span className="pill">{recipe.timeMinutes} {ui.recipeTimeUnit}</span>
                <span className="pill">{ui.recipeServingsLabel}: {recipe.servings}</span>
              </div>
              <span className="recipe-toggle-icon">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && (
              <div className="recipe-body">
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

                <div className="field">
                  <h2>{ui.recipeNutritionHeader}</h2>
                  <div className="profile-grid">
                    <div className="profile-item">
                      <div className="k">{ui.recipeKcalLabel}</div>
                      <div className="v">{recipe.nutrition.kcal} {ui.recipeKcalUnit}</div>
                    </div>
                    <div className="profile-item">
                      <div className="k">{ui.recipeProteinLabel}</div>
                      <div className="v">{recipe.nutrition.proteinG} g</div>
                    </div>
                    <div className="profile-item">
                      <div className="k">{ui.recipeCarbsLabel}</div>
                      <div className="v">{recipe.nutrition.carbsG} g</div>
                    </div>
                    <div className="profile-item">
                      <div className="k">{ui.recipeFatLabel}</div>
                      <div className="v">{recipe.nutrition.fatG} g</div>
                    </div>
                    <div className="profile-item">
                      <div className="k">{ui.recipeFiberLabel}</div>
                      <div className="v">{recipe.nutrition.fiberG} g</div>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <h2>{ui.recipeBenefitsHeader}</h2>
                  <ul className="ingredients">
                    {t.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="footnote">{ui.recipesFootnote}</div>
    </div>
  );
}
