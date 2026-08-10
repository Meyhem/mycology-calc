const TAB_ORDER = ['species', 'grain', 'lc', 'agar', 'substrate', 'conditions', 'yield', 'drying', 'recipes'];

export default function Tabs({ active, onChange, ui }) {
  const labels = {
    substrate: ui.tabSubstrate,
    grain: ui.tabGrain,
    lc: ui.tabLc,
    agar: ui.tabAgar,
    species: ui.tabSpecies,
    recipes: ui.tabRecipes,
    conditions: ui.tabConditions,
    yield: ui.tabYield,
    drying: ui.tabDrying,
  };
  const ids = {
    substrate: 'tabBtnSubstrate',
    grain: 'tabBtnGrain',
    lc: 'tabBtnLc',
    agar: 'tabBtnAgar',
    species: 'tabBtnSpecies',
    recipes: 'tabBtnRecipes',
    conditions: 'tabBtnConditions',
    yield: 'tabBtnYield',
    drying: 'tabBtnDrying',
  };
  return (
    <div className="tabs">
      {TAB_ORDER.map((tab) => (
        <button
          key={tab}
          id={ids[tab]}
          className={'tab-btn' + (active === tab ? ' active' : '')}
          data-tab={tab}
          onClick={() => onChange(tab)}
        >
          {labels[tab]}
        </button>
      ))}
    </div>
  );
}
