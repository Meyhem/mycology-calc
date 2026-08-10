/* ==================================================================
   Format helpers (ported 1:1 from the original vanilla-JS app)
   ================================================================== */
const G_PER_OZ = 28.3495;
const G_PER_LB = 453.592;
const ML_PER_FLOZ = 29.5735;
const ML_PER_QT = 946.353;
const ML_PER_GAL = 3785.41;

export function fmtVol(mL, unit = 'metric') {
  if (unit === 'us') {
    if (mL >= ML_PER_GAL) return (mL / ML_PER_GAL).toFixed(2).replace(/\.00$/, '') + ' gal';
    if (mL >= ML_PER_QT) return (mL / ML_PER_QT).toFixed(2).replace(/\.00$/, '') + ' qt';
    return (mL / ML_PER_FLOZ).toFixed(1).replace(/\.0$/, '') + ' fl oz';
  }
  if (mL >= 1000) return (mL / 1000).toFixed(2).replace(/\.00$/, '') + ' L';
  return Math.round(mL) + ' mL';
}

export function fmtWeight(g, unit = 'metric') {
  if (unit === 'us') {
    if (g >= G_PER_LB) return (g / G_PER_LB).toFixed(2).replace(/\.00$/, '') + ' lb';
    return (g / G_PER_OZ).toFixed(1).replace(/\.0$/, '') + ' oz';
  }
  if (g >= 1000) return (g / 1000).toFixed(2).replace(/\.00$/, '') + ' kg';
  return Math.round(g) + ' g';
}

export function starsText(stars) {
  return '★'.repeat(stars) + '☆'.repeat(5 - stars);
}

// Replaces {V} with formatted total volume, {iNv}/{iNw} with formatted volume/weight of ingredient N
export function renderTemplate(tpl, V, r, unit = 'metric') {
  return tpl
    .replace(/\{V\}/g, fmtVol(V, unit))
    .replace(/\{i(\d+)v\}/g, (_, idx) => fmtVol(r.ingredients[+idx].volumeMl, unit))
    .replace(/\{i(\d+)w\}/g, (_, idx) => fmtWeight(r.ingredients[+idx].weightG, unit));
}
