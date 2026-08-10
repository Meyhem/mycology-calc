/* ==================================================================
   Format helpers (ported 1:1 from the original vanilla-JS app)
   ================================================================== */
export function fmtVol(mL) {
  if (mL >= 1000) return (mL / 1000).toFixed(2).replace(/\.00$/, '') + ' L';
  return Math.round(mL) + ' mL';
}

export function fmtWeight(g) {
  if (g >= 1000) return (g / 1000).toFixed(2).replace(/\.00$/, '') + ' kg';
  return Math.round(g) + ' g';
}

export function starsText(stars) {
  return '★'.repeat(stars) + '☆'.repeat(5 - stars);
}

// Replaces {V} with formatted total volume, {iNv}/{iNw} with formatted volume/weight of ingredient N
export function renderTemplate(tpl, V, r) {
  return tpl
    .replace(/\{V\}/g, fmtVol(V))
    .replace(/\{i(\d+)v\}/g, (_, idx) => fmtVol(r.ingredients[+idx].volumeMl))
    .replace(/\{i(\d+)w\}/g, (_, idx) => fmtWeight(r.ingredients[+idx].weightG));
}
