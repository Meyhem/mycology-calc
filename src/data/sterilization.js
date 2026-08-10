export const PC_CONTAINERS = {
  pint: { mL: 475, minutes: 75 },
  quart: { mL: 950, minutes: 90 },
  halfGallon: { mL: 1900, minutes: 120 },
  growBag5lb: { mL: 2500, minutes: 150 },
};

// Gauge PSI needed at altitude to reach the same true sterilizing temperature as
// 15 psi at sea level. Approximate, scaled from standard home pressure-canning
// altitude adjustment tables (roughly +1 psi per ~610 m / 2,000 ft).
export function psiForAltitude(altitudeM) {
  const steps = Math.max(0, Math.floor(altitudeM / 610));
  return 15 + steps;
}
