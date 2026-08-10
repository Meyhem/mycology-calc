// Culinary (cooking) recipes per species, ordered simplest-first.
// difficulty: 1 = easy, 2 = intermediate, 3 = advanced.
// nutrition is a rough per-serving estimate (kcal, protein/carbs/fat/fiber in grams),
// based on the listed ingredient quantities divided by servings — not a lab analysis.
// Recipe text (name, ingredients, steps, benefits) lives in i18n.js under
// culinaryRecipes[lang][speciesId][id].
export const CULINARY_RECIPES = {
  oyster: [
    { id: 'toast', difficulty: 1, timeMinutes: 10, servings: 2, nutrition: { kcal: 230, proteinG: 7, carbsG: 26, fatG: 10, fiberG: 3 } },
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2, nutrition: { kcal: 150, proteinG: 4, carbsG: 4, fatG: 12, fiberG: 1 } },
    { id: 'pasta', difficulty: 1, timeMinutes: 25, servings: 3, nutrition: { kcal: 480, proteinG: 15, carbsG: 61, fatG: 19, fiberG: 4 } },
    { id: 'soup', difficulty: 2, timeMinutes: 35, servings: 4, nutrition: { kcal: 230, proteinG: 5, carbsG: 12, fatG: 17, fiberG: 2 } },
    { id: 'friedChicken', difficulty: 2, timeMinutes: 35, servings: 3, nutrition: { kcal: 350, proteinG: 9, carbsG: 34, fatG: 19, fiberG: 3 } },
  ],
  pinkOyster: [
    { id: 'crispy', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 120, proteinG: 4, carbsG: 5, fatG: 9, fiberG: 1 } },
    { id: 'pasta', difficulty: 1, timeMinutes: 25, servings: 3, nutrition: { kcal: 400, proteinG: 13, carbsG: 66, fatG: 9, fiberG: 6 } },
    { id: 'soup', difficulty: 1, timeMinutes: 25, servings: 2, nutrition: { kcal: 320, proteinG: 13, carbsG: 55, fatG: 5, fiberG: 4 } },
    { id: 'tacos', difficulty: 2, timeMinutes: 30, servings: 3, nutrition: { kcal: 290, proteinG: 8, carbsG: 33, fatG: 11, fiberG: 4 } },
    { id: 'jerky', difficulty: 2, timeMinutes: 330, servings: 4, nutrition: { kcal: 70, proteinG: 4, carbsG: 6, fatG: 4, fiberG: 2 } },
  ],
  kingOyster: [
    { id: 'scallops', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 160, proteinG: 4, carbsG: 6, fatG: 12, fiberG: 2 } },
    { id: 'stirfry', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 190, proteinG: 5, carbsG: 11, fatG: 14, fiberG: 2 } },
    { id: 'roasted', difficulty: 1, timeMinutes: 30, servings: 3, nutrition: { kcal: 130, proteinG: 4, carbsG: 7, fatG: 9, fiberG: 2 } },
    { id: 'skewers', difficulty: 2, timeMinutes: 35, servings: 3, nutrition: { kcal: 210, proteinG: 6, carbsG: 14, fatG: 11, fiberG: 2 } },
    { id: 'bbqPulled', difficulty: 2, timeMinutes: 40, servings: 3, nutrition: { kcal: 330, proteinG: 9, carbsG: 51, fatG: 10, fiberG: 4 } },
  ],
  lionsMane: [
    { id: 'coffee', difficulty: 1, timeMinutes: 10, servings: 1, nutrition: { kcal: 20, proteinG: 1, carbsG: 4, fatG: 0, fiberG: 1 } },
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2, nutrition: { kcal: 170, proteinG: 5, carbsG: 5, fatG: 14, fiberG: 2 } },
    { id: 'lobsterRoll', difficulty: 2, timeMinutes: 30, servings: 2, nutrition: { kcal: 430, proteinG: 10, carbsG: 34, fatG: 28, fiberG: 3 } },
    { id: 'nuggets', difficulty: 2, timeMinutes: 35, servings: 3, nutrition: { kcal: 280, proteinG: 9, carbsG: 27, fatG: 15, fiberG: 3 } },
    { id: 'crabcakes', difficulty: 2, timeMinutes: 40, servings: 4, nutrition: { kcal: 270, proteinG: 9, carbsG: 19, fatG: 16, fiberG: 2 } },
  ],
  shiitake: [
    { id: 'stirfry', difficulty: 1, timeMinutes: 15, servings: 2, nutrition: { kcal: 140, proteinG: 4, carbsG: 9, fatG: 9, fiberG: 2 } },
    { id: 'roasted', difficulty: 1, timeMinutes: 25, servings: 3, nutrition: { kcal: 130, proteinG: 4, carbsG: 8, fatG: 9, fiberG: 3 } },
    { id: 'bacon', difficulty: 2, timeMinutes: 30, servings: 4, nutrition: { kcal: 80, proteinG: 2, carbsG: 6, fatG: 5, fiberG: 2 } },
    { id: 'ramen', difficulty: 2, timeMinutes: 40, servings: 2, nutrition: { kcal: 520, proteinG: 24, carbsG: 68, fatG: 16, fiberG: 6 } },
    { id: 'dashi', difficulty: 2, timeMinutes: 45, servings: 4, nutrition: { kcal: 100, proteinG: 4, carbsG: 13, fatG: 2, fiberG: 2 } },
  ],
  reishi: [
    { id: 'tea', difficulty: 1, timeMinutes: 90, servings: 2, nutrition: { kcal: 15, proteinG: 0, carbsG: 4, fatG: 0, fiberG: 0 } },
    { id: 'coffee', difficulty: 1, timeMinutes: 10, servings: 1, nutrition: { kcal: 20, proteinG: 1, carbsG: 4, fatG: 0, fiberG: 1 } },
    { id: 'hotChocolate', difficulty: 1, timeMinutes: 10, servings: 1, nutrition: { kcal: 190, proteinG: 9, carbsG: 22, fatG: 8, fiberG: 3 } },
    { id: 'broth', difficulty: 2, timeMinutes: 130, servings: 4, nutrition: { kcal: 20, proteinG: 1, carbsG: 3, fatG: 0, fiberG: 1 } },
    { id: 'tincture', difficulty: 3, timeMinutes: 20, servings: 1, nutrition: { kcal: 35, proteinG: 0, carbsG: 1, fatG: 0, fiberG: 0 } },
  ],
  wineCap: [
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2, nutrition: { kcal: 150, proteinG: 4, carbsG: 5, fatG: 12, fiberG: 1 } },
    { id: 'grilled', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 160, proteinG: 4, carbsG: 7, fatG: 13, fiberG: 2 } },
    { id: 'pasta', difficulty: 1, timeMinutes: 30, servings: 3, nutrition: { kcal: 500, proteinG: 15, carbsG: 62, fatG: 21, fiberG: 4 } },
    { id: 'risotto', difficulty: 2, timeMinutes: 40, servings: 4, nutrition: { kcal: 440, proteinG: 11, carbsG: 58, fatG: 14, fiberG: 3 } },
    { id: 'soup', difficulty: 2, timeMinutes: 40, servings: 4, nutrition: { kcal: 220, proteinG: 6, carbsG: 26, fatG: 10, fiberG: 4 } },
  ],
  buttonAgaricus: [
    { id: 'garlicButter', difficulty: 1, timeMinutes: 15, servings: 3, nutrition: { kcal: 110, proteinG: 4, carbsG: 4, fatG: 8, fiberG: 2 } },
    { id: 'grilled', difficulty: 1, timeMinutes: 15, servings: 2, nutrition: { kcal: 140, proteinG: 3, carbsG: 5, fatG: 12, fiberG: 1 } },
    { id: 'stuffed', difficulty: 2, timeMinutes: 35, servings: 4, nutrition: { kcal: 190, proteinG: 8, carbsG: 11, fatG: 12, fiberG: 2 } },
    { id: 'soup', difficulty: 2, timeMinutes: 35, servings: 4, nutrition: { kcal: 240, proteinG: 6, carbsG: 15, fatG: 18, fiberG: 2 } },
    { id: 'stroganoff', difficulty: 2, timeMinutes: 40, servings: 4, nutrition: { kcal: 230, proteinG: 8, carbsG: 11, fatG: 17, fiberG: 3 } },
  ],
  turkeyTail: [
    { id: 'tea', difficulty: 1, timeMinutes: 60, servings: 2, nutrition: { kcal: 10, proteinG: 0, carbsG: 3, fatG: 0, fiberG: 0 } },
    { id: 'chai', difficulty: 1, timeMinutes: 25, servings: 2, nutrition: { kcal: 90, proteinG: 4, carbsG: 12, fatG: 3, fiberG: 1 } },
    { id: 'misoSoup', difficulty: 2, timeMinutes: 40, servings: 3, nutrition: { kcal: 90, proteinG: 7, carbsG: 5, fatG: 4, fiberG: 1 } },
    { id: 'broth', difficulty: 2, timeMinutes: 180, servings: 4, nutrition: { kcal: 45, proteinG: 2, carbsG: 6, fatG: 1, fiberG: 1 } },
    { id: 'tincture', difficulty: 3, timeMinutes: 150, servings: 1, nutrition: { kcal: 30, proteinG: 0, carbsG: 1, fatG: 0, fiberG: 0 } },
  ],
  chestnut: [
    { id: 'sauteed', difficulty: 1, timeMinutes: 15, servings: 2, nutrition: { kcal: 150, proteinG: 4, carbsG: 6, fatG: 12, fiberG: 1 } },
    { id: 'roasted', difficulty: 1, timeMinutes: 25, servings: 3, nutrition: { kcal: 120, proteinG: 4, carbsG: 6, fatG: 9, fiberG: 2 } },
    { id: 'pasta', difficulty: 1, timeMinutes: 30, servings: 3, nutrition: { kcal: 440, proteinG: 15, carbsG: 63, fatG: 14, fiberG: 4 } },
    { id: 'noodles', difficulty: 2, timeMinutes: 30, servings: 3, nutrition: { kcal: 370, proteinG: 11, carbsG: 58, fatG: 9, fiberG: 3 } },
    { id: 'pickled', difficulty: 2, timeMinutes: 40, servings: 6, nutrition: { kcal: 50, proteinG: 2, carbsG: 5, fatG: 2, fiberG: 1 } },
  ],
  enoki: [
    { id: 'soup', difficulty: 1, timeMinutes: 15, servings: 2, nutrition: { kcal: 80, proteinG: 5, carbsG: 9, fatG: 2, fiberG: 2 } },
    { id: 'stirfry', difficulty: 1, timeMinutes: 10, servings: 2, nutrition: { kcal: 110, proteinG: 5, carbsG: 7, fatG: 8, fiberG: 3 } },
    { id: 'salad', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 70, proteinG: 4, carbsG: 7, fatG: 3, fiberG: 3 } },
    { id: 'pancake', difficulty: 2, timeMinutes: 30, servings: 3, nutrition: { kcal: 230, proteinG: 8, carbsG: 25, fatG: 11, fiberG: 3 } },
    { id: 'baconWrap', difficulty: 2, timeMinutes: 30, servings: 3, nutrition: { kcal: 240, proteinG: 10, carbsG: 7, fatG: 18, fiberG: 1 } },
  ],
  cordyceps: [
    { id: 'tea', difficulty: 1, timeMinutes: 15, servings: 1, nutrition: { kcal: 15, proteinG: 0, carbsG: 3, fatG: 0, fiberG: 0 } },
    { id: 'coffee', difficulty: 1, timeMinutes: 10, servings: 1, nutrition: { kcal: 20, proteinG: 1, carbsG: 3, fatG: 0, fiberG: 1 } },
    { id: 'smoothie', difficulty: 1, timeMinutes: 10, servings: 1, nutrition: { kcal: 400, proteinG: 15, carbsG: 51, fatG: 16, fiberG: 5 } },
    { id: 'soup', difficulty: 2, timeMinutes: 45, servings: 4, nutrition: { kcal: 150, proteinG: 14, carbsG: 6, fatG: 6, fiberG: 1 } },
    { id: 'congee', difficulty: 2, timeMinutes: 60, servings: 4, nutrition: { kcal: 320, proteinG: 21, carbsG: 39, fatG: 9, fiberG: 1 } },
  ],
  maitake: [
    { id: 'stirfry', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 170, proteinG: 5, carbsG: 9, fatG: 13, fiberG: 3 } },
    { id: 'roasted', difficulty: 1, timeMinutes: 25, servings: 2, nutrition: { kcal: 160, proteinG: 4, carbsG: 9, fatG: 12, fiberG: 2 } },
    { id: 'soup', difficulty: 2, timeMinutes: 30, servings: 3, nutrition: { kcal: 110, proteinG: 8, carbsG: 7, fatG: 5, fiberG: 2 } },
    { id: 'pasta', difficulty: 2, timeMinutes: 30, servings: 3, nutrition: { kcal: 510, proteinG: 16, carbsG: 62, fatG: 22, fiberG: 4 } },
    { id: 'tempura', difficulty: 2, timeMinutes: 30, servings: 3, nutrition: { kcal: 340, proteinG: 8, carbsG: 32, fatG: 20, fiberG: 2 } },
  ],
  morel: [
    { id: 'toast', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 300, proteinG: 8, carbsG: 28, fatG: 17, fiberG: 3 } },
    { id: 'sauteed', difficulty: 1, timeMinutes: 20, servings: 2, nutrition: { kcal: 150, proteinG: 4, carbsG: 6, fatG: 12, fiberG: 2 } },
    { id: 'creamsauce', difficulty: 2, timeMinutes: 35, servings: 3, nutrition: { kcal: 310, proteinG: 6, carbsG: 11, fatG: 24, fiberG: 2 } },
    { id: 'risotto', difficulty: 2, timeMinutes: 45, servings: 4, nutrition: { kcal: 450, proteinG: 12, carbsG: 62, fatG: 15, fiberG: 3 } },
    { id: 'stuffed', difficulty: 3, timeMinutes: 50, servings: 4, nutrition: { kcal: 280, proteinG: 12, carbsG: 9, fatG: 21, fiberG: 2 } },
  ],
};
