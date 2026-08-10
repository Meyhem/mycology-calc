const TAB_ORDER = ['substrate', 'lc', 'agar'];

export default function Tabs({ active, onChange, ui }) {
  const labels = {
    substrate: ui.tabSubstrate,
    lc: ui.tabLc,
    agar: ui.tabAgar,
  };
  const ids = {
    substrate: 'tabBtnSubstrate',
    lc: 'tabBtnLc',
    agar: 'tabBtnAgar',
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
