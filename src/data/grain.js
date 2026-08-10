// calc(V): V is target hydrated grain volume (mL), matching the pattern in recipes.js.
export const GRAIN_RECIPES = {
  rye: {
    stars: 5,
    calc(V) {
      const dryVol = V / 1.5;
      const dryWeight = dryVol * 0.72;
      const soakWater = dryVol * 2.5;
      const gypsum = dryWeight * 0.01;
      return {
        ingredients: [
          { volumeMl: dryVol, weightG: dryWeight },
          { volumeMl: soakWater },
          { weightG: gypsum },
        ],
        totalVolume: V,
        totalWeight: dryWeight * 2 + gypsum,
      };
    },
  },
  wheatberries: {
    stars: 5,
    calc(V) {
      const dryVol = V / 1.5;
      const dryWeight = dryVol * 0.77;
      const soakWater = dryVol * 2.5;
      const gypsum = dryWeight * 0.01;
      return {
        ingredients: [
          { volumeMl: dryVol, weightG: dryWeight },
          { volumeMl: soakWater },
          { weightG: gypsum },
        ],
        totalVolume: V,
        totalWeight: dryWeight * 2 + gypsum,
      };
    },
  },
  oats: {
    stars: 4,
    calc(V) {
      const dryVol = V / 1.4;
      const dryWeight = dryVol * 0.65;
      const soakWater = dryVol * 2.5;
      const gypsum = dryWeight * 0.01;
      return {
        ingredients: [
          { volumeMl: dryVol, weightG: dryWeight },
          { volumeMl: soakWater },
          { weightG: gypsum },
        ],
        totalVolume: V,
        totalWeight: dryWeight * 2 + gypsum,
      };
    },
  },
  popcorn: {
    stars: 4,
    calc(V) {
      const dryVol = V / 1.6;
      const dryWeight = dryVol * 0.72;
      const soakWater = dryVol * 2.5;
      return {
        ingredients: [
          { volumeMl: dryVol, weightG: dryWeight },
          { volumeMl: soakWater },
        ],
        totalVolume: V,
        totalWeight: dryWeight * 2,
      };
    },
  },
  millet: {
    stars: 3,
    calc(V) {
      const dryVol = V / 1.7;
      const dryWeight = dryVol * 0.75;
      const soakWater = dryVol * 2.5;
      return {
        ingredients: [
          { volumeMl: dryVol, weightG: dryWeight },
          { volumeMl: soakWater },
        ],
        totalVolume: V,
        totalWeight: dryWeight * 2,
      };
    },
  },
  sorghum: {
    stars: 4,
    calc(V) {
      const dryVol = V / 1.6;
      const dryWeight = dryVol * 0.72;
      const soakWater = dryVol * 2.5;
      return {
        ingredients: [
          { volumeMl: dryVol, weightG: dryWeight },
          { volumeMl: soakWater },
        ],
        totalVolume: V,
        totalWeight: dryWeight * 2,
      };
    },
  },
};
