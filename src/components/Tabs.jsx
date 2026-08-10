const TAB_ORDER = ['substrate', 'grain', 'lc', 'agar', 'species', 'yield', 'drying'];

export default function Tabs({ active, onChange, ui }) {
  const labels = {
    substrate: ui.tabSubstrate,
    grain: ui.tabGrain,
    lc: ui.tabLc,
    agar: ui.tabAgar,
    species: ui.tabSpecies,
    yield: ui.tabYield,
    drying: ui.tabDrying,
  };
  const ids = {
    substrate: 'tabBtnSubstrate',
    grain: 'tabBtnGrain',
    lc: 'tabBtnLc',
    agar: 'tabBtnAgar',
    species: 'tabBtnSpecies',
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
