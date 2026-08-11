export const SUBSTRATES = {
  cvg: {
    stars: 5,
    calc(V) {
      const coirVol = V;
      const vermVol = V;
      const coirDryWeight = coirVol * 0.16;
      const coirWater = coirVol * 0.75;
      const vermWeight = vermVol * 0.13;
      const substrateDryWeight = coirDryWeight + vermWeight;
      const gypsumWeight = substrateDryWeight * 0.02;
      return {
        ingredients: [
          { weightG: coirDryWeight },
          { volumeMl: coirWater },
          { volumeMl: vermVol, weightG: vermWeight },
          { weightG: gypsumWeight },
        ],
        totalVolume: coirVol + vermVol,
        totalWeight: coirDryWeight + coirWater + vermWeight + gypsumWeight,
      };
    },
  },
  soil: {
    stars: 4,
    calc(V) {
      const soilVol = V * 3;
      const soilWeight = soilVol * 0.7;
      const compostWeight = soilWeight * 0.3;
      const gypsumWeight = (soilWeight + compostWeight) * 0.02;
      const water = (soilWeight + compostWeight) * 0.15;
      return {
        ingredients: [
          { volumeMl: soilVol, weightG: soilWeight },
          { weightG: compostWeight },
          { weightG: gypsumWeight },
          { volumeMl: water },
        ],
        totalVolume: soilVol,
        totalWeight: soilWeight + compostWeight + gypsumWeight + water,
      };
    },
  },
  masters: {
    stars: 5,
    calc(V) {
      const dryPelletTotal = V * 0.4;
      const soyHull = dryPelletTotal / 2;
      const hardwood = dryPelletTotal / 2;
      const soakWater = dryPelletTotal * 3;
      return {
        ingredients: [
          { weightG: soyHull },
          { weightG: hardwood },
          { volumeMl: soakWater },
        ],
        totalVolume: V,
        totalWeight: dryPelletTotal,
      };
    },
  },
  straw: {
    stars: 4,
    calc(V) {
      const strawVol = V * 4;
      const strawDryWeight = strawVol * 0.05;
      const water = strawDryWeight * 3;
      return {
        ingredients: [
          { volumeMl: strawVol, weightG: strawDryWeight },
          { volumeMl: water },
        ],
        totalVolume: strawVol,
        totalWeight: strawDryWeight + water,
      };
    },
  },
  manure: {
    stars: 4,
    calc(V) {
      const manureVol = V * 5;
      const manureWeight = manureVol * 0.5;
      const gypsumWeight = manureWeight * 0.03;
      const water = manureWeight * 0.10;
      return {
        ingredients: [
          { volumeMl: manureVol, weightG: manureWeight },
          { weightG: gypsumWeight },
          { volumeMl: water },
        ],
        totalVolume: manureVol,
        totalWeight: manureWeight + gypsumWeight,
      };
    },
  },
  coffee: {
    stars: 3,
    calc(V) {
      const groundsVol = V * 2;
      const groundsWeight = groundsVol * 0.5;
      return {
        ingredients: [
          { volumeMl: groundsVol, weightG: groundsWeight },
        ],
        totalVolume: groundsVol,
        totalWeight: groundsWeight,
      };
    },
  },
  cardboard: {
    stars: 2,
    calc(V) {
      const cardboardVol = V * 3;
      const cardboardWeight = cardboardVol * 0.2;
      const water = cardboardWeight * 2;
      return {
        ingredients: [
          { volumeMl: cardboardVol, weightG: cardboardWeight },
          { volumeMl: water },
        ],
        totalVolume: cardboardVol,
        totalWeight: cardboardWeight + water,
      };
    },
  },
  sawdust: {
    stars: 5,
    calc(V) {
      const substrateVol = V * 4;
      const drySawdust = substrateVol * 0.24;
      const dryBran = substrateVol * 0.06;
      const water = (drySawdust + dryBran) * 1.3;
      return {
        ingredients: [
          { weightG: drySawdust },
          { weightG: dryBran },
          { volumeMl: water },
        ],
        totalVolume: substrateVol,
        totalWeight: drySawdust + dryBran + water,
      };
    },
  },
  fuelpellets: {
    stars: 4,
    calc(V) {
      const dryPelletTotal = V * 0.4;
      const soakWater = dryPelletTotal * 3;
      return {
        ingredients: [
          { weightG: dryPelletTotal },
          { volumeMl: soakWater },
        ],
        totalVolume: V,
        totalWeight: dryPelletTotal,
      };
    },
  },
};
export const LC_RECIPES = {
  lme: {
    stars: 5,
    calc(V) {
      const lme = V * 0.04;
      return { ingredients: [{ weightG: lme }, { volumeMl: V }], totalVolume: V, totalWeight: lme + V };
    },
  },
  honey: {
    stars: 4,
    calc(V) {
      const honey = V * 0.04;
      return { ingredients: [{ weightG: honey }, { volumeMl: V }], totalVolume: V, totalWeight: honey + V };
    },
  },
  cornsyrup: {
    stars: 4,
    calc(V) {
      const syrup = V * 0.03;
      return { ingredients: [{ weightG: syrup }, { volumeMl: V }], totalVolume: V, totalWeight: syrup + V };
    },
  },
  dextrose: {
    stars: 4,
    calc(V) {
      const dextrose = V * 0.04;
      return { ingredients: [{ weightG: dextrose }, { volumeMl: V }], totalVolume: V, totalWeight: dextrose + V };
    },
  },
  potatodextrose: {
    stars: 4,
    calc(V) {
      const potato = V * 0.2;
      const dextrose = V * 0.02;
      return {
        ingredients: [{ weightG: potato }, { weightG: dextrose }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: potato + dextrose + V,
      };
    },
  },
  brownsugar: {
    stars: 3,
    calc(V) {
      const sugar = V * 0.04;
      return { ingredients: [{ weightG: sugar }, { volumeMl: V }], totalVolume: V, totalWeight: sugar + V };
    },
  },
  maple: {
    stars: 3,
    calc(V) {
      const syrup = V * 0.04;
      return { ingredients: [{ weightG: syrup }, { volumeMl: V }], totalVolume: V, totalWeight: syrup + V };
    },
  },
  wort: {
    stars: 5,
    calc(V) {
      const maltedBarley = V * 0.15;
      return { ingredients: [{ weightG: maltedBarley }, { volumeMl: V }], totalVolume: V, totalWeight: maltedBarley + V };
    },
  },
};
export const AGAR_RECIPES = {
  mea: {
    stars: 5,
    calc(V) {
      const lme = V * 0.02;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: lme }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: lme + agar + V,
      };
    },
  },
  pda: {
    stars: 5,
    calc(V) {
      const potato = V * 0.2;
      const dextrose = V * 0.02;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: potato }, { weightG: dextrose }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: potato + dextrose + agar + V,
      };
    },
  },
  mya: {
    stars: 5,
    calc(V) {
      const lme = V * 0.02;
      const yeast = V * 0.002;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: lme }, { weightG: yeast }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: lme + yeast + agar + V,
      };
    },
  },
  honeyagar: {
    stars: 3,
    calc(V) {
      const honey = V * 0.04;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: honey }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: honey + agar + V,
      };
    },
  },
  ricewater: {
    stars: 3,
    calc(V) {
      const rice = V * 0.05;
      const dextrose = V * 0.01;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: rice }, { weightG: dextrose }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: rice + dextrose + agar + V,
      };
    },
  },
  coconutwater: {
    stars: 3,
    calc(V) {
      const dextrose = V * 0.01;
      const agar = V * 0.02;
      return {
        ingredients: [{ volumeMl: V }, { weightG: dextrose }, { weightG: agar }],
        totalVolume: V,
        totalWeight: V + dextrose + agar,
      };
    },
  },
  plainwater: {
    stars: 2,
    calc(V) {
      const agar = V * 0.015;
      return { ingredients: [{ weightG: agar }, { volumeMl: V }], totalVolume: V, totalWeight: agar + V };
    },
  },
  banana: {
    stars: 3,
    calc(V) {
      const banana = V * 0.15;
      const dextrose = V * 0.01;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: banana }, { weightG: dextrose }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: banana + dextrose + agar + V,
      };
    },
  },
  carrot: {
    stars: 3,
    calc(V) {
      const carrot = V * 0.2;
      const dextrose = V * 0.01;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: carrot }, { weightG: dextrose }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: carrot + dextrose + agar + V,
      };
    },
  },
  beerwort: {
    stars: 5,
    calc(V) {
      const maltedBarley = V * 0.1;
      const dextrose = V * 0.01;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: maltedBarley }, { weightG: dextrose }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: maltedBarley + dextrose + agar + V,
      };
    },
  },
  dextrose: {
    stars: 3,
    calc(V) {
      const dextrose = V * 0.02;
      const agar = V * 0.02;
      return {
        ingredients: [{ weightG: dextrose }, { weightG: agar }, { volumeMl: V }],
        totalVolume: V,
        totalWeight: dextrose + agar + V,
      };
    },
  },
};
