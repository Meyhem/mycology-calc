// Culinary (cooking) recipes per species, ordered simplest-first.
// difficulty: 1 = easy, 2 = intermediate, 3 = advanced.
// Recipe text (name, ingredients, steps) lives in i18n.js under culinaryRecipes[lang][speciesId][id].
export const CULINARY_RECIPES = {
  oyster: [
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2 },
    { id: 'soup', difficulty: 2, timeMinutes: 35, servings: 4 },
  ],
  pinkOyster: [
    { id: 'crispy', difficulty: 1, timeMinutes: 20, servings: 2 },
    { id: 'tacos', difficulty: 2, timeMinutes: 30, servings: 3 },
  ],
  kingOyster: [
    { id: 'scallops', difficulty: 1, timeMinutes: 20, servings: 2 },
    { id: 'skewers', difficulty: 2, timeMinutes: 35, servings: 3 },
  ],
  lionsMane: [
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2 },
    { id: 'crabcakes', difficulty: 2, timeMinutes: 40, servings: 4 },
  ],
  shiitake: [
    { id: 'stirfry', difficulty: 1, timeMinutes: 15, servings: 2 },
    { id: 'dashi', difficulty: 2, timeMinutes: 45, servings: 4 },
  ],
  reishi: [
    { id: 'tea', difficulty: 1, timeMinutes: 90, servings: 2 },
    { id: 'tincture', difficulty: 3, timeMinutes: 20, servings: 1 },
  ],
  wineCap: [
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2 },
    { id: 'risotto', difficulty: 2, timeMinutes: 40, servings: 4 },
  ],
  buttonAgaricus: [
    { id: 'grilled', difficulty: 1, timeMinutes: 15, servings: 2 },
    { id: 'soup', difficulty: 2, timeMinutes: 35, servings: 4 },
  ],
  turkeyTail: [
    { id: 'tea', difficulty: 1, timeMinutes: 60, servings: 2 },
    { id: 'broth', difficulty: 2, timeMinutes: 180, servings: 4 },
  ],
  chestnut: [
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2 },
    { id: 'noodles', difficulty: 2, timeMinutes: 30, servings: 3 },
  ],
  enoki: [
    { id: 'soup', difficulty: 1, timeMinutes: 15, servings: 2 },
    { id: 'baconWrap', difficulty: 2, timeMinutes: 30, servings: 3 },
  ],
  cordyceps: [
    { id: 'tea', difficulty: 1, timeMinutes: 15, servings: 1 },
    { id: 'soup', difficulty: 2, timeMinutes: 45, servings: 4 },
  ],
  maitake: [
    { id: 'roasted', difficulty: 1, timeMinutes: 25, servings: 2 },
    { id: 'tempura', difficulty: 2, timeMinutes: 30, servings: 3 },
  ],
  morel: [
    { id: 'sauteed', difficulty: 1, timeMinutes: 20, servings: 2 },
    { id: 'creamsauce', difficulty: 2, timeMinutes: 35, servings: 3 },
  ],
};
